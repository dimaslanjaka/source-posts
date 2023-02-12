---
title: Script bash git commit recursive with submodules
description: bash script to commit root and all submodules at once
tags: ['snippet', 'script']
categories: ['programming', 'bash']
date: 2023-02-12T18:12:20+07:00
updated: 2023-02-12T18:12:20+07:00
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