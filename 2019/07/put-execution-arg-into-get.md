---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2019-07-28T23:42:00.000Z
description: Put execution arg into _GET PHP CLI
lang: en
tags:
  - php
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: Put execution arg into _GET PHP CLI
type: post
updated: 2023-09-02T21:28:22.000Z
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