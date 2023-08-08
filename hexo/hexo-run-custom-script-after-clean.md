---
author: Dimas Lanjaka
categories:
  - programming
  - javascript
comments: true
date: 2023-06-13T01:22:02+07:00
description: "hexo run custom script after clean Create custom script file
  create new custom script file inside <your hexo project
  dir>/scripts/script-file-name.js. <your hexo project
  dir>/scripts/script-file-name.js <your hexo project dir> is your current site
  directory <your hexo project dir> fill below codes "
excerpt: "hexo run custom script after clean Create custom script file create
  new custom script file inside <your hexo project
  dir>/scripts/script-file-name.js. <your hexo project
  dir>/scripts/script-file-name.js <your hexo project dir> is your current site
  directory <your hexo project dir> fill below codes "
id: 416503f2-2b2f-4888-8c47-7772d05a090a
lang: en
photos: []
subtitle: "hexo run custom script after clean Create custom script file create
  new custom script file inside <your hexo project
  dir>/scripts/script-file-name.js. <your hexo project
  dir>/scripts/script-file-name.js <your hexo project dir> is your current site
  directory <your hexo project dir> fill below codes "
tags:
  - hexo
  - snippet
  - script
  - javascript
title: hexo run custom script after clean
type: post
updated: 2023-06-13T01:22:19+07:00
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

hexo.extend.filter.register('after_clean', function () {
  // your logic codes here
});
```
