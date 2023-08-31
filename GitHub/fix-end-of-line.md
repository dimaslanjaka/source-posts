---
title: fix end of line on github repository
date: 2023-08-31T10:06:28+07:00
---

## force end of line using LF
For repos (Git repositories) that were checked out after those global settings were set, everything will be checked out as whatever it is in the repo -- hopefully `LF` (`\n`).\
Any `CRLF` will be converted to just `LF` on check-in (commit).

With an existing repo that you have already checked out -- that has the correct line endings in the repo but not your working copy -- you can run the following commands to fix it:
```bash
git config --global core.eol lf
git config --global core.autocrlf input
git rm -rf --cached .
git reset --hard HEAD
```
