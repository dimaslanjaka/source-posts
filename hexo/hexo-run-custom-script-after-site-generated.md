---
title: hexo run custom script after site generated
date: 2023-05-26T19:34:21+07:00
updated: 2023-05-26T19:34:21+07:00
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

hexo.extend.filter.register('after_generate', function () {
  // your logic codes here
});
```
