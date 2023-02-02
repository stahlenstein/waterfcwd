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

let searchButton = document.querySelector("#node-2515 > div > div > div > div.topnav > button");

if(searchButton) {
  console.log('something happened');
searchButton.addEventListener('click', supaSearch())
};

function supaSearch() {
  if (document.querySelector("#node-2515 > div > div > div > div.topnav > input[type=text]").value !== null) {
    const searchText = document.querySelector("#node-2515 > div > div > div > div.topnav > input[type=text]").value
    console.log(searchText)
    const send = chrome.runtime.sendMessage({ greeting: searchText });
    send.then(handleResponse, handleError)
  };
};