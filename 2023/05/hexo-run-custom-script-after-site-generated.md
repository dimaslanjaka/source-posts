---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2023-05-26T19:34:21+07:00
description: "hexo run custom script after site generated Create custom script
  file create new custom script file inside <your hexo project
  dir>/scripts/script-file-name.js. "
lang: en
tags:
  - hexo
  - snippet
  - script
  - javascript
title: hexo run custom script after site generated
type: post
updated: 2023-09-03T04:28:04+07:00
wordcount: 185
---

## Create custom script file
create new custom script file inside `<your hexo project dir>/scripts/script-file-name.js`.
> `<your hexo project dir>` is your current site directory

## fill below codes
```js
'use strict';

/**
 * clean auto generated files inside .deploy_git
 */

// const path = require('path');
// const fs = require('fs-extra');

hexo.extend.filter.register('after_generate', function () {
  // your logic codes here
});
```
