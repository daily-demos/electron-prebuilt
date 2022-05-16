const { app, BrowserWindow, Menu, ipcMain, protocol } = require("electron");
const path = require("path");
const fs = require("fs");

let callWindow = null;

// All loaded background file paths
let backgroundFiles = [];

// Whether all backgrounds file paths have been loaded
let backgroundsLoaded = false;

// Whether the call object is ready to accept background
// setting API requests.
let callObjectReady = false;

// We'll define a custom "bg" scheme to fetch our background images.
// Register it as privileged so that the Fetch API can support it
protocol.registerSchemesAsPrivileged([
  { scheme: "bg", privileges: { supportFetchAPI: true } },
]);

// createCallWindow creates the main application window in which
// the Daily call will be loaded.
function createCallWindow() {
  callWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preloadCall.js"),
    },
  });
  callWindow.webContents.openDevTools();
  callWindow.loadFile(path.join(__dirname, "../html", "index.html"));
}

// loadBackgroundFiles loads all jpg, jpeg, or png files in
// the backgrounds file directory
async function loadBackgroundFiles() {
  const dirPath = path.join(__dirname, "../backgrounds");
  fs.readdir(dirPath, function (err, files) {
    if (err) {
      console.error("failed to load background files", err);
      return;
    }
    files.forEach((file) => {
      const ext = path.extname(file);
      if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
        return;
      }

      const imgPath = path.join(dirPath, file);
      backgroundFiles.push(imgPath);
    });
  });

  backgroundsLoaded = true;
  tryEnableBackgroundSet();
}

app.whenReady().then(() => {
  // Register a custom protocol to fetch our background images
  protocol.registerFileProtocol("bg", (request, callback) => {
    const url = request.url;
    // Strip the scheme from the path
    const path = request.url.substring(5, url.length);
    callback({ path: path });
  });

  createCallWindow();
  createMenu();
  loadBackgroundFiles();
});

// createBackgroundSelection window creates a window in which the user
// can select a Daily video call background to set.
function createBackgroundSelectionWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, "preloadBackground.js"),
    },
    autoHideMenuBar: true,
  });
  win.webContents.openDevTools();

  win.loadFile(path.join(__dirname, "../html", "background.html"));

  win.webContents.once("dom-ready", () => {
    win.webContents.send("load-backgrounds", { backgrounds: backgroundFiles });
  });
}

// createMenu creates our application menu with the background setting option.
function createMenu() {
  const template = [
    {
      label: "Options",
      submenu: [
        {
          id: "background",
          label: "Background 🏔️",
          enabled: false,
          click: async () => {
            // Disable the button when the background selection
            // window is opened.
            this.enabled = false;
            createBackgroundSelectionWindow();
          },
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

// "set-background" event handler instructs the daily renderer
// process to set the given background for the local participant.
ipcMain.handle("set-background", (e, imgPath, doPublish = false) => {
  if (doPublish) {
    const wc = e.sender;
    const bgWindow = BrowserWindow.fromWebContents(wc);
    bgWindow.close();
  }
  callWindow.webContents.send("set-background", {
    imgPath: imgPath,
    doPublish: doPublish,
  });
});

// "reset-background" event handler instructs the daily renderer
// process to reset any custom backgrounds for the local participant.
ipcMain.handle("reset-background", (e) => {
  callWindow.webContents.send("reset-background");
});

// "try-enable-backgrounds" event handler will mark the call object
// as ready to accept background effects, and attempts to enable
// the background setting option menu.
ipcMain.handle("try-enable-backgrounds", () => {
  callObjectReady = true;
  tryEnableBackgroundSet();
});

// tryEnableBackgroundSet enables the background option menu item
// if all backgrounds have been successfully loaded and the call
// object is ready.
function tryEnableBackgroundSet() {
  if (backgroundsLoaded && callObjectReady) {
    const menuItem = Menu.getApplicationMenu().getMenuItemById("background");
    menuItem.enabled = true;
  }
}
