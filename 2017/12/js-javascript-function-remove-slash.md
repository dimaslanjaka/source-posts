---
author:
  nick: Dimas Lanjaka
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-12-26T22:39:00.000Z
description: All I needed was to expel every single forward slice in a string
  utilizing Javascript.
lang: en
tags:
  - javascript
  - html
thumbnail: /2017/12/js-javascript-function-remove-slash/cover.jpg
title: JS Javascript Function Remove Slash From String
type: post
updated: 2023-09-02T21:28:35.000Z
wordcount: 900

---

All I needed was to expel every single forward and backward slashes slice in a string utilizing Javascript.

## Remove _Forward Slashes_ (/) Using JavaScript Function

```js
function FSlash(str) {
  const r = /\/+/gm;
  while (r.test(str)) str = str.replace(r, "");
  return str;
}
//Usage Using Variable
var nx = "4x/4/4/5/6/7//532///45/";
//Call Variable Into Function Name
document.write(FSlash(nx));
```

Demo : [CodePen](https://codepen.io/dimaslanjaka/pen/dJNZzb?forward-slashes)

The vital part of `removing forward slashes from string` to note here is the consistent articulation `/\\//gm`.

## Remove _Backward Slashes_ (\\) Using JavaScript Function

```js
function BSlash(str) {
  const r = /\\|\\+/gm;
  while (r.test(str)) str = str.replace(r, "");
  return str;
}
//Usage Using Variable
var nx = "Dev : \\D\\i\\m\\a\\s\\Www.webmanajemen.com";
//Call Variable Into Function Name
document.write(BSlash(nx));
```

Demo : [Codepen](https://codepen.io/dimaslanjaka/pen/dJNZzb?backward-slashes)

The vital part of `removing backward slashes from string` to note here is the consistent articulation `/\\|\\+/gm`.

## Remove All Slashes Using Combined Javascript Function

```js
function RSlash(str) {
  return BSlash(FSlash(str));
}
// usage
const strex = "4x/4/4/5/6/7//532///45/ Dev: d\\i\\m\\a\\s www.webmanajemen.com";
// call variable into function name
document.write(RSlash(strex));
```

Demo : [Codepen](https://codepen.io/dimaslanjaka/pen/dJNZzb?all-slashes)

## Full Demo Removing Slashes
<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="dJNZzb" data-preview="true" data-editable="true" data-user="dimaslanjaka" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dimaslanjaka/pen/dJNZzb" rel="nofollow noopener">
  Remove slashes from string JS</a> by dimas lanjaka (<a href="https://codepen.io/dimaslanjaka" rel="nofollow noopener">@dimaslanjaka</a>)
  on <a href="https://codepen.io" rel="nofollow noopener">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Conclusion
The bit of the string you need supplanting is composed between the first and last forward cuts – so on the off chance that you needed the word 'work area' supplanted you would compose/work area/g.

As the character we need to expel is an uncommon case you need to escape it utilizing an oblique punctuation line, generally the code will read the twofold forward cut as a remark thus quit preparing the line.

At last, the g implies apply the substitution internationally to the string with the goal that all occasions of the substring are supplanted.

![JavaScript Function](js-javascript-function-remove-slash/cover.jpg)

<!--![JavaScript Function](js-javascript-function-remove-slash/cover.jpg "JavaScript function")-->

so an article about "JS Function Remove Slash From String" today. I hope this helps.