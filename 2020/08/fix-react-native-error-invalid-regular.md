---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
date: 2020-08-03T08:26:00.001+07:00
description: If you Got this issue today on windows, but dont need to downgrade
  node, just as discussed on
lang: en
photos:
  - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
tags:
  - js
  - regular expression
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: "Fix React Native error Invalid regular expression: /.\\\\__fixtures__"
type: post
updated: 2023-08-08T14:45:13+07:00
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
