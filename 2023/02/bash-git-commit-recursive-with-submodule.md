---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2023-02-12T18:12:20+07:00
description: bash script to commit root and all submodules at once
lang: en
tags:
  - script
  - shell
  - snippet
title: Script bash git commit recursive with submodules
type: post
updated: 2023-09-03T04:28:04+07:00
wordcount: 216
---

```bash
#!/bin/bash -e

## Commit With Submodules
## usages: sh scripts/commit.sh "commit message"

if [ -z "$1" ]; then
    echo "You need to provide a commit message"
    exit
fi

git submodule foreach "
    git add -A .
    git update-index --refresh
    commits=\$(git diff-index HEAD)
    if [ ! -z \"\$commits\" ]; then
        git commit -am \"$1\"
    fi"

git add -A .
git commit -am "$1"
```