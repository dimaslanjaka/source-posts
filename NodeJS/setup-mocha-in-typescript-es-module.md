---
title: How to setup mocha in typescript ES Module
date: 2022-10-29T13:14:19+07:00
updated: 2022-10-29T13:14:19+07:00
tags: ['mocha', 'typescript', 'esm']
categories: ['Programming', 'NodeJS']
thumbnail: https://user-images.githubusercontent.com/17888086/62067383-2fe4af00-b1f9-11e9-88c4-4953bb090215.png
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

```bash
# testing bulk files
ts-mocha test/*.spec.ts
# or testing single file
ts-mocha test/basic.spec.ts
```

