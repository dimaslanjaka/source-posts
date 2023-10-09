---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
date: 2020-10-26T23:39:00.001+07:00
description: Tutorial
lang: en
photos:
  - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
tags:
  - github
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: Git force redownload from remote repository
type: post
updated: 2023-10-08T16:07:00+07:00
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