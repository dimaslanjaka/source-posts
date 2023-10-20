---
author: Dimas Lanjaka
categories:
  - uncategorized
comments: true
date: 2022-04-24
description: all about nodemon
lang: en
tags: []
title: nodemon
type: post
updated: 2023-08-08T14:44:15+07:00
wordcount: 122
---

## Basic nodemon.json configuration
```json
{
  "$schema": "http://json.schemastore.org/nodemon",
  "exec": "yarn build",
  "watch": ["./src/*.ts", "./index.ts", "./webpack.*.js", "./tsconfig.json", "./package.json"],
  "ignore": ["*.test.js", ".vscode", ".gitignore", "gh-pages", "dist", "tests", "tmp", "temp", "./src/tmp"],
  "delay": 3000,
  "ext": "ts,js",
  "verbose": true
}
```

<script>
  location.href = '/NodeJS/node-options.html#nodemon'
</script>