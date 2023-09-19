---
author: Dimas Lanjaka
categories:
  - programming
comments: true
cover: /NodeJS/assets/pngwing.com.png
date: 2023-01-10T23:27:03+07:00
description: "get list of files from npm pack npm i git-command-helper //const
  writeFileSync = requirefs;const spawnAsync =
  requiregit-command-helper/dist/spawn;//const join "
lang: en
photos:
  - /NodeJS/assets/pngwing.com.png
tags:
  - snippet
  - javascript
  - npm
thumbnail: /NodeJS/assets/pngwing.com.png
title: get list of files from npm pack
type: post
updated: 2023-09-03T04:28:02+07:00
wordcount: 204
---

```bash
npm i git-command-helper
```

```js
//const { writeFileSync } = require('fs');
const { spawnAsync } = require('git-command-helper/dist/spawn');
//const { join } = require('path');

spawnAsync('npm', ['pack', '--json', '--dry-run']).then((result) => {
  const parse = JSON.parse(result.stdout)[0];
  const { files } = parse;
  // uncomment for log to file
  //const output = join(__dirname, 'tmp/listpack.txt');
  //writeFileSync(output, files.map((o) => o && o.path).join('\n'));
  //console.log(output);

  console.log(files);
});
```
