var browser = "";

if (navigator.userAgent.indexOf("Chrome") != -1) {
  browser = "chrome";
} else if (navigator.userAgent.indexOf("Edge") != -1) {
  browser = "edge";
} else if (navigator.userAgent.indexOf("Firefox") != -1) {
  browser = "firefox";
} else if (navigator.userAgent.indexOf("Opera") != -1) {
  browser = "opera";
} else if (navigator.userAgent.indexOf("MSIE") != -1 || navigator.userAgent.indexOf("Trident") != -1) {
  browser = "internet explorer";
}

if (browser == "chrome") {
  var chromeCSS = document.createElement("link");
  chromeCSS.rel = "stylesheet";
  chromeCSS.href = "chrome.css";
  document.head.appendChild(chromeCSS);

  var chromeJS = document.createElement("script");
  chromeJS.src = "chrome.js";
  document.head.appendChild(chromeJS);
} else if (browser == "edge") {
  var edgeCSS = document.createElement("link");
  edgeCSS.rel = "stylesheet";
  edgeCSS.href = "edge.css";
  document.head.appendChild(edgeCSS);

  var edgeJS = document.createElement("script");
  edgeJS.src = "edge.js";
  document.head.appendChild(edgeJS);
} else if (browser == "firefox") {
  var firefoxCSS = document.createElement("link");
  firefoxCSS.rel = "stylesheet";
  firefoxCSS.href = "firefox.css";
  document.head.appendChild(firefoxCSS);

  var firefoxJS = document.createElement("script");
  firefoxJS.src = "firefox.js";
  document.head.appendChild(firefoxJS);
} else if (browser == "opera") {
  var operaCSS = document.createElement("link");
  operaCSS.rel = "stylesheet";
  operaCSS.href = "opera.css";
  document.head.appendChild(operaCSS);

  var operaJS = document.createElement("script");
  operaJS.src = "opera.js";
  document.head.appendChild(operaJS);
} else if (browser == "internet explorer") {
  var ieCSS = document.createElement("link");
  ieCSS.rel = "stylesheet";
  ieCSS.href = "ie.css";
  document.head.appendChild(ieCSS);

  var ieJS = document.createElement("script");
  ieJS.src = "ie.js";
  document.head.appendChild(ieJS);
}
