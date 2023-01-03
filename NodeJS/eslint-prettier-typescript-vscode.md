---
author:
  nick: Dimas Lanjaka
  link: https://github.com/dimaslanjaka
  image: https://i.pinimg.com/564x/32/bc/65/32bc65e19220728fb290249059a7242a.jpg
category:
  - Programming
comments: true
cover: https://i.ytimg.com/vi/lHAeK8t94as/maxresdefault.jpg
date: 2021-11-28T07:00:00+07:00
keywords:
  - nodejs
  - eslint
  - prettier
  - vscode
  - auto
  - format
  - lint
lang: en
location: Indonesia
subtitle: How to configure eslint with prettier to automated lint and format
  codes in typescript project using vscode
tags:
  - NodeJS
  - JS
  - TS
  - ESLint
title: Eslint Prettier In Typescript Project Using Vscode
type: post
uuid: 3f6ada3c-0ed8-4888-87c8-3371f8927a2c
webtitle: NodeJS
updated: 2022-10-30T23:41:16+07:00
---

## Auto Lint And Format Typescript Using VSCode With Eslint And Prettier

Updated october 2022, suitable with VSCode and ESLint VSCode Plugin as below informations
```log
Version: 1.72.2
Commit: d045a5eda657f4d7b676dedbfa7aab8207f8a075
Date: 2022-10-12T22:16:26.920Z
Electron: 19.0.17
Chromium: 102.0.5005.167
Node.js: 16.14.2
V8: 10.2.154.15-electron.0
OS: Linux x64 5.15.0-50-generic
Sandboxed: No
```

Linter becomes 2 types:
- [TSLint](https://palantir.github.io/tslint/) is a linter that must be utilized for TypeScript.
- [ESLint](https://eslint.org/) is a linter supports both JavaScript and TypeScript.
**ESLint has a more performant architecture than TSLint** and that they will **only be focusing on ESLint** when providing editor linting integration for TypeScript. Now how to automated these linter in vscode without **[prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**

## ESM
for project with esm `"type": "module"` in `package.json` you can using these configurations [ESM Eslint Auto Format Typescript Project In VSCode](eslint-prettier-typescript-vscode-esm.md)

## Install dependencies
install using npm:
```shell
npm i -D prettier eslint-config-prettier eslint-plugin-prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
install using yarn:
```shell
yarn add prettier eslint-config-prettier eslint-plugin-prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```

## install and activate VSCode ESLint extension for auto Linter And Formatter
[Download Here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Create .eslintrc.js
```js
const prettier = require('./.prettierrc');
/**
 * @type {import('eslint').ESLint.ConfigData}
 */
const config = {
  root: true, // Specifies your current project has own eslint rules without extends parent folder eslint rules
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  env: {
    browser: true, // add support for browser js (window,document,location,etc)
    amd: true, // add amd support
    node: true // add node support (module.export,etc)
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  extends: [
    'eslint:recommended', // uses eslint default recommended
    'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  // override rules for js files
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off' // disable require warning on js files
      }
    }
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
        caughtErrorsIgnorePattern: '^_'
      }
    ], // enable typescript-eslint unused-vars and allow unused vars start with underscore (_)
    '@typescript-eslint/no-explicit-any': 'off', // allow any types
    '@typescript-eslint/no-this-alias': [
      // rules for this binding
      'error',
      {
        allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
        allowedNames: ['self'] // Allow `const self = this`; `[]` by default
      }
    ],
    // "arrow-body-style" and "prefer-arrow-callback" are two ESLint core rules that can cause issues with prettier/prettier plugin, so turn them off.
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off'
  }
};

module.exports = config;
```

## Create Prettier Config
specify your desired config for prettier
### Using .prettierrc.js
```js
module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2
};
```

### Using .prettierc.json

> if you using json, change top of [`.eslintrc.js`](#Create-eslintrc-js) to `const prettier = require('./.prettierrc.json');`

```jsonc
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": true,
  "printWidth": 120,
  "singleQuote": true,
  "trailingComma": "none",
  "tabWidth": 2
}
```

## Create .vscode/settings.json
this will automate lint and format your codes when saving.
```jsonc 
{
  "files.autoSave": "onWindowChange",
  "editor.codeActionsOnSave": {
    "source.fixAll": true, // let ESLint take formating and linting
    "source.organizeImports": true // auto remove unused imports
  },
  "editor.formatOnPaste": false, // disable default vscode formatter
  "editor.formatOnSave": false, // disable default vscode formatter
  "[json]": {
    "editor.formatOnSave": true // enable json formating with default vscode formatter
  },
}
```

**now your vscode auto format and lint every saved files**

## optional: create tsconfig.json (if not created yet)
for example tsconfig.json for node 12.

npm
```bash
npm install --save-dev @tsconfig/node12
```
yarn
```bash
yarn add --dev @tsconfig/node12
```

```jsonc
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Node 12",
  "extends": "@tsconfig/node12/tsconfig.json",
  "compilerOptions": {
    "preserveConstEnums": true,
    "allowJs": true,
    "outDir": "./dist"
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "**/node_modules/**",
    "**/*.spec.ts",
    "**/*.test.ts",
    "**/__tests__/**"
  ]
}
```

## Finish
now your vscode format and lint your codes automatically.

