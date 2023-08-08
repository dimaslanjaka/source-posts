---
author: Dimas Lanjaka
categories:
  - programming
  - nodejs
comments: true
cover: https://user-images.githubusercontent.com/17888086/62067383-2fe4af00-b1f9-11e9-88c4-4953bb090215.png
date: 2022-10-29T13:14:19+07:00
description: "How to setup mocha in typescript ES Module Install dependencies
  npm npm install -D mocha chai ts-mocha typescript ts-node .mocharc.json for
  typescript ESM project extension: [ ts ], node-option: [
  experimental-specifier-resolution=node, loader=ts-node/esm.mjs ], sp"
excerpt: "How to setup mocha in typescript ES Module Install dependencies npm
  npm install -D mocha chai ts-mocha typescript ts-node .mocharc.json for
  typescript ESM project extension: [ ts ], node-option: [
  experimental-specifier-resolution=node, loader=ts-node/esm.mjs ], sp"
id: 056d373a-2557-4888-8a77-4af680213b47
lang: en
photos:
  - https://user-images.githubusercontent.com/17888086/62067383-2fe4af00-b1f9-11e9-88c4-4953bb090215.png
subtitle: "How to setup mocha in typescript ES Module Install dependencies npm
  npm install -D mocha chai ts-mocha typescript ts-node .mocharc.json for
  typescript ESM project extension: [ ts ], node-option: [
  experimental-specifier-resolution=node, loader=ts-node/esm.mjs ], sp"
tags:
  - mocha
  - typescript
  - esm
thumbnail: https://user-images.githubusercontent.com/17888086/62067383-2fe4af00-b1f9-11e9-88c4-4953bb090215.png
title: How to setup mocha in typescript ES Module
type: post
updated: 2022-10-29T13:47:01+07:00
wordcount: 330
---

## Install dependencies

npm
```shell
npm install -D mocha chai ts-mocha typescript ts-node
```

## .mocharc.json for typescript ESM project
```json
{
  "extension": [
    "ts"
  ],
  "node-option": [
    "experimental-specifier-resolution=node",
    "loader=ts-node/esm.mjs"
  ],
  "spec": [
    "test/**/*.spec.ts"
  ]
}
```

`"test/**/*.spec.ts"` is pattern all test files

`"node-option"` is node cli arguments

## ensure type module in package.json
```json
{
  "type": "module"
}
```

## Make sample test

create file `test/basic.spec.ts` with below codes
```typescript
import assert from 'assert';

describe('My function', function () {
  it('should test', function () {
    assert.equal(1, 2);
  });
});
```

## How to test

### mocha test all patterns from .mocharc.json
```bash
mocha
```
### mocha testing bulk files
```bash
ts-mocha test/*.spec.ts
```
### mocha testing single file
```bash
ts-mocha test/basic.spec.ts
```
### mocha test reporting to html
```bash
mocha --reporter doc > reports/report.html
```

## Result Screenshots
![Using ts-mocha](https://user-images.githubusercontent.com/12471057/198816982-3f460b71-7105-4211-806e-9e5fcdab1c03.png)

