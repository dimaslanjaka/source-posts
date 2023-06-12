---
title: hexo run custom script after clean
date: 2023-06-13T01:22:02+07:00
updated: 2023-06-13T01:22:19+07:00
tags: [hexo, snippet, script, javascript]
categories: [programming, javascript]
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
