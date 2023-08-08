---
author: Dimas Lanjaka
categories:
  - programming
  - js
comments: true
date: 2022-10-12T21:52:12+07:00
description: MathJax Dynamic Customized Load Main Snippet // original//
  https://polyfill.io/v3/polyfill.min.js?features=es6//
  https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js// const mathjaxOpt
  = /overriden options/document.addEventListenerDOMContentLoaded, function event
  mathjaxScr
excerpt: MathJax Dynamic Customized Load Main Snippet // original//
  https://polyfill.io/v3/polyfill.min.js?features=es6//
  https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js// const mathjaxOpt
  = /overriden options/document.addEventListenerDOMContentLoaded, function event
  mathjaxScr
id: 343266a5-564d-4888-8c04-92d599efe4a9
lang: en
photos: []
subtitle: MathJax Dynamic Customized Load Main Snippet // original//
  https://polyfill.io/v3/polyfill.min.js?features=es6//
  https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js// const mathjaxOpt
  = /overriden options/document.addEventListenerDOMContentLoaded, function event
  mathjaxScr
tags:
  - js
  - snippet
title: MathJax Dynamic Customized Load
type: post
updated: 2022-10-16T02:52:26+07:00
wordcount: 935
---

## Main Snippet

```js
// original
// https://polyfill.io/v3/polyfill.min.js?features=es6
// https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js

// const mathjaxOpt = {/*overriden options*/}

document.addEventListener("DOMContentLoaded", function (event) {
  mathjaxScript("https://polyfill.io/v3/polyfill.min.js?features=es6")
    .then(function () {
      window.MathJax = {
        loader: {
          load: [
            "input/tex-base",
            "[tex]/newcommand",
            "[tex]/action",
            "output/chtml"
          ]
        },
        chtml: {
          scale: 1, // global scaling factor for all expressions
          minScale: 0.5, // smallest scaling factor to use
          matchFontHeight: true, // true to match ex-height of surrounding font
          mtextInheritFont: false, // true to make mtext elements use surrounding font
          merrorInheritFont: true, // true to make merror text use surrounding font
          mathmlSpacing: false, // true for MathML spacing rules, false for TeX rules
          skipAttributes: {}, // RFDa and other attributes NOT to copy to the output
          exFactor: 0.5, // default size of ex in em units
          displayAlign: "left", // default for indentalign when set to 'auto'
          displayIndent: "0" // default for indentshift when set to 'auto'
        },
        tex: {
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"]
          ],
          packages: ["base", "newcommand", "action"]
        },
        svg: {
          fontCache: "global"
        }
      };

      // assign overriden option
      if (typeof window.mathjaxOpt === "object") {
        window.MathJax = Object.assign(window.MathJax, window.mathjaxOpt);
      }
    })
    .then(function () {
      mathjaxScript("https://cdn.jsdelivr.net/npm/mathjax@3/es5/startup.js");
    });
});

function mathjaxScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    document.body.appendChild(script);
  });
}
```

Save above script to file cloud then call it like below:
```html
<script>
  const mathjaxOpt = {/*if you want overriden options of MathJax*/}
</script>
<script src="your file.js"></script>
```

you can use our cdn
```html
<script src="https://raw.githack.com/dimaslanjaka/Web-Manajemen/master/mathjax/loader.js"></script>
```

## Online mathjax playground

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="wvjRReG" data-editable="true" data-user="dimaslanjaka" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dimaslanjaka/pen/wvjRReG">
  MathJax Playground</a> by dimas lanjaka (<a href="https://codepen.io/dimaslanjaka">@dimaslanjaka</a>)
  on <a href="https://codepen.io" rel="nofollow noopener noreferer">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>