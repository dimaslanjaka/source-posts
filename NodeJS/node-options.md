---
author:
  nick: Dimas Lanjaka
  link: https://github.com/dimaslanjaka
category:
  - Programming
comments: true
cover: https://www.bleepstatic.com/content/hl-images/2020/08/04/nodejs-header.jpg
date: 2021-11-17T16:00:00+07:00
keywords:
  - nodejs
  - arguments
  - cli
lang: en
location: Indonesia
subtitle: Usage, explanations of node options for nodejs
tags:
  - JS
  - NodeJS
title: All About NodeJS Configurations
type: post
uuid: 586f70e0-6dec-4888-8cac-99671aad2296
updated: 2022-12-29T14:25:47+07:00
thumbnail: https://www.bleepstatic.com/content/hl-images/2020/08/04/nodejs-header.jpg
description: Usage, explanations of node options for nodejs
---

# NODEJS OPTIONS [ NODE_OPTIONS ]

Node.js accompanies an assortment of CLI choices. These choices uncover worked in investigating, different ways of executing scripts, and other accommodating runtime choices.

To see this documentation as a manual page in a terminal, run 'man hub'. [Read more](https://nodejs.org/api/cli.html)

## How to setup multiple options on GitHub Workflow
```yaml
jobs:
  build:
    name: Build www.webmanajemen.com
    runs-on: ubuntu-latest
    env:
      NODE_OPTIONS: "--experimental-vm-modules --max_old_space_size=8192"
```

## How to performance run nodejs on low devices
The recommended amounts for a "low memory device".

for 32-bit and/or Android are:
```shell
node --max-executable-size=96 --max-old-space-size=128 --max-semi-space-size=1 app.js
```
for 64-bit non-android are:
```shell
node --max-executable-size=192 --max-old-space-size=256 --max-semi-space-size=2 app.js
```
These above codes would limit the heap totals to 225mb and 450mb respectively. It doesn't include memory usage outside JS. For instance buffers are allocated as "c memory" , not in the JavaScript heap.

### Flags
- `--max-executable-size` the maximum size of heap reserved for executable code (the native code result of just-in-time compiled JavaScript).
- `--max-old-space-size` the maximum size of heap reserved for long term objects
- `--max-semi-space-size` the maximum size of heap reserved for short term objects

## Yarn Clean Install

```bash
yarn install --immutable --immutable-cache --check-cache --frozen-lockfile --check-files
```

## Nodemon Configuration

```json
{
  "$schema": "http://json.schemastore.org/nodemon",
  "exec": "npm run build && npm start",
  "watch": ["./src/*.ts", "./index.ts", "./webpack.*.js", "./tsconfig.json", "./package.json"],
  "ignore": [
    "*.test.js",
    ".vscode",
    ".gitignore",
    "gh-pages",
    "dist",
    "tests",
    "tmp",
    "temp",
    "./src/tmp",
    "docs",
    "release"
  ],
  "delay": 3000,
  "ext": "ts,js",
  "verbose": true
}
```
