---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
date: 2020-10-25T23:45:00.005+07:00
description: command line Fix add file to gitignore not filtered
lang: en
photos:
  - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
tags:
  - github
  - tips & tricks
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: Fix add file to gitignore not filtered
type: post
updated: 2023-08-08T14:45:12+07:00
webtitle: CMD
wordcount: 37
---

<pre><br>git rm -r --cached .<br>git add .<br>git commit -m 'clear git cache'<br>git push<br></pre>