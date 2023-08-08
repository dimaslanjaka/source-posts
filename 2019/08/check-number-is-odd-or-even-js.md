---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://i.ytimg.com/vi/jFazrvLodrA/maxresdefault.jpg
date: 2019-08-02T19:10:00.000+07:00
description: "Check number is Odd or Even [JS] var oddoreven = function n =
  false, type = odd var time = n ? new Date.getDay : Numbern; if
  /^-0,1\\d/.testtime alertarguments is not number, please remove quote; return;
  hasil = time 2; return hasil == type == odd g"
excerpt: "Check number is Odd or Even [JS] var oddoreven = function n = false,
  type = odd var time = n ? new Date.getDay : Numbern; if /^-0,1\\d/.testtime
  alertarguments is not number, please remove quote; return; hasil = time 2;
  return hasil == type == odd g"
id: d41d8cd9-f00b-4888-804e-800998ecf842
lang: en
photos:
  - https://res.cloudinary.com/dimaslanjaka/image/fetch/https://i.ytimg.com/vi/jFazrvLodrA/maxresdefault.jpg
subtitle: "Check number is Odd or Even [JS] var oddoreven = function n = false,
  type = odd var time = n ? new Date.getDay : Numbern; if /^-0,1\\d/.testtime
  alertarguments is not number, please remove quote; return; hasil = time 2;
  return hasil == type == odd g"
tags:
  - js
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://i.ytimg.com/vi/jFazrvLodrA/maxresdefault.jpg
title: Check number is Odd or Even [JS]
type: post
updated: 2023-08-08T14:45:29+07:00
uuid: d2b9bcf1-4eb6-4888-8a40-1a164fb36b67
wordcount: 204
---

<pre><br>var oddoreven = function (n = false, type = 'odd') {<br>  var time = !n ? new Date().getDay() : Number(n);<br>  <br>  if (!/^-{0,1}\d+$/.test(time)){<br>    alert('arguments is not number, please remove quote');<br>    return;<br>  }<br>  hasil = time % 2;<br>  return hasil == (type == ('odd' || 'ganjil') ? 1 : 0);<br>}<br></pre><b>Test</b><pre><br>document.write('isOdd / Ganjil : ' + oddoreven(false, 'odd'));<br>document.write('&lt;br/&gt;');<br>document.write('isEven / Genap : '+oddoreven(false, 'even'));<br></pre><b>Output</b><pre><br>isOdd / Ganjil : true<br>isEven / Genap : false<br></pre> <div class="separator" style="clear: both; text-align: center;"><a href="https://res.cloudinary.com/dimaslanjaka/image/fetch/https://i.ytimg.com/vi/jFazrvLodrA/maxresdefault.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;" rel="noopener noreferer nofollow"><img border="0" src="https://res.cloudinary.com/dimaslanjaka/image/fetch/https://i.ytimg.com/vi/jFazrvLodrA/maxresdefault.jpg" data-original-width="800" data-original-height="450"></a></div>