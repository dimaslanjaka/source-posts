---
title: get list of files from npm pack
layout: snippet
date: 2023-01-10T23:27:03+07:00
updated: 2023-01-10T23:27:03+07:00
tags: ['snippet', 'javascript', 'npm']
categories: ['programming', 'javascript']
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
