---
title: How to delete commit history from github repository
date: 2023-04-10T14:53:37+07:00
updated: 2023-04-10T14:57:37+07:00
categories: ['programming', 'bash']
tags: ['script','bash']
thumbnail: https://www.techielass.com/content/images/2022/09/REWRITING-GIT-HISTORY.png
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