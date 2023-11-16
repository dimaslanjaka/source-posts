---
author:
  nick: Dimas Lanjaka
  link: http://webmanajemen.com
categories:
  - programming
comments: true
date: 2021-12-19T08:07:43.000Z
description: How to match regex from string and replace matched string 1-9
lang: en
tags:
  - javascript
thumbnail: https://res.cloudinary.com/practicaldev/image/fetch/s--73FnDTzR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.ibb.co/DWR2ZKQ/carbon-3.png
title: Replace Matched Regex 1-9 From String
type: post
updated: 2023-10-16T03:46:22.000Z

---

# NodeJS Replace Matched String From Regex
How to match regex from string and replace matched string $1-$9
> $1 = matched index 1 and so on

for example: were going to replace all markdown extensions to html extension.

```js
const str = `[text1](url.md) [txt](http://webmanajemen.com/post.md)`; // string to replace
const regex = /\[.*\]\(.*(.md)\)/gm; // regex to match group index 1 (.md)
if (regex.exec(str)) { // check if regex match
  const replaced = str.replace(regex, function (wholeMatch, index1) {
    console.log(wholeMatch, index1);
    return wholeMatch.replace(index1, ".html"); // replace .md to .html
  });
  console.log(replaced); // [text1](url.html) [txt](http://webmanajemen.com/post.html)
}
```