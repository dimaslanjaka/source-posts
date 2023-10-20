---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2023-04-07T11:53:16.000Z
description: How do I commit case-sensitive only filename changes in Git?
lang: en
tags:
  - github
  - script
  - bash
thumbnail: https://1.bp.blogspot.com/-qPtq_n0ithw/YPbCOjZsFyI/AAAAAAAAAhM/JfQ6R2yIcgYMlTZ9GhPaOgFEZ1rm0O0lACLcBGAsYHQ/s600/git-cli-commands.jpg
title: git fix case-sensitive conflict
type: post
updated: 2023-09-02T21:28:04.000Z
wordcount: 427

---

## How do I commit case-sensitive filename changes in Git?

I renamed some files to name.jpg, like Name.jpg.
Git doesn't recognize these changes, so I had to delete the file and re-upload it.
Is there a way for Git to be case sensitive when checking for filename changes?
I haven't changed anything in the file itself.  

## Solutions
Here some solutions to fix git case-sensitive filenames.

### The correct case for Git filenames for *whole repo*:  

```bash
git rm -r --cached .
git add --all .

git status ##Review that **only** changes staged are renames

## Commit your changes after reviewing:
git commit -a -m "Fixing file name casing"
git push origin main
```

### Change the Git system global or local configuration to make file and folder names case sensitive 
global configuration
```bash
git config --global core.ignorecase false
```

local configuration
```bash
git config core.ignorecase false
```