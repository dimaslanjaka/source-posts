---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2019-02-02T14:59:00.000Z
description: pre><br>IFS=\n<br> for f in find . -type f -name <br> do <br /> mv
  f f/\.\/ /\.\/<br> done<br></pre><div
lang: en
tags:
  - linux/unix
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: "[Bash] Menghapus spasi pertama pada file"
type: post
updated: 2023-08-08T07:45:32.000Z
wordcount: 49

---

<pre><br>IFS=$'\n'<br> for f in $(find . -type f -name ' *')<br> do <br>     mv $f ${f/\.\/ /\.\/}<br> done<br></pre>