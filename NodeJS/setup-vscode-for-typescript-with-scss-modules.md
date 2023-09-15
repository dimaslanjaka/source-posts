---
title: Setup VSCode for typescript with css modules
description: Setup VSCode for typescript with css modules import support. You can be able import css,scss,less,stylus file as modular import in typescript+react+webpack project
date: 2023-09-16T05:59:55+07:00
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
