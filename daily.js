const callFrame = window.DailyIframe.createFrame({
  showLeaveButton: true,
  iframeStyle: {
    position: "fixed",
    width: "100%",
    height: "100%",
  },
});
callFrame.join({ url: "https://you.daily.co/hello" });
