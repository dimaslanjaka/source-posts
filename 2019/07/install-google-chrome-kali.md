---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2019-07-21T13:26:00.001Z
description: open terminal, type64 bitwget
  https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb32
  bit wget
lang: en
tags:
  - linux/unix
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://www.pngarts.com/files/3/Linux-PNG-Image-Background.png
title: Install google chrome kali linux/debian/etc
type: post
updated: 2023-08-08T07:45:30.000Z
wordcount: 161

---

<div dir="ltr" style="text-align: left;" trbidi="on">open terminal, type:<br>&nbsp;64 bit<br><pre>wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb<br></pre>&nbsp;32 bit <br><pre>wget https://dl.google.com/linux/direct/google-chrome-stable_current_i386.deb<br></pre>wait until download complete, the type:  <br>&nbsp;64 bit<br><pre>dpkg -i google-chrome-stable_current_amd64.deb<br></pre>&nbsp;32 bit <br><pre>dpkg -i google-chrome-stable_current_i386.deb<br></pre> then, fix chrome installation and depencies: <pre><br>apt update -y &amp;&amp; apt upgrade -y &amp;&amp; apt --fix-broken install<br></pre> done, find chrome in app lists, now available. good luck </div><img src="https://res.cloudinary.com/dimaslanjaka/image/fetch/https://www.pngarts.com/files/3/Linux-PNG-Image-Background.png">