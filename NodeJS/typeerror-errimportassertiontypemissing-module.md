---
title: TypeError [ERR_IMPORT_ASSERTION_TYPE_MISSING] Module Fix
date: 2022-10-29T11:21:14+07:00
updated: 2022-10-29T11:52:09+07:00
categories: ['Programming', 'TS']
tags: ['typescript', 'typeerror']
thumbnail: https://bobbyhadz.com/images/blog/node-type-error-err-import-assertion-type-missing/typeerror-err-import-assertion-type-missing.webp
---

# How to fix TypeError [ERR_IMPORT_ASSERTION_TYPE_MISSING]: Module...

## Example import
```typescript
import countryTable from './data/countries.json';
```
## Fix import by
```typescript
import countryTable from "./data/countries.json" assert { type: "json" };
```

Proposed by [https://github.com/tc39/proposal-import-assertions](https://github.com/tc39/proposal-import-assertions)

Answer source: [https://stackoverflow.com/a/70106896](https://stackoverflow.com/a/70106896)

## More example importing JSON in ESM
```typescript
// An import assertion in a static import
import info from `./package.json` assert { type: `json` };

// An import assertion in a dynamic import
const { default: info } = await import("./package.json", {
  assert: {
    type: "json",
  },
});
```

### Difference between import assertion in a static import and a dynamic import

Static import just importing JSON as ANY TYPE.

Dynamic import is importing JSON with the JSON structure type.

### More example importing JSON is ES Modules

#### Read and parse JSON files
```typescript
import { readFile } from 'fs/promises';
const json = JSON.parse(
  await readFile(
    new URL('./some-file.json', import.meta.url)
  )
);
```

#### Leverage the CommonJS require function to load JSON files
```typescript
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("./data.json");
```

#### Dynamic import and assign to interfaces
```typescript
interface Thesaurus {
  [key: string]: string[];
}
const { default: thesaurus }: { default: Thesaurus } = await import('./thesaurus-en.json', {
  assert: {
    type: 'json'
  }
});
```


