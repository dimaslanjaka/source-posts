---
author:
  nick: Dimas Lanjaka
  link: https://www.blogger.com/profile/07981649157148639830
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2021-04-27T12:26:00.002Z
description: "Uncaught Error: Call to undefined function str_starts_with Fix Solutions. Fix Uncaught Error Call to undefined function str_starts_with and str_ends_with"
lang: en
tags:
  - script
  - php
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://kuliahitblog.files.wordpress.com/2019/08/1dbdb-fatal2berror2buncaught2berror2bcall2bto2bundefined2bfunction2bmysql_connect25282529.png
title: Fix Undefined function str_starts_with and str_ends_with
type: post
updated: 2024-02-20T13:07:05+07:00
webtitle: PHP
wordcount: 722
---

## Uncaught Error: Call to undefined function str_starts_with() Fix Solutions

```php
if (!function_exists('str_starts_with')) {
  function str_starts_with($haystack, $needle, $case = true)
  {
    if ($case) {
      return strpos($haystack, $needle, 0) === 0;
    }
    return stripos($haystack, $needle, 0) === 0;
  }
}
```

### Example with the empty string

```php
<?php
if (str_starts_with('abc', '')) {
    echo "All strings start with the empty string"; // <-- this will show as output
}
?>
```

### Example case-sensitivity

- **Case Sensitive** is a case where uppercase and lowercase letters are interpreted differently.
- **Case Insensitive** is a case where uppercase and lowercase letters are interpreted the same.

```php
<?php
$string = 'The lazy fox jumped over the fence';

if (str_starts_with($string, 'The')) {
    echo "The string starts with 'The'\n"; // <-- this will show as output
}

if (str_starts_with($string, 'the')) {
    echo 'The string starts with "the"'; // this ignored because insensitive
} else {
    echo '"the" was not found because the case does not match'; // <-- this will show as output
}

?>
```

## Uncaught Error: Call to undefined function str_ends_with() Fix Solutions

```php
if (!function_exists('str_ends_with')) {
  function str_ends_with($haystack, $needle, $case = true)
  {
    $expectedPosition = strlen($haystack) - strlen($needle);
    if ($case) {
      return strrpos($haystack, $needle, 0) === $expectedPosition;
    }
    return strripos($haystack, $needle, 0) === $expectedPosition;
  }
}
```

![PHP Thumbnail](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://kuliahitblog.files.wordpress.com/2019/08/1dbdb-fatal2berror2buncaught2berror2bcall2bto2bundefined2bfunction2bmysql_connect25282529.png)