function click(e) {
  chrome.tabs.executeScript(null,
    { code: `${e.target.getAttribute("data-script-name")}()` }
    // { file: "scripts/" + e.target.getAttribute("data-script-name") + ".js'" }
  );
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var scripts = document.querySelectorAll('.scriptsList li');
  for (var i = 0; i < scripts.length; i++) {
    scripts[i].addEventListener('click', click);
  }
});
