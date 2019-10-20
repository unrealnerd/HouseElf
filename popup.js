let runScript = document.getElementById('runScript');

runScript.onclick = function (element) {
  let scriptName = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { file: `scripts/${scriptName}.js` });
  });
  console.log('runscript clicked!');
};