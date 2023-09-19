---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
cover: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://static.cdn-cdpl.com/700x350/4817b4477491b436a2a3cb4db5f3943b/PHP_Logo-image700x350-crop-image700x350-crop-image(700x350-crop).png
date: 2019-07-30T06:48:00.000+07:00
description: Cara Membuat argumen PHP CLI dengan --=
lang: en
photos:
  - https://res.cloudinary.com/dimaslanjaka/image/fetch/https://static.cdn-cdpl.com/700x350/4817b4477491b436a2a3cb4db5f3943b/PHP_Logo-image700x350-crop-image700x350-crop-image(700x350-crop).png
tags:
  - php
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://static.cdn-cdpl.com/700x350/4817b4477491b436a2a3cb4db5f3943b/PHP_Logo-image700x350-crop-image700x350-crop-image(700x350-crop).png
title: Membuat PHP argumen dengan =
type: post
updated: 2023-09-03T06:13:25+07:00
wordcount: 171
---

<p>Cara Membuat argumen PHP CLI dengan '<b>=</b>' '<b>--=</b>' </p><b>Buat file php</b><pre><br>&lt;?php<br>function arguments($argv) {<br>    $_ARG = array();<br>    foreach ($argv as $arg) {<br>      if (ereg('--([^=]+)=(.*)',$arg,$reg)) {<br>        $_ARG[$reg[1]] = $reg[2];<br>      } elseif(ereg('-([a-zA-Z0-9])',$arg,$reg)) {<br>            $_ARG[$reg[1]] = 'true';<br>        }<br>  <br>    }<br>  return $_ARG;<br>}<br>?&gt;<br></pre><b>Contoh penggunaan</b><pre><br>php myscript.php --user=nobody --password=secret -p --access="host=127.0.0.1 port=456"<br></pre><b>Output</b><pre><br>Array<br>(<br>    [user] =&gt; nobody<br>    [password] =&gt; secret<br>    [p] =&gt; true<br>    [access] =&gt; host=127.0.0.1 port=456<br>)<br></pre> <div class="separator" style="clear: both; text-align: center;"><a href="https://res.cloudinary.com/dimaslanjaka/image/fetch/https://static.cdn-cdpl.com/700x350/4817b4477491b436a2a3cb4db5f3943b/PHP_Logo-image700x350-crop-image700x350-crop-image(700x350-crop).png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;" rel="noopener noreferer nofollow"><img border="0" src="https://res.cloudinary.com/dimaslanjaka/image/fetch/https://static.cdn-cdpl.com/700x350/4817b4477491b436a2a3cb4db5f3943b/PHP_Logo-image700x350-crop-image700x350-crop-image(700x350-crop).png" data-original-width="700" data-original-height="350"></a></div>