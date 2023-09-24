---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2023-05-16T20:58:48+07:00
description: remove files from git history for specific size delete big files
  from git history example deleting files more than 100Mb cd
  folder/your/repositorybfg --strip-bl
lang: en
tags:
  - github
  - bash
  - snippet
title: remove files from git history for specific size
type: post
updated: 2023-09-03T04:28:04+07:00
wordcount: 108
---

## delete big files from git history
example deleting files more than 100Mb
```bash
cd folder/your/repository
bfg --strip-blobs-bigger-than 100M .
```

## clean old logs before push
```bash
git reflog expire --expire=now --all && git gc --prune=now --aggressive
```

## push
```bash
git push
```