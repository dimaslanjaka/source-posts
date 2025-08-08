---
title: Detect if a Node.js File Is Run Directly or Imported
description: Learn how to check if a Node.js file is executed via CLI (node path-to-file) or loaded using require or import. Supports both CommonJS and ES modules.
date: 2024-02-23T18:16:51+07:00
tags:
  - esm
  - javascript
  - typescript
  - commonjs
categories:
  - programming
keywords:
  - detect
  - import
  - require
  - meta
slug: detect-nodejs-called-by-import
updated: 2025-08-08T15:59:45+07:00
---

## CommonJS

CommonJS modules can use the `require.main` object to determine whether the module is  executed directly or  imported. The `require.main` object is the main module that started your Node.js application.

```js
// CommonJS

// main.js
if (require.main === module) {
  // This script is being run directly
  console.log('This script is the main module.');
} else {
  // This script is being imported as a module
  console.log('This script is being imported as a module.');
}
```

In this example, if you run `main.js` directly using the `main.js` node, you will see the output **This script is the main module.** When I import `main.js` into another script or module using `require('./main')` I get the output **This script will be imported as a module**.

 Note that this approach works with Node.js versions that support ES Module (ESM) syntax.

 If you are using `CommonJS` syntax, you may want to use the `require.main === module` check.

## ESM

In the ECMAScript Module (ESM), you can use the "import.meta" object  to determine whether a module is  executed directly or  imported. In particular, you can check the `import.meta.url` property.

```ts
// main.mjs

import { fileURLToPath, pathToFileURL } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  // This module is being run directly
  console.log('This module is the main module.');
} else {
  // This module is being imported as a module
  console.log('This module is being imported as a module.');
}
```

or you can using module [es-main](http://npmjs.com/es-main):

```ts
// ESM

import esMain from 'es-main';

if (esMain(import.meta)) {
    console.log('called directly');
} else {
    console.log('required as a module');
}
```

### Support ESM and CJS

If you're writing Node.js code that should behave differently when run directly vs. imported as a module, you need a reliable way to detect how it's being executed.

The following snippet works across all module formats: `.cjs`, `.mjs`, and `.js` (depending on your project setup). It checks whether the file was invoked via the CLI (`node file.js`) or imported (`require()` or `import`).

```js
// Detect if the script is run directly in both CommonJS and ESM
let isMain = false;

try {
  // CommonJS detection
  if (
    typeof require !== "undefined" &&
    typeof module !== "undefined" &&
    require.main === module
  ) {
    isMain = true;
  }
} catch (_e) {
  // Ignore errors in ESM environments
}

try {
  // ES Module detection
  const mainArg = process.argv[1] && path.resolve(process.argv[1]);
  if (mainArg && import.meta.url === pathToFileURL(mainArg).href) {
    isMain = true;
  }
} catch (_e) {
  // Ignore errors in CommonJS environments
}

if (isMain) {
  console.log("Invoked from CLI");
} else {
  console.log("Not invoked from CLI");
}
```

> ✅ This approach works seamlessly in both CommonJS and ES Modules, making it ideal for packages or scripts that support multiple module systems.

In this example, if you run `main.mjs` directly using the `main.mjs` node, you will see the output: "This module is the main module.
" If you import `main.mjs` into another ESM module using `import './main.mjs';`, you will see the output **This module will be imported as a module.** Note  the ESM file extension.

Modules are usually `.mjs`. If you want to use CommonJS syntax, you can use the approach described in the previous answer `("require.main === module")`.

