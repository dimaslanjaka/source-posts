---
author: Dimas Lanjaka
categories:
  - github
comments: true
date: 2022-06-07T00:00:00.000Z
description: Git GC fatal bad object refs/remotes/origin/HEAD error simple fix
lang: en
tags:
  - cmd
  - git
thumbnail: https://global-uploads.webflow.com/6100d0111a4ed76bc1b9fd54/62a1ac70484ab90ae870152b_github
  4.png
title: How to handle git gc fatal bad object refs/remotes/origin/HEAD error?
type: post
updated: 2023-08-08T07:44:18.000Z
webtitle: GitHub
wordcount: 205

---

## Example fix from `master` as old branch to `main` as new branch
<!-- https://stackoverflow.com/questions/37145151/how-to-handle-git-gc-fatal-bad-object-refs-remotes-origin-head-error -->
<!-- I hit this error because the default branch was changed from `master` to `main`.
I used a mix of info given by a few of the answers above to resolve it: -->

```
cat .git/refs/remotes/origin/HEAD

```

Returned:

```
ref: refs/remotes/origin/master

```

To fix it, run:

```
git symbolic-ref refs/remotes/origin/HEAD refs/remotes/origin/main

```

I ran this again to double-check:

```
cat .git/refs/remotes/origin/HEAD

```

Which returned:

```
ref: refs/remotes/origin/main

```

Then `git gc` and `git prune` worked just fine.

* * * * *

To see what happens I also tried:

```
git remote set-head origin --auto

```

Which returned:

```
origin/HEAD set to main

```

And it really solves the problem by identifying the ref automatically.