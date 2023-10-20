---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2020-10-25T16:45:00.005Z
description: command line Fix add file to gitignore not filtered
lang: en
tags:
  - github
  - tips & tricks
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: Fix add file to gitignore not filtered
type: post
updated: 2023-08-08T07:45:12.000Z
webtitle: CMD
wordcount: 37

---

<pre><br>git rm -r --cached .<br>git add .<br>git commit -m 'clear git cache'<br>git push<br></pre>