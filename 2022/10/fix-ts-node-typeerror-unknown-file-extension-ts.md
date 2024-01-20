---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2022-10-09T15:04:00+0700
description: "How to fix TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension .ts"
lang: en
tags:
  - javascript
  - typeerror
  - typescript
thumbnail: /2022/10/fix-ts-node-typeerror-unknown-file-extension-ts/cover.png
title: Fix ts-node TypeError ERR_UNKNOWN_FILE_EXTENSION Unknown file extension .ts
type: post
updated: 2023-08-08T07:45:08.000Z
wordcount: 381
---

## Error Case
Common case `TypeError [ERR_UNKNOWN_FILE_EXTENSION]` in typescript ESM with ts-node
```
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for /index.ts at new NodeError (node:internal/errors:371:5) at Object.file: (node:internal/modules/esm/get_format:72:15) at defaultGetFormat (node:internal/modules/esm/get_format:85:38) at defaultLoad (node:internal/modules/esm/load:13:42) at ESMLoader.load (node:internal/modules/esm/loader:303:26) at ESMLoader.moduleProvider (node:internal/modules/esm/loader:230:58) at new ModuleJob (node:internal/modules/esm/module_job:63:26) at ESMLoader.getModuleJob (node:internal/modules/esm/loader:244:11) at async Promise.all (index 0) at async ESMLoader.import (node:internal/modules/esm/loader:281:24) { code: 'ERR_UNKNOWN_FILE_EXTENSION' }
```

## tsconfig.json
add following codes to `tsconfig.json` to fix `TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts"`
```jsonc
{
  "ts-node": {
    "compilerOptions": {
      "module": "CommonJS"
    },
    "esm": true,
    "experimentalSpecifierResolution": "node"
  }
}
```

## Official Issues
- [ESM issues: TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts #1584](https://github.com/TypeStrong/ts-node/issues/1584)

## Conclusion
Just adding `{"ts-node":{"esm":true}}` will fixing `TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts"`