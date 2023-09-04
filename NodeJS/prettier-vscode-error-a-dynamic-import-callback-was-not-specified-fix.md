---
title: Prettier VSCode TypeError A dynamic import callback was not specified fix
date: 2023-09-04T08:58:44+07:00
updated: 2023-09-04T09:04:12+07:00
categories: [programming]
tags: [vscode, prettier
thumbnail: https://github.com/dimaslanjaka/source-posts/assets/12471057/ae48bdb0-479c-4dca-b52d-2d458e07ef4d
---

How to fix Prettier VSCode TypeError A dynamic import callback was not specified only occurs for `JSX`/`TSX` file.

![Error Summary](https://github.com/dimaslanjaka/source-posts/assets/12471057/ae48bdb0-479c-4dca-b52d-2d458e07ef4d)

## Summary

prettier version

```jsonc
{
    "prettier": "^3.0.3"
}
```

plugin information

```log
Prettier - Code formatter v10.1.0
```

vscode version

```log
Version: 1.81.1 (user setup)
Commit: 6c3e3dba23e8fadc360aed75ce363ba185c49794
Date: 2023-08-09T22:22:42.175Z
Electron: 22.3.18
ElectronBuildId: 22689846
Chromium: 108.0.5359.215
Node.js: 16.17.1
V8: 10.8.168.25-electron.0
OS: Windows_NT x64 10.0.19045
```

error logs

```log
["ERROR" - 8:41:13 AM] Error handling text editor change
["ERROR" - 8:41:13 AM] A dynamic import callback was not specified.
TypeError: A dynamic import callback was not specified.
	at new NodeError (node:internal/errors:387:5)
	at importModuleDynamicallyCallback (node:internal/process/esm_loader:39:9)
	at Object.<anonymous> (d:\Repositories\page\node_modules\prettier\index.cjs:600:23)
	at u._compile (d:\ProgramData\Microsoft VS Code\resources\app\out\vs\loader.js:4:1271)
	at Module._extensions..js (node:internal/modules/cjs/loader:1243:10)
	at Module.load (node:internal/modules/cjs/loader:1058:32)
	at Module._load (node:internal/modules/cjs/loader:893:12)
	at f._load (node:electron/js2c/asar_bundle:2:13330)
	at o._load (d:\ProgramData\Microsoft VS Code\resources\app\out\vs\workbench\api\node\extensionHostProcess.js:130:28084)
	at f._load (d:\ProgramData\Microsoft VS Code\resources\app\out\vs\workbench\api\node\extensionHostProcess.js:130:25418)
	at C._load (d:\ProgramData\Microsoft VS Code\resources\app\out\vs\workbench\api\node\extensionHostProcess.js:94:19511)
	at Module.require (node:internal/modules/cjs/loader:1082:19)
	at g (d:\ProgramData\Microsoft VS Code\resources\app\out\vs\loader.js:4:647)
	at t.loadNodeModule (c:\Users\dimas\.vscode\extensions\esbenp.prettier-vscode-10.1.0\dist\extension.js:1:2829)
	at t.PrettierMainThreadInstance.import (c:\Users\dimas\.vscode\extensions\esbenp.prettier-vscode-10.1.0\dist\extension.js:1:17760)
	at t.PrettierMainThreadInstance.resolveConfigFile (c:\Users\dimas\.vscode\extensions\esbenp.prettier-vscode-10.1.0\dist\extension.js:1:18457)
	at t.ModuleResolver.resolveConfig (c:\Users\dimas\.vscode\extensions\esbenp.prettier-vscode-10.1.0\dist\extension.js:1:6705)
	at t.ModuleResolver.getResolvedConfig (c:\Users\dimas\.vscode\extensions\esbenp.prettier-vscode-10.1.0\dist\extension.js:1:7540)
	at async t.default.format (c:\Users\dimas\.vscode\extensions\esbenp.prettier-vscode-10.1.0\dist\extension.js:1:14563)
	at async t.PrettierEditProvider.provideEdits (c:\Users\dimas\.vscode\extensions\esbenp.prettier-vscode-10.1.0\dist\extension.js:1:12672)
```

## How to fix prettier error

but when i ran the prettier using ESLint, no errors occurs and successful format when ran `eslint --fix`

package.json

```json
{
    "eslint": "^8.48.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-prettier": "^5.0.0",
    "prettier": "^3.0.3",
    "@typescript-eslint/eslint-plugin": "^6.4.1",
    "@typescript-eslint/parser": "^6.4.1",
    "ts-node": "^10.9.1",
    "typescript": "4.9.5",
}
```

.prettierrc.json

```json
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "printWidth": 120,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "prettier.cssEnable": [
    "css",
    "less",
    "sass"
  ]
}
```

.eslintrc.js

```js
const prettier = require('./.prettierrc.json');

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
const config = {
  root: true, // Specifies your current project has own eslint rules without extends parent folder eslint rules
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  env: {
    browser: true, // add support for browser js (window,document,location,etc)
    amd: true, // add amd support
    node: true, // add node support (module.export,etc)
    jquery: true, // add jquery support
  },
  globals: {
    adsbygoogle: true, // add google adsense support
    gtag: true, // add google analytics support
    $: true, // add jquery support
    safelink: true, // add safelinkify support
    google: 'readonly', // add new google GSI authentication support
    gapi: 'readonly', // add google apis support
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    'eslint:recommended', // uses eslint default recommended
    'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  // override rules for js files
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // disable require warning on js files
        '@typescript-eslint/triple-slash-reference': 'off', // disable include refenrences definition files on js
      },
    },
  ],
  // specify your desired rules for eslint
  rules: {
    'prettier/prettier': ['error', prettier],
    '@typescript-eslint/explicit-function-return-type': 'off', // disable function without return type
    'no-unused-vars': 'off', // disable original eslint unused-vars
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ], // enable typescript-eslint unused-vars and allow unused vars start with underscore (_)
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off', // allow any types
    '@typescript-eslint/no-this-alias': [
      // rules for this binding
      'error',
      {
        allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
        allowedNames: ['self'], // Allow `const self = this`; `[]` by default
      },
    ],
    // "arrow-body-style" and "prefer-arrow-callback" are two ESLint core rules that can cause issues with prettier/prettier plugin, so turn them off.
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
};

module.exports = config;
```

source config from https://www.webmanajemen.com/NodeJS/eslint-prettier-typescript-vscode.html
