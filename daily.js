window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");

  callFrame = window.DailyIframe.createFrame(container, {
    showLeaveButton: true,
    iframeStyle: {
      position: "fixed",
      width: "calc(100% - 1rem)",
      height: "calc(100% - 1rem)",
    },
  });
  // TODO: Replace the following URL with your own room URL.
  callFrame.join({ url: "https://<your-domain>.daily.co/<room-name>" });
});
