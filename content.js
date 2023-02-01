console.log("I'm alive");

// Create a new observer instance:
  if (document.querySelector('body')) {
    addJavaScript("water.js");
    addStyleSheet("water.css");
    console.log("We got 'em, boss");
    // Do something with new div element
  }

function addStyleSheet(filename) {
  var style = document.createElement("link");
  style.href = chrome.runtime.getURL(filename);
  style.type = "text/css";
  style.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(style);
};

function addJavaScript(filename) {
  var script = document.createElement("script");
  script.src = chrome.runtime.getURL(filename);
  document.getElementsByTagName("body")[0].append(script);
};

