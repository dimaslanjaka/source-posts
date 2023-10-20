---
author:
  nick: Dimas Lanjaka
  link: https://github.com/dimaslanjaka
  image: https://i.pinimg.com/564x/32/bc/65/32bc65e19220728fb290249059a7242a.jpg
categories:
  - programming
comments: true
date: 2021-11-28T00:00:00.000Z
description: How to configure eslint with prettier to automated lint and format
  codes in typescript project using vscode
keywords:
  - nodejs
  - eslint
  - prettier
  - vscode
  - lint
lang: en
location: Indonesia
tags:
  - javascript
  - typescript
  - eslint
thumbnail: https://i.ytimg.com/vi/lHAeK8t94as/maxresdefault.jpg
title: Eslint Prettier In Typescript Project Using Vscode
type: post
updated: 2023-09-17T00:13:57.000Z
webtitle: NodeJS
wordcount: 2562

---

## Auto Lint And Format Typescript Using VSCode With Eslint And Prettier

Updated september 2023, suitable with VSCode and ESLint VSCode Plugin as below informations
```log
Version: 1.82.2
Commit: abd2f3db4bdb28f9e95536dfa84d8479f1eb312d
Date: 2023-09-14T05:51:20.981Z
Electron: 25.8.1
ElectronBuildId: 23779380
Chromium: 114.0.5735.289
Node.js: 18.15.0
V8: 11.4.183.29-electron.0
OS: Linux x64 5.15.0-83-generic
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

## install and activate VSCode ESLint extension
these plugin needed for auto Linter And Formatter
- [ESLint Plugin for VSCode - Download Here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Create .eslintrc.js
```js
const prettier = require('./.prettierrc.json');
// or using prettier config javascript
// const prettier = require('./.prettierrc');

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
const config = {
  // Specifies your current project has own eslint rules without extends parent folder eslint rules
  root: true,
  // Specifies the ESLint parser
  parser: '@typescript-eslint/parser',
  env: {
    // add support for browser js (window,document,location,etc)
    browser: true,
    // add amd support
    amd: true,
    // add node support (module.export,etc)
    node: true,
    // add jquery support
    jquery: true,
  },
  globals: {
    adsbygoogle: true,
    gtag: true,
    $: true,
    safelink: true,
    google: 'readonly',
    gapi: 'readonly',
  },
  parserOptions: {
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2020,
    // Allows for the use of imports
    sourceType: 'module',
    // strict nested project to be handled
    // project: ['./tsconfig.json'],
  },
  extends: [
    // Uses eslint default recommended rules
    'eslint:recommended',
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/eslint-recommended',
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    // Enables eslint-plugin-prettier and eslint-config-prettier.
    // This will display prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
  ],
  // override rules for js files
  overrides: [
    {
      files: ['*.js'],
      rules: {
        // disable require warning on js files
        '@typescript-eslint/no-var-requires': 'off',
        // disable include refenrences definition files on js
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
  ],
  // specify your desired rules for eslint
  rules: {
    'prettier/prettier': ['error', prettier],
    // disable function without boundary return type
    '@typescript-eslint/explicit-function-return-type': 'off',
    // disable original eslint unused-vars
    'no-unused-vars': 'off',
    // enable typescript-eslint unused-vars
    // and allow unused vars start with underscore (_)
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    // allow any types
    '@typescript-eslint/no-explicit-any': 'off',
    // enable this variable calls
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        // Disallow `const { props, state } = this`; true by default
        allowDestructuring: false,
        // Allow `const self = this`; `[]` by default
        allowedNames: ['self'],
      },
    ],
    // these ESLint core rules that can cause issues with
    // prettier/prettier plugin, so turn them off.
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    // ESLint performance issues fixes
    // fix eslint-plugin-import
    // * TypeScript provides the same checks as part of standard type checking
    'import/no-named-as-default-member': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    // fix @typescript-eslint
    // * disable the base rule as it can report incorrect errors
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    // fix default eslint rules
    // * disable the Enforce sorted import declarations within modules
    'sort-imports': 'off',
  },
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
  "[jsonc]": {
    "editor.formatOnSave": true // enable jsonc formating with default vscode formatter
  }
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

## Conclusion
now your vscode format and lint your codes automatically.