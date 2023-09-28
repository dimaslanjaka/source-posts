---
title: react-dom server generate static html from react elements
date: 2023-09-28T13:34:23+07:00
categories: [programming]
tags: [react, javascript, typescript]
---

```tsx
import * as fs from "fs";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server";

render();

function render() {
  let html = ReactDOMServer.renderToStaticMarkup(<HelloWorldPage />);
  let htmlWDoc = "<!DOCTYPE html>" + html;
  let prettyHtml = prettier.format(htmlWDoc, { parser: "html" });
  let outputFile = "./output.html";
  fs.writeFileSync(outputFile, prettyHtml);
  console.log(`Wrote ${outputFile}`);
}

function HelloWorldPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Hello world</title>
      </head>
      <body>
        <h1>Hello world</h1>
      </body>
    </html>
  );
}
```
