---
title: Fast node_modules Cleanup with PowerShell
description: A PowerShell one-liner to recursively and forcibly clean node_modules by matching alphanumeric prefixes before removing the main directory.
date: 2026-10-18T14:40:58+07:00
tags:
  - nodejs
  - powershell
  - windows
  - shell
categories:
  - programming
  - education
keywords:
  - node_modules cleanup
  - remove node_modules
  - PowerShell cleanup script
  - Node.js dependency cleanup
  - Windows development
  - npm cleanup
language: en
draft: false
---

## Code

```powershell
('a'..'z') + ('0'..'9') | ForEach-Object { if (Test-Path "node_modules/$_*") { rm -r -fo "node_modules/$_*" } }; if (Test-Path "node_modules") { rm -r -fo "node_modules" }
```

## How It Works

1. **Generate character sequences** — `('a'..'z') + ('0'..'9')` produces lowercase letters from `a` to `z` and digits from `0` to `9`.
2. **Iterate through characters** — `ForEach-Object` processes each character individually.
3. **Check matching paths** — `Test-Path` checks for items matching `node_modules/$_*`.
4. **Remove matching items** — `rm -r -fo` recursively and forcibly removes matching files or directories.
5. **Remove the main directory** — If `node_modules` still exists, the final command removes it and its remaining contents.

## Use Cases

This script is useful for cleaning up Node.js project dependencies on Windows, especially before reinstalling packages or troubleshooting dependency-related issues.

## Important Notes

- Run the script from the correct project directory.
- Deletion is permanent and does not use the Recycle Bin.
- This script uses PowerShell syntax and is not intended for Command Prompt (`cmd.exe`).
- The `node_modules/$_*` pattern matches paths by character prefix, not exclusively directories.
- The character-by-character cleanup is redundant if the only goal is to remove the entire `node_modules` directory, since the final command already removes it recursively.
