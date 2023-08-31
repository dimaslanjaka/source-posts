---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
  - php
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
date: 2019-07-29T06:42:00.000+07:00
description: Put execution arg into _GET PHP CLI
lang: en
photos:
  - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
tags:
  - php
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: Put execution arg into _GET PHP CLI
type: post
updated: 2023-09-01T06:01:50+07:00
wordcount: 222
---

**PHP CLI**
```php
<?php
if ($argv) {
    foreach ($argv as $k=>$v)    {
        if ($k==0) continue;
        $it = explode("=", $argv[$i]);
        if (isset($it[1])) $_GET[$it[0]] = $it[1];
    }
}
?>
```
