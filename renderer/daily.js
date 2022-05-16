let callFrame;

window.addEventListener("DOMContentLoaded", () => {
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
    .on("started-camera", (e) => {
      api.tryEnableBackgrounds();
    });

  // TODO: Replace the following URL with your own room URL.
  // callFrame.join({ url: "https://<your-domain>.daily.co/<room-name>" });
  callFrame.join({ url: "https://liza.staging.daily.co/hi" });
});

window.addEventListener("set-background", (ev) => {
  const data = ev.detail;
  let imgPath = data.imgPath;
  imgPath = "bg://" + imgPath;
  console.log("IMGPATH:", imgPath);

  const doPublish = Boolean(data.publish);
  callFrame.updateInputSettings({
    video: {
      processor: {
        type: "background-image",
        publish: doPublish,
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
