---
title: debug memory leaks with jest
date: 2023-05-27T17:04:21+07:00
updated: 2023-05-27T17:04:21+07:00
tags: [jest, js]
categories: [programming, javascript, typescript]
---

```bash
node --expose-gc ./node_modules/jest-cli/bin/jest.js --logHeapUsage -- check-ignores
```
