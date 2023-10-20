---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2020-08-03T01:26:00.001Z
description: If you Got this issue today on windows, but dont need to downgrade
  node, just as discussed on
lang: en
tags:
  - javascript
  - regular expression
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: "Fix React Native error Invalid regular expression: /.\\\\__fixtures__"
type: post
updated: 2023-09-02T23:34:31.000Z
wordcount: 134

---

If you Got this issue today on windows, but don't need to downgrade node, just as discussed on

[Stackoverflow](https://stackoverflow.com/a/58199866)

just need to change some hashes on your project:

`node_modules\react-native\packager\blacklist.js`


```javascript
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

Change to:


```js
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```