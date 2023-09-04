---
title: Prettier VSCode TypeError A dynamic import callback was not specified fix
date: 2023-09-04T08:58:44+07:00
categories: [programming]
tags: [vscode, prettier]
---

How to fix Prettier VSCode TypeError A dynamic import callback was not specified only occurs for `JSX`/`TSX` file.

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
