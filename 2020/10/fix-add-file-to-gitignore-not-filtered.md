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
excerpt: command line Fix add file to gitignore not filtered
id: 035e6fdc-c5e2-4888-8c1b-7ead1943d76d
lang: en
photos:
  - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
subtitle: command line Fix add file to gitignore not filtered
tags:
  - github
  - tips & tricks
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: Fix add file to gitignore not filtered
type: post
updated: 2023-08-08T14:45:12+07:00
uuid: d0ce851a-9de9-4888-87cd-931b67b961b3
webtitle: CMD
wordcount: 37
---

<pre><br>git rm -r --cached .<br>git add .<br>git commit -m 'clear git cache'<br>git push<br></pre>