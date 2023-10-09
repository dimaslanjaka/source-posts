---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
description: Regexp Pattern Untuk mencocokkan semua jenis URL
date: 2018-11-23T22:25:00.000+07:00
lang: id
tags:
  - script
  - javascript
  - php
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://www.webubi.com/wp-content/uploads/2017/03/regex.png
title: "[JS][PHP] Regexp for matching URL Pattern"
type: post
updated: 2023-10-08T13:06:11+07:00
---

![regexp](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://www.webubi.com/wp-content/uploads/2017/03/regex.png) Regexp Pattern Untuk mencocokkan semua jenis URL, kode berikut seharusnya berfungsi:

```php
<?php
    $regex = "((https?|ftp)://)?"; // SCHEME
    $regex .= "([a-z0-9+!*(),;?&=$_.-]+(:[a-z0-9+!*(),;?&=$_.-]+)?@)?"; // User and Pass
    $regex .= "([a-z0-9\-\.]*)\.(([a-z]{2,4})|([0-9]{1,3}\.([0-9]{1,3})\.([0-9]{1,3})))"; // Host or IP
    $regex .= "(:[0-9]{2,5})?"; // Port
    $regex .= "(/([a-z0-9+$_%-]\.?)+)*/?"; // Path
    $regex .= "(\?[a-z+&\$_.-][a-z0-9;:@&%=+/$_.-]*)?"; // GET Query
    $regex .= "(#[a-z_.-][a-z0-9+$%_.-]*)?"; // Anchor
?>
```

#### Example: correctly way for matching URL

```php
<?php
   if(preg_match("~^$regex$~i", 'www.example.com/etcetc', $m))
      var_dump($m);

   if(preg_match("~^$regex$~i", 'http://www.example.com/etcetc', $m))
      var_dump($m);
?>
```

> Pattern diatas bisa digunakan di javascript. Bedanya dengan diatas hanya dari segi variablenya saja. Bila di PHP variable dituliskan dengan awalan ($) maka di javascript cukup diganti (var) atau (let) atau (const)