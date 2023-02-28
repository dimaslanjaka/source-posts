---
title: bash script to rollback github pages
date: 2023-02-28T08:47:15+07:00
updated: 2023-02-28T09:47:15+07:00
tags: ['bash', 'github', 'rollback']
categories: ['programming', 'bash', 'github']
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