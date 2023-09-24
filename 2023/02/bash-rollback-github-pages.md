---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2023-02-28T08:47:15+07:00
description: bash script to rollback github pages Bash script github pages
  rollback /usr/bin/env bashecho Insert commit hash read commitHashbranch=git
  branch --show-currentb
lang: en
tags:
  - bash
  - github
  - rollback
title: bash script to rollback github pages
type: post
updated: 2023-09-03T04:28:04+07:00
wordcount: 280
---

## Bash script github pages rollback

```bash
#!/usr/bin/env bash

echo "Insert commit hash" read commitHash
branch=$(git branch --show-current)
branchpatch=patch

if [ -z "$commitHash" ]; then
  echo "No commit hash supplied"
  exit
fi

git checkout $branch
git reset --hard $commitHash
git checkout -b $branchpatch
git add -A
git commit -am "hotfix patch ${branch}@${commitHash}" 2> /dev/null
git checkout $branch
git checkout $branchpatch .
git add -A
git commit -am "hotfix patch ${branch}@${commitHash}" 2> /dev/null
git push origin $branch
git branch -D $branchpatch
```

## Usage to rollback

```shell
sh filename.sh
```

- input your `commit` hash to rollback
- wait until finished