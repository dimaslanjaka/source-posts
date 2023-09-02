---
author: Dimas Lanjaka
categories:
  - programming
comments: true
cover: https://www.techielass.com/content/images/2022/09/REWRITING-GIT-HISTORY.png
date: 2023-04-10T14:53:37+07:00
description: How to delete commit history from github repository How to delete
  commit history from github repository bash script to delete history of commits
  from github rep
lang: en
photos:
  - https://www.techielass.com/content/images/2022/09/REWRITING-GIT-HISTORY.png
tags:
  - script
  - bash
thumbnail: https://www.techielass.com/content/images/2022/09/REWRITING-GIT-HISTORY.png
title: How to delete commit history from github repository
type: post
updated: 2023-09-03T04:28:04+07:00
wordcount: 377
---

## How to delete commit history from github repository

> bash script to delete history of commits from github repository

```bash
#!/usr/bin/env bash

## delete commit history

branch=$(git branch --show-current)
git checkout --orphan latest_branch # Move to new branch with new object
git add -A # Add all files
git commit -am "Prune at $(date)" # Commiting the changes
git branch -D $branch # Deleting master branch
git branch -m $branch # Renaming branch as master
git push -f origin $branch # Pushes to master branch
git reflog expire --all --expire=now --verbose # remove logs
git gc --aggressive --prune=all # remove the old files
git count-objects -v # count current objects
```