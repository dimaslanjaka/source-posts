---
author: Dimas Lanjaka
categories:
  - uncategorized
comments: true
cover: https://i.stack.imgur.com/Xo2sA.png
date: 2022-03-26T04:27:16+0000
description: disable vscode alert File is a CommonJS module; it may be converted
  to an ES module
excerpt: disable vscode alert File is a CommonJS module; it may be converted to
  an ES module
id: 1d699a76-b023-4888-85f3-bd25b793aa3d
lang: en
photos:
  - https://i.stack.imgur.com/Xo2sA.png
subtitle: disable vscode alert File is a CommonJS module; it may be converted to
  an ES module
tags:
  - ts
  - js
  - ide
thumbnail: https://i.stack.imgur.com/Xo2sA.png
title: disable vscode alert File is a CommonJS module; it may be converted to an
  ES module
type: post
updated: 2022-03-26T04:27:16+0000
wordcount: 348
---

# File is a CommonJS module; it may be converted to an ES module
This is a new feature added in Visual Studio Code called "Suggestion Code Actions". "Suggestion Code Actions" are enabled by default in JavaScript and TypeScript.

You can disable them by setting: `"typescript.suggestionActions.enabled": false` or `"javascript.suggestionActions.enabled": false` in your user/workspace settings. The documentation can be found [here](https://code.visualstudio.com/docs/getstarted/settings).

### open settings.json file
insert below option
```jsonc
{
    "javascript.suggestionActions.enabled": false, // disable vscode alert on javascript
    "typescript.suggestionActions.enabled": false // disable vscode alert on typescript
}
```

### [Preview Example] it should be looks like:
![Preview Setting](https://i.stack.imgur.com/2AUwp.png)

## This solution also fix vscode alerts below
- fix vscode alert This may be converted to an async function.