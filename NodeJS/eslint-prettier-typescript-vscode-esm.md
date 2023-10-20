---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2022-04-17T10:01:31.000Z
description: Auto format typescript with esm using only eslint and prettier module
lang: en
tags:
  - nodejs
  - javascript
  - typescript
  - eslint
thumbnail: /NodeJS/eslint-prettier-typescript-vscode-esm/thumb.png
title: Auto format typescript with esm in vscode
type: post
updated: 2023-09-02T23:34:20.000Z
wordcount: 800

---

## CommonJS
for Non-ESM/CommonJS you can read these article [CommonJS Eslint Prettier Auto Format Typescript Project In VSCode](eslint-prettier-typescript-vscode.md)

## install and activate VSCode ESLint extension for auto Linter And Formatter
[Download Here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Install dependencies

install using npm:
```bash
npm i -D prettier eslint-config-prettier eslint-plugin-prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
install using yarn:
```bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```

## Create .eslintrc
```jsonc
{
  "$schema": "https://json.schemastore.org/eslintrc",
  "root": true,
  "parser": "@typescript-eslint/parser",
  "env": {
    "browser": true,
    "amd": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "overrides": [
    {
      "files": [
        "*.js"
      ],
      "rules": {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        "allowDestructuring": false,
        "allowedNames": [
          "self"
        ]
      }
    ],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}
```
## Create .prettierrc
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
```jsonc
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // let ESLint take formating and linting
  }
}
```

## optional: create tsconfig.json (if not created yet)
for example tsconfig.json for node 16.

npm
```bash
npm install --save-dev @tsconfig/node16
```
yarn
```bash
yarn add --dev @tsconfig/node16
```

```jsonc
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Node 16",
  "extends": "@tsconfig/node16/tsconfig.json",
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