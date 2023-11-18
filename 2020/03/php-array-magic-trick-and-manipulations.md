---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2020-03-23T16:21:00.003Z
description: manipulating multidimensional array using arraymap/ Ilterate
  multidimensional array simplicity @desc modify and manipulate or populate
lang: en
tags:
  - php
  - tips & tricks
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: PHP array magic trick and manipulations
type: post
updated: 2023-09-02T23:13:11.000Z
---

1.  manipulating multidimensional array using `array_map`


```php
/**
  * Ilterate multidimensional array simplicity
  * @desc modify and manipulate or populate multidimensional array with simple tricks
  * @param array $arr
  * @param function $callback
  * @return Array
  **/
function Map($arr, $callback)
{
  if (!is_callable($callback)) {
    throw new Exception("Callback must be function", 1);
  }

  return array_map(function ($key, $val) use ($callback) {
    return call_user_func($callback, $key, $val);
  }, array_keys($arr), $arr);
}
```