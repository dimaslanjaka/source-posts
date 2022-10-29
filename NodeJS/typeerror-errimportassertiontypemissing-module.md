---
title: TypeError [ERR_IMPORT_ASSERTION_TYPE_MISSING] Module Fix
date: 2022-10-29T11:21:14+07:00
updated: 2022-10-29T11:34:14+07:00
categories: ['Programming', 'TS']
tags: ['typescript', 'typeerror']
---

# How to fix TypeError [ERR_IMPORT_ASSERTION_TYPE_MISSING]: Module...

Example import
```typescript
import countryTable from './data/countries.json';
```
Fix import by
```typescript
import countryTable from "./data/countries.json" assert { type: "json" };
```
Proposed by [https://github.com/tc39/proposal-import-assertions](https://github.com/tc39/proposal-import-assertions)

Answer source: [https://stackoverflow.com/a/70106896](https://stackoverflow.com/a/70106896)
