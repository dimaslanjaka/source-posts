---
author: Dimas Lanjaka
categories:
  - uncategorized
comments: true
cover: https://miro.medium.com/max/1400/1*HSXWWE7wkg9phEJ7ImhT2Q.jpeg
date: 2022-03-29T20:32:29+0000
description: "Force Change ALl End Of Line VSCode To LF Git change all crlf to
  lf for vscode git add -Agit commit -m Commit Message Before Changing End Of
  Linegit push begin changing end of line globallygit config core.autocrlf
  falsegit rm --cached -r .git reset --hard Change VSCode settings.json Option "
excerpt: "Force Change ALl End Of Line VSCode To LF Git change all crlf to lf
  for vscode git add -Agit commit -m Commit Message Before Changing End Of
  Linegit push begin changing end of line globallygit config core.autocrlf
  falsegit rm --cached -r .git reset --hard Change VSCode settings.json Option "
id: 2f56d454-ee7d-4888-838d-8c92369290cb
lang: en
photos:
  - https://miro.medium.com/max/1400/1*HSXWWE7wkg9phEJ7ImhT2Q.jpeg
subtitle: "Force Change ALl End Of Line VSCode To LF Git change all crlf to lf
  for vscode git add -Agit commit -m Commit Message Before Changing End Of
  Linegit push begin changing end of line globallygit config core.autocrlf
  falsegit rm --cached -r .git reset --hard Change VSCode settings.json Option "
tags: []
thumbnail: https://miro.medium.com/max/1400/1*HSXWWE7wkg9phEJ7ImhT2Q.jpeg
title: Force Change ALl End Of Line VSCode To LF
type: post
updated: 2023-08-08T14:45:09+07:00
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