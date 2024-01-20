---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2023-05-17T20:45:00+07:00
description: rollback commit github Rogue Coder? Working alone and just want to do well? Follow the steps below. These steps have worked reliably for me and many others over
lang: en
tags:
  - github
  - script
  - shell
  - snippet
title: rollback commit github
type: post
updated: 2023-09-30T01:43:40+07:00
---

Rogue Coder?
------------

Working alone and just want to do well? Follow the steps below. These steps have worked reliably for me and many others over the years.

Collaborate with others? Git is complicated. Please read the comments below this answer, consider other answers, and discuss with your team before acting rashly. 

### Reverting Working Copy to Most Recent Commit

To revert to the previous commit, ignoring any changes:

```
git reset --hard HEAD
```

where HEAD is the last commit in your current branch

### Reverting The Working Copy to an Older Commit

To revert to a commit that's older than the most recent commit:

```
# Resets index to former commit; replace '56e05fced' with your commit code
git reset 56e05fced

# Moves pointer back to previous HEAD
git reset --soft HEAD@{1}

git commit -m "Revert to 56e05fced"

# Updates working copy to reflect the new commit
git reset --hard

# Push your changes to respective branch
git push -f

```

### [Rollback to previous commit without deleting commit history](https://stackoverflow.com/a/21718540/6404439)

```bash
git revert --no-commit 0d1d7fc3..HEAD
git commit
```

This will revert everything from the HEAD back to the commit hash (excluded), meaning it will recreate that commit state in the working tree *as if* every commit after `0d1d7fc3` had been walked back. You can then commit the current tree, and it will create a brand new commit essentially equivalent to the commit you "reverted" to.

(The `--no-commit` flag lets git revert all the commits at once- otherwise you'll be prompted for a message for each commit in the range, littering your history with unnecessary new commits.)

This is a **safe and easy way to rollback to a previous state**. No history is destroyed, so it can be used for commits that have already been made public.

* * * * *

**Note on merge commits:**\
If one of the commits between 0766c053..HEAD (inclusive) is a merge then there will be an error popping up (to do with no -m specified). The following link may help those encountering that: [Why does git revert complain about a missing -m option?](https://stackoverflow.com/questions/5970889/why-does-git-revert-complain-about-a-missing-m-option) (thanks @timhc22 for pointing out)

Credits go to a similar Stack Overflow question, *[Revert to a commit by a SHA hash in Git?](https://stackoverflow.com/questions/1895059/git-revert-to-a-commit-by-sha-hash)*.
