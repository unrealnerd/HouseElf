chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.command === 'screenshot') {
        chrome.tabs.captureVisibleTab({ format: "png" }, function (img) {
            console.log(img);
            console.log(request.message);
            saveScreenshot(img);

        });
    }

});

function saveScreenshot(img) {
    var image = new Image();
    image.onload = function() {
      var canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      var context = canvas.getContext("2d");
      context.drawImage(image, 0, 0);

      // save the image
      var link = document.createElement('a');
      link.download = "download.png";
      link.href = canvas.toDataURL();
      link.click();
    };
    image.src = img; 
  }