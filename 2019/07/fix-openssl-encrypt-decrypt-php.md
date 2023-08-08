---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://www.webmanajemen.com/assets/img/phpjs.svg?.png
date: 2019-07-31T16:03:00.001+07:00
description: "Warning openssl_decrypt: IV passed is only 12 bytes long, cipher
  expects an IV of precisely 16 bytes, padding with \\0 in PATH_FILE on"
excerpt: "Warning openssl_decrypt: IV passed is only 12 bytes long, cipher
  expects an IV of precisely 16 bytes, padding with \\0 in PATH_FILE on"
id: bdf2c613-25f8-4888-8be6-7c68b043a7a1
lang: en
photos:
  - https://res.cloudinary.com/dimaslanjaka/image/fetch/https://www.webmanajemen.com/assets/img/phpjs.svg?.png
subtitle: "Warning openssl_decrypt: IV passed is only 12 bytes long, cipher
  expects an IV of precisely 16 bytes, padding with \\0 in PATH_FILE on"
tags:
  - php
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://www.webmanajemen.com/assets/img/phpjs.svg?.png
title: Fix openssl encrypt decrypt [PHP]
type: post
updated: 2023-08-08T14:45:30+07:00
uuid: 9251b369-4ea6-4888-8b29-44aa20aa58aa
webtitle: PHP
wordcount: 322
---

<div dir="ltr">
<pre>Warning: openssl_decrypt(): IV passed is only 12 bytes long, cipher expects an IV of precisely 16 bytes, padding with \0 in PATH_FILE on line LINE_N<br />openssl_encrypt(): IV passed is only 12 bytes long, cipher expects an IV of precisely 16 bytes, padding with \0 in PATH_FILE on line LINE_N</pre>
<h4>How to fix the errors</h4>
<br />
<ol>
<li>Ensure your <strong>SALT</strong>&nbsp;only using <strong>NUMBER ONLY</strong>&nbsp;and <em>Minimum length of </em><strong>SALT</strong>&nbsp;is <strong>12</strong>.</li>
<li>Ensure your PHP version is 7 or above</li>
</ol>
<blockquote>That's how to fix openssl_encrypt() and openssl_decrypt() errors</blockquote>
</div>
<p><img src="https://res.cloudinary.com/dimaslanjaka/image/fetch/https://www.webmanajemen.com/assets/img/phpjs.svg?.png" alt="" /></p>
