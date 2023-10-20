---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2019-07-31T09:03:00.001Z
description: "Warning openssl_decrypt: IV passed is only 12 bytes long, cipher
  expects an IV of precisely 16 bytes, padding with \\0 in PATH_FILE on"
lang: en
tags:
  - php
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://www.webmanajemen.com/assets/img/phpjs.svg?.png
title: Fix openssl encrypt decrypt [PHP]
type: post
updated: 2023-08-31T23:11:44.000Z
webtitle: PHP
wordcount: 322

---

<pre>Warning: openssl_decrypt(): IV passed is only 12 bytes long, cipher expects an IV of precisely 16 bytes, padding with \0 in PATH_FILE on line LINE_N<br>openssl_encrypt(): IV passed is only 12 bytes long, cipher expects an IV of precisely 16 bytes, padding with \0 in PATH_FILE on line LINE_N</pre>

## How to fix the errors

1.  Ensure your **SALT** only using **NUMBER ONLY** and _Minimum length of_ **SALT** is **12**.
2.  Ensure your PHP version is 7 or above

> That's how to fix openssl\_encrypt() and openssl\_decrypt() errors

![](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://www.webmanajemen.com/assets/img/phpjs.svg?.png)