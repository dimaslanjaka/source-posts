---
author:
  nick: Dimas Lanjaka 2
  link: https://www.blogger.com/profile/08197822797622284515
  email: noreply@blogger.com
categories:
  - programming
comments: true
cover: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://mazadie.files.wordpress.com/2012/03/regex.jpg
date: 2018-04-12T19:43:00.000+07:00
description: img
  src=https://res.cloudinary.com/dimaslanjaka/image/fetch/https://mazadie.files.wordpress.com/2012/03/regex.jpg
  /><ul><li>Extract
lang: en
photos:
  - https://res.cloudinary.com/dimaslanjaka/image/fetch/https://mazadie.files.wordpress.com/2012/03/regex.jpg
tags:
  - php
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://mazadie.files.wordpress.com/2012/03/regex.jpg
title: PHP Regex Extract Proxy From String
type: post
updated: 2023-10-08T10:49:53+07:00
---

![](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://mazadie.files.wordpress.com/2012/03/regex.jpg)

*   Extract IP:PORT Using PHP
*   Extract IP:PORT Using PHP Regex
*   Regular Expression Extract Proxy

```php
$re = '/([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}):?([0-9]{1,6})?/m';
$str = '139.59.68.234:8080
213.136.87.217:80
66.70.255.195:3128
66.70.255.195:3128
64.90.244.115:8080
159.65.156.208:80
66.70.147.196:3128
66.70.147.197:3128
54.39.23.19:3128
139.59.224.50:80
142.44.137.222:80
179.107.51.203:80';

preg_match_all($re, $str, $matches, PREG_SET_ORDER, 0);

// Print the entire match result
var_dump($matches);
```