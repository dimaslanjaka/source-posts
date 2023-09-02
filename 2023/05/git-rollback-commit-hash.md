---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2023-05-17T20:45:00+07:00
description: rollback commit github Rogue Coder? Working alone and just want to
  do well? Follow the steps below. These steps have worked reliably for me and
  many others over
lang: en
tags:
  - github
  - script
  - snippet
  - bash
title: rollback commit github
type: post
updated: 2023-09-03T04:28:04+07:00
wordcount: 543
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

Credits go to a similar Stack Overflow question, *[Revert to a commit by a SHA hash in Git?](https://stackoverflow.com/questions/1895059/git-revert-to-a-commit-by-sha-hash)*.
