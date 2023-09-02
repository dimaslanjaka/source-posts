---
author: Dimas Lanjaka
categories:
  - programming
comments: true
cover: https://production-cci-com.imgix.net/blog/media/2021-10-22-git-detached-head-3.png
date: 2022-10-10T22:56:00+0700
description: Now it turns out that the head is cut off/detached. i dont know what it is. How do I get it back?
keywords:
  - github
  - fix
  - detached head
lang: en
photos:
  - https://production-cci-com.imgix.net/blog/media/2021-10-22-git-detached-head-3.png
tags:
  - github
thumbnail: https://production-cci-com.imgix.net/blog/media/2021-10-22-git-detached-head-3.png
title: How to fix github detached HEAD
type: post
updated: 2023-09-02T18:26:50.750Z
wordcount: 517
---

Detached head means You are no longer at branch. Checked out a single commit in history (in this case, the commit before HEAD, i.e. HEAD).

If you want to *delete* your changes associated with the detached HEAD
----------------------------------------------------------------------

You only need to checkout the branch you were on, e.g.

```bash
git checkout master
```

If you then change the file and want to restore the state in the index, delete the file without deleting it first.

```bash
git checkout -- path/to/foo
```

This will restore the file foo to the state it is in the index.

If you want to *keep* your changes associated with the detached HEAD
--------------------------------------------------------------------

1.  Run `git branch tmp` - this will save your changes in a new branch called `tmp`.
2.  Run `git checkout master`
3.  If you would like to incorporate the changes you made into `master`, run `git merge tmp` from the `master` branch. You should be on the `master` branch after running `git checkout master`.
