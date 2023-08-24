---
author: Dimas Lanjaka
categories:
  - programming
comments: true
cover: https://miro.medium.com/max/1400/1*Q1xstpngN6E4H-WHLySJvg.png
date: 2022-11-10T07:45:00+07:00
description: "VSCode settings JSON for nunjucks and EJS Download VSCode Nunjucks
  Plugin
  ResourceLinkMarketplacehttps://marketplace.visualstudio.com/items?itemName=gi\
  nfuru.better-nunjucksRepositoryhttps://github.com/edheltzel/nunjucks-for-visu\
  al-studio-code ResourceLink Resource Link Marketplacehttps:"
excerpt: "VSCode settings JSON for nunjucks and EJS Download VSCode Nunjucks
  Plugin
  ResourceLinkMarketplacehttps://marketplace.visualstudio.com/items?itemName=gi\
  nfuru.better-nunjucksRepositoryhttps://github.com/edheltzel/nunjucks-for-visu\
  al-studio-code ResourceLink Resource Link Marketplacehttps:"
lang: en
permalink: /2022/10/vscode-settings-json-for-nunjucks-ejs.html
photos:
  - https://miro.medium.com/max/1400/1*Q1xstpngN6E4H-WHLySJvg.png
subtitle: "VSCode settings JSON for nunjucks and EJS Download VSCode Nunjucks
  Plugin
  ResourceLinkMarketplacehttps://marketplace.visualstudio.com/items?itemName=gi\
  nfuru.better-nunjucksRepositoryhttps://github.com/edheltzel/nunjucks-for-visu\
  al-studio-code ResourceLink Resource Link Marketplacehttps:"
tags:
  - vscode
thumbnail: https://miro.medium.com/max/1400/1*Q1xstpngN6E4H-WHLySJvg.png
title: VSCode settings JSON for nunjucks and EJS
type: post
updated: 2023-08-08T14:44:14+07:00
wordcount: 1316
---

## Download VSCode Nunjucks Plugin
| Resource | Link |
| :--- | :--- |
| Marketplace | [https://marketplace.visualstudio.com/items?itemName=ginfuru.better-nunjucks](https://marketplace.visualstudio.com/items?itemName=ginfuru.better-nunjucks) |
| Repository | [https://github.com/edheltzel/nunjucks-for-visual-studio-code](https://github.com/edheltzel/nunjucks-for-visual-studio-code) |

## Download VSCode EJS Plugin
| Resource | Link |
| :--- | :--- |
| Marketplace | [https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support](https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support)
| Repository | [https://github.com/Digitalbrainstem/ejs-grammar](https://github.com/Digitalbrainstem/ejs-grammar) |

## VSCode Settings JSON for Nunjucks and EJS
```jsonc
{
  "terminal.integrated.env.linux": {
    "PATH": "${env:PATH}:${workspaceFolder}/node_modules/.bin:${workspaceFolder}/bin"
  },
  "terminal.integrated.env.windows": {
    "PATH": "${env:PATH};${workspaceFolder}\\node_modules\\.bin;${workspaceFolder}\\bin"
  },
  "npm.enableRunFromFolder": true,
  "files.autoSave": "onWindowChange",
  "files.autoSaveDelay": 30000,
  "typescript.tsc.autoDetect": "on",
  "editor.fontFamily": "Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  // setup file associations for nunjucks and ejs
  "files.associations": {
    "*.njk": "html",
    "*.ejs": "html"
  },
  // setup emmet auto complete for nunjucks and ejs
  "emmet.includeLanguages": {
    "ejs": "html",
    "njk": "html",
    "nunjucks": "html"
  },
  // setup syntax profiles for nunjucks and ejs
  "emmet.syntaxProfiles": {
    "njk": "html",
    "ejs": "html"
  },
  // optional: for eslint plugin
  "eslint.format.enable": true,
  "eslint.trace.server": "messages",
  // make editor auto word-wrap
  "editor.wordWrap": "on",
  // enable bracket pair colorized
  "editor.bracketPairColorization.enabled": true,
  // disable javascript suggestions
  "javascript.suggestionActions.enabled": false,
  "typescript.suggestionActions.enabled": true,
  "editor.codeActionsOnSave": {
    // remove unused imports
    "source.organizeImports": true,
    // fix all errors such as eslint, etc
    "source.fixAll": true // let ESLint take formating and linting
  },
  // optional: eslint validate files assoc
  "eslint.validate": [
    "javascript",
    "typescript"
  ],
  // custom settings for nunjucks files
  "[nunjucks]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[ejs]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[scss]": {
    "editor.suggest.insertMode": "replace",
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.suggest.insertMode": "replace",
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "vscode.css-language-features"
  },
  "[json]": {
    "editor.formatOnSave": true, // enable json formating with default vscode formatter
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[markdown]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "yzhang.markdown-all-in-one",
    "editor.codeActionsOnSave": {
      "source.organizeImports": false,
      "source.fixAll.eslint": false
    }
  },
  "[jsonc]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[typescript]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.organizeImports": false
    }
  },
  "editor.formatOnSave": false,
  "editor.tabSize": 2,
  "files.eol": "\n",
  "files.exclude": {
    "**/node_modules": true,
    "**/vendor": true,
    "**/tmp/yarn": true
  },
  "code-runner.executorMap": {
    "typescriptreact": "cross-env-shell DEBUG=chimera-* ts-node",
    "javascript": "node",
    "typescript": "cross-env-shell DEBUG=git-command-helper,chimera-* ts-node",
    "coffeescript": "coffee",
    "sass": "sass --style expanded",
    "scss": "scss --style expanded",
    "less": "cd $dir && lessc $fileName $fileNameWithoutExt.css"
  },
  "code-runner.runInTerminal": true,
  "code-runner.cwd": "${workspaceFolder}",
  "code-runner.saveAllFilesBeforeRun": true,
  "code-runner.clearPreviousOutput": true,
  "code-runner.respectShebang": true,
  "typescript.tsdk": "./node_modules/typescript/lib",
  "typescript.format.enable": true,
  "typescript.tsserver.enableTracing": false,
  "typescript.tsserver.log": "off",
  "typescript.tsserver.trace": "off",
  "editor.autoClosingBrackets": "always",
  "editor.matchBrackets": "always",
  "prettier.enableDebugLogs": true,
  "prettier.prettierPath": "./node_modules/prettier",
  "prettier.printWidth": 180,
  "npm.packageManager": "npm",
  "git.enabled": true,
  "eslint.packageManager": "npm",
  "explorer.autoReveal": false
}
```
