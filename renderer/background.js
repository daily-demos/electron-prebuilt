let selectedImgPath = null;
let setBackgroundBtn = null;

window.addEventListener("DOMContentLoaded", () => {
  init();
});

// Initialize relevant handlers
function init() {
  registerSetBackgroundButtonListener();
  const resetBtn = document.getElementById("reset");
  resetBtn.onclick = () => {
    api.resetBackground();
    imgPath = selectedImgPath;
  };
}

// Register the onclick event for the "Set Background" button
function registerSetBackgroundButtonListener() {
  setBackgroundBtn = document.getElementById("setBackground");
  setBackgroundBtn.onclick = () => {
    api.setBackground(selectedImgPath, true);
    setBackgroundBtn.disabled = true;
    selectedImgPath = null;
  };
}

// Listen for the "load-backgrounds" event sent by the preload,
// and load the given image files for the user to select from.
window.addEventListener("load-backgrounds", (event) => {
  const container = document.getElementById("bgImages");
  const backgrounds = event.detail.backgrounds;
  for (let i = 0; i < backgrounds.length; i++) {
    const img = document.createElement("img");
    const imgPath = backgrounds[i];
    img.src = imgPath;
    img.onclick = () => {
      selectedImgPath = imgPath;
      api.setBackground(imgPath, false);
      setBackgroundBtn.disabled = false;
    };
    container.appendChild(img);
  }
});
