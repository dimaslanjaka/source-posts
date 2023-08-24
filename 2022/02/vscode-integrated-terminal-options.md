---
Category:
  - Programming
  - IDE
author: Dimas Lanjaka
categories:
  - uncategorized
comments: true
cover: https://fabianlee.org/wp-content/uploads/2021/12/vscode-logo.png
date: 2022-02-20T07:00:00+07:00
description: Custom PATH VSCode Integrated Terminal Options Determining custom
  path on vscode IDE made easily development programs within multiple platforms.
  VSCode Environment workspaceFolderworkspace folder rootenv:PATHexisting vscode
  path mixed with system workspaceFolderworkspace folder roo
excerpt: Custom PATH VSCode Integrated Terminal Options Determining custom path
  on vscode IDE made easily development programs within multiple platforms.
  VSCode Environment workspaceFolderworkspace folder rootenv:PATHexisting vscode
  path mixed with system workspaceFolderworkspace folder roo
lang: en
photos:
  - https://fabianlee.org/wp-content/uploads/2021/12/vscode-logo.png
subtitle: Custom PATH VSCode Integrated Terminal Options Determining custom path
  on vscode IDE made easily development programs within multiple platforms.
  VSCode Environment workspaceFolderworkspace folder rootenv:PATHexisting vscode
  path mixed with system workspaceFolderworkspace folder roo
tags:
  - vscode
thumbnail: https://fabianlee.org/wp-content/uploads/2021/12/vscode-logo.png
title: Custom PATH VSCode Integrated Terminal Options
type: post
updated: 2023-08-08T14:45:10+07:00
webtitle: VSCode
wordcount: 287
---

Determining custom path on vscode IDE made easily development programs within multiple platforms.

## VSCode Environment
| `${workspaceFolder}` | workspace folder root                   |
| -------------------- | --------------------------------------- |
| `${env:PATH}`        | existing vscode path (mixed with system |

## Linux Environment
Add custom path to terminal linux
```json
{
  "terminal.integrated.env.linux": {
    "PATH": "${workspaceFolder}/bin:${env:PATH}"
  }
}
```

## Windows Environment
Add path into vscode terminal windows
```json
{
  "terminal.integrated.env.windows": {
    "PATH": "${env:PATH};${workspaceFolder}\\bin;C:\\another\\folder"
  }
}
```

## MAC OSX Environment
Add path into vscode terminal mac osx
```json
{
  "terminal.integrated.env.osx": {
    "PATH": "/home"
  }
}
```
Now open Terminal and look at PATH
```shell
echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/home
```

### Also See
- [vscode alert: CommonJS may be converted to an es module](/2022/03/26/file-is-a-commonjs-module-it-may-be-converted-to-an-es-module.html)
- [vscode crossplatform settings](/search/?q=vscode+crossplatform+setting)