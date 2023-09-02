---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
cover: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://img.icons8.com/metro/1600/php.png
date: 2018-12-25T00:58:00.000+07:00
description: PHP = 5.4.0 , PHP 7
lang: en
photos:
  - https://res.cloudinary.com/dimaslanjaka/image/fetch/https://img.icons8.com/metro/1600/php.png
tags:
  - php
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://img.icons8.com/metro/1600/php.png
title: PHP check session has started
type: post
updated: 2023-09-03T06:13:30+07:00
wordcount: 116
---

<img src="https://res.cloudinary.com/dimaslanjaka/image/fetch/https://img.icons8.com/metro/1600/php.png" title="php" alt="php"><p>    <strong>PHP &gt;= 5.4.0 , PHP 7</strong></p><pre><code>if (session_status() == PHP_SESSION_NONE) {<br>    session_start();<br>}</code></pre><p>    Reference:     <a href="//www.php.net/manual/en/function.session-status.php" rel="nofollow noreferrer">        http://www.php.net/manual/en/function.session-status.php     </a></p><p>    For versions of <strong>PHP &lt; 5.4.0</strong></p><pre><code>if(session_id() == '') {<br>    session_start();<br>}</code></pre> <blockquote>PHP Check if session has started or not, then session_start()</blockquote>