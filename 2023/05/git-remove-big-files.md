---
title: remove files from git history for specific size
date: 2023-05-16T20:58:48+07:00
updated: 2023-06-01T02:40:16+07:00
tags: [github, bash, snippet]
category: [programming, bash]
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
