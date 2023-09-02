---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2023-06-01T11:47:07+07:00
description: Removing old unneeded commits - saving disk space and making git clones faster
lang: en
tags:
  - github
  - bash
title: How to remove thousands old unneeded commits
type: post
updated: 2023-09-03T04:28:02+07:00
wordcount: 1457
---

## Say my git repo has 5,000 commits, how can I remove the first 4,000 commits that are quite old and no longer needed, in order to save disk space?


> by Sebass van Boxel, Solutions Engineer at GitHub (2018-present)


First of all, I would try less destructive ways to clean up disk space in your git project. If you're collaborating on a repository with others, it's considered a bad practice to rewrite published history. If you’ve already decided that this is what you want to do, please skip the first part.
One of the great powers of Git is that it preserves all history. Often you only realize that you really needed that history when it isn’t there anymore. 
For new people that join your project, it can be of great value to know what happened for what reason, by “removing” those old commits, they'll lose that context. My advice, before anything else, would be to run Git’s built-in housekeeping task:

```bash
git -gc
```

More info on this, as well as the options it accepts, can be found in the Git manual: Git - git-gc Documentation

If your `.git`-folder is still too big there could be another issue, and that is that someone has checked in files/folder that should’ve been ignored, and are now part of your git history. Although Git is optimized for speed and reliability, and not for efficient use of disk space, it still is, quite efficient. Unless you accidentally commit directories/files that shouldn’t be part of your git history of course. Infamous examples are the `node_modules` and `vendor` directories. If that is the case, the following commands are here to help: (source)

```
git filter-branch --tree-filter 'rm -rf <DIRECTORY_NAME>' --prune-empty HEAD 
git for-each-ref --format="%(refname)" refs/original/ | xargs -n 1 git update-ref -d
echo <DIRECTORY_NAME>/ >> .gitignore 
git add .gitignore git commit -m 'Removing <DIRECTORY_NAME> from git history' 
git gc 
```

If, at this point, you’re still not content with your Git history and want to get rid of the history that is contained in your first x commits, you can squash them altogether. This will discard all the separate

First, find the commit hash of the last commit you want to keep.
Check out that commit as an orphan in a new branch, this commit will have no parent and therefor no history. 

```bash
git checkout --orphan tempBranch <COMMIT_HASH>
```

Commit all the files in your project:

```bash
git add -all
git commit -m “Squashed all old commits”
Now, you can rebase all commits that came after the commit you’ve chosen in step one, on top of this initial commit:
git rebase --onto tempBranch <COMMIT_HASH> master
```

At this stage validate your project status and Git log output. If everything is okay you can overwrite the remote with the new history, and remove the tempBranch:

```bash
git push -f
git branch -D tempBranch

```

