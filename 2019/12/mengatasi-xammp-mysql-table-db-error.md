---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
date: 2019-12-11T23:19:00.001+07:00
description: "Mengatasi XAMMP mysql table db error must be repaired WINDOWS
  7,8,10 Buka CMD Ketik Command berikut satu per satu:"
excerpt: "Mengatasi XAMMP mysql table db error must be repaired WINDOWS 7,8,10
  Buka CMD Ketik Command berikut satu per satu:"
id: 0dd242bd-b21c-4888-8fb6-a331d32526ba
lang: en
photos:
  - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
subtitle: "Mengatasi XAMMP mysql table db error must be repaired WINDOWS 7,8,10
  Buka CMD Ketik Command berikut satu per satu:"
tags:
  - share
  - tips & tricks
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: Mengatasi XAMMP mysql table db error must be repaired
type: post
updated: 2019-12-11T23:19:57+07:00
uuid: 4f2bc3a9-4c31-4888-8ef0-257c8db89e1f
wordcount: 149
---

<div dir="ltr" style="text-align: left;" trbidi="on">  Mengatasi XAMMP mysql table db error must be repaired (WINDOWS 7,8,10)   <br>  <ol>    <li>Buka CMD</li>    <li>Ketik Command berikut (satu per satu):</li>    <pre><br>      cd c:\ [enter]<br>      cd c:\xammp\mysql\bin [enter]<br>      .\mysqlcheck -u root -p --auto-repair --check --all-databases [enter]<br>    </pre>    <li>Selesai</li>  </ol></div>