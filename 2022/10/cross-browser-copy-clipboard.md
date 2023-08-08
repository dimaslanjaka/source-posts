---
author: Dimas Lanjaka
categories:
  - programming
  - js
comments: true
date: 2022-10-12T11:27:11+07:00
description: "Snippet JS copy to clipboard full support old browser and modern
  browser Snippet fallback copy to clipboard for old browser function
  fallbackCopyTextToClipboardtext var textArea = document.createElementtextarea;
  textArea.value = text; // Avoid scrolling to bottom textArea.style.top "
excerpt: "Snippet JS copy to clipboard full support old browser and modern
  browser Snippet fallback copy to clipboard for old browser function
  fallbackCopyTextToClipboardtext var textArea = document.createElementtextarea;
  textArea.value = text; // Avoid scrolling to bottom textArea.style.top "
id: c10351f0-b0d6-4888-8b7c-9e187d829df7
keywords:
  - browser
  - copy
  - clipboard
  - JS Snippet
lang: en
photos: []
subtitle: "Snippet JS copy to clipboard full support old browser and modern
  browser Snippet fallback copy to clipboard for old browser function
  fallbackCopyTextToClipboardtext var textArea = document.createElementtextarea;
  textArea.value = text; // Avoid scrolling to bottom textArea.style.top "
tags:
  - snippet
  - script
  - js
title: Snippet JS copy to clipboard full support old browser and modern browser
type: post
updated: 2023-08-08T14:45:08+07:00
wordcount: 1368
---

## Snippet fallback copy to clipboard for old browser
```js
function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}
```

## Snippet copy to clipboard for modern browser
```js
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}
```

## Usage copy to cliboard Snippet
```js
copyTextToClipboard('Text to copy');
```

## Full Example copy to clipboard javascript and html

```html
<div style="display: inline-block; vertical-align: top">
  <button class="js-copy-1-btn">Set clipboard</button><br /><br />
  <button class="js-copy-2-btn">Set clipboard</button>
</div>
<div style="display: inline-block">
  <textarea class="js-test-textarea" cols="35" rows="4">
Paste here (CTRL+V or HOLD, touch and paste) to see what's on your clipboard.
  </textarea>
</div>
<script>
  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
  }
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  }

  var copyBobBtn = document.querySelector(".js-copy-1-btn"),
    copyJaneBtn = document.querySelector(".js-copy-2-btn");

  copyBobBtn.addEventListener("click", function (event) {
    copyTextToClipboard("Text 1 to be copied");
  });

  copyJaneBtn.addEventListener("click", function (event) {
    copyTextToClipboard("Text 2 to be copied");
  });
</script>
```

### Live DEMO copy to clipboard

<div style="display: inline-block; vertical-align: top">
  <button class="js-copy-1-btn">Set clipboard 1</button><br /><br />
  <button class="js-copy-2-btn">Set clipboard 2</button>
</div>
<div style="display: inline-block">
  <textarea class="js-test-textarea" cols="35" rows="4" placeholder="Paste here (CTRL+V or HOLD, touch and paste) to see what's on your clipboard.">
  </textarea>
</div>
<script>
  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }
    document.body.removeChild(textArea);
  }
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  }
  var copyBobBtn = document.querySelector(".js-copy-1-btn"),
    copyJaneBtn = document.querySelector(".js-copy-2-btn");
  copyBobBtn.addEventListener("click", function (event) {
    copyTextToClipboard("Text 1 to be copied");
  });
  copyJaneBtn.addEventListener("click", function (event) {
    copyTextToClipboard("Text 2 to be copied");
  });
</script>
