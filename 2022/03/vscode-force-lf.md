---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2022-03-29T20:32:29+0000
description: "Force Change ALl End Of Line VSCode To LF Git change all crlf to
  lf for vscode git add -Agit commit -m Commit Message Before Changing End Of
  Linegit push begin "
lang: en
tags: []
thumbnail: https://miro.medium.com/max/1400/1*HSXWWE7wkg9phEJ7ImhT2Q.jpeg
title: Force Change ALl End Of Line VSCode To LF
type: post
updated: 2023-09-02T23:13:09.000Z
wordcount: 156

---

## Git change all crlf to lf for vscode
```shell
git add -A
git commit -m "Commit Message Before Changing End Of Line"
git push
# begin changing end of line globally
git config core.autocrlf false
git rm --cached -r .
git reset --hard
```

## Change VSCode `settings.json` Option
```json
{
  "files.eol": "\n"
}
```
![Preview settings.json](https://imgs.developpaper.com/imgs/287058866-5bfb8bd1d4851_articlex.png)