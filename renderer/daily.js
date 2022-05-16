let callFrame;

window.addEventListener("DOMContentLoaded", () => {
  initCall();
});

function initCall() {
  const container = document.getElementById("container");

  callFrame = DailyIframe.createFrame(container, {
    showLeaveButton: true,
    iframeStyle: {
      position: "fixed",
      width: "calc(100% - 1rem)",
      height: "calc(100% - 1rem)",
    },
  })
    .on("nonfatal-error", (e) => {
      console.log(`nonfatal error: ${e}`);
    })
    .on("started-camera", () => {
      api.tryEnableBackgrounds();
    })
    .on("left-meeting", () => {
      initCall();
    });

  // TODO: Replace the following URL with your own room URL.
  callFrame.join({ url: "https://<your-domain>.daily.co/<room-name>" });
}

window.addEventListener("set-background", (ev) => {
  const data = ev.detail;
  let imgPath = data.imgPath;
  imgPath = "bg://" + imgPath;

  callFrame.updateInputSettings({
    video: {
      processor: {
        type: "background-image",
        config: {
          source: imgPath,
        },
      },
    },
  });
});

window.addEventListener("reset-background", (ev) => {
  callFrame.updateInputSettings({
    video: {
      processor: {
        type: "none",
      },
    },
  });
});
