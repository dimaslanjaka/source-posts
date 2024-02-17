---
title: Detect NodeJS if called using import or directly
date: 2024-03-17T18:16:51+07:00
description: How can I detect if my NodeJS file is called using node file path `node path-to-file` or `require('path-to-file')` or `import 'path-to-file'` ?
tags:
  - javascript
  - typescript
categories:
  - programming
keywords:
  - import
  - require
  - detect
slug: detect-nodejs-called-by-import
updated: 2024-03-17T18:33:33+07:00
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
if (import.meta.url === `file://${process.argv[1]}`) {
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

In this example, if you run `main.mjs` directly using the `main.mjs` node, you will see the output: "This module is the main module.
" If you import `main.mjs` into another ESM module using `import './main.mjs';`, you will see the output **This module will be imported as a module.** Note  the ESM file extension.

Modules are usually `.mjs`. If you want to use CommonJS syntax, you can use the approach described in the previous answer `("require.main === module")`.

