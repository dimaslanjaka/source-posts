---
title: Setup VSCode for typescript with css modules
description: Setup VSCode for typescript with css modules import support. You can be able import css,scss,less,stylus file as modular import in typescript+react+webpack project
date: 2023-09-16T05:59:55+07:00
tags: [react, typescript, javascript, vscode]
categories: [programming]
---

Setup VSCode for typescript with css modules import support. You can be able import css,scss,less,stylus file as modular import in typescript+react+webpack project

## Install typescript plugin

```bash
yarn add -D typescript-plugin-css-modules
```
or
```bash
npm install -D typescript-plugin-css-modules
```

## Change VSCode USER SETTINGS json

add these configuration to user settings json
```jsonc
{
  // prompt using local project typescript version
  "typescript.enablePromptUseWorkspaceTsdk": true,
  // add plugin to vscode typescript server language
	"typescript.tsserver.pluginPaths": [
		"typescript-plugin-css-modules"
	]
}
```

## Modify tsconfig.json

enable css modules plugin in project typescript configuration by editing `tsconfig.json`

```jsonc
{
  "compilerOptions": {
    // enable css modules plugin
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
}
```

## Create or modify `src/global.d.ts`

create or modify `src/global.d.ts` to apply css modules to typescriptreact project, by adding below declarations:

```jsonc
// typescript css modules

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export default classes;
}
```
