---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2020-10-26T16:39:00.001Z
description: Tutorial
lang: en
tags:
  - github
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: Git force redownload from remote repository
type: post
updated: 2023-10-08T09:07:00.000Z

---

Tutorial

```bash
git fetch --all
git reset --hard origin/branch_name
```

Example from master

```bash
git fetch --all
git reset --hard origin/master
```