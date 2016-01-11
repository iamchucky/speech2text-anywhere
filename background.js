var w = 400;
var h = 150;
var boundTop = Math.round(window.screen.availHeight-h);
var boundLeft = Math.round(window.screen.availWidth-w);
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('view.html', {
    id: "speech2text-anywhere",
    innerBounds: {
      left: 0,
      top: 0,
      width: w,
      height: h,
      minWidth: w,
      minHeight: h,
      maxWidth: w,
      maxHeight: h
    },
    frame: {
      type: 'none'
    },
    alwaysOnTop: true
  }, function(appWindow) {
    // onloaded
  });
});

