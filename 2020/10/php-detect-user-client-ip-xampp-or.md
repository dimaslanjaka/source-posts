---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2020-10-16T21:26:00.004Z
description: PHP Snippet get real visitor/user ip support localhost XAMPP
lang: en
tags:
  - script
  - php
  - tips & tricks
keywords:
  - ip
thumbnail: https://i.ytimg.com/vi/amIclgSsi7Y/maxresdefault.jpg
title: "[PHP] Detect User Client IP XAMPP or Localhost"
type: post
updated: 2024-02-20T12:38:36+07:00
wordcount: 638
---

## Snippet get real visitor/user ip (support localhost XAMPP)

```php
/**
 * Detect is localhost
 *
 * @return boolean
 */
function isLocalHost()
{
  $whitelist = [
    '127.0.0.1',
    '::1',
  ];

  return in_array($_SERVER['REMOTE_ADDR'], $whitelist);
}

/**
 * Get client ip, when getenv supported (maybe cli)
 *
 * @return string
 */
function get_client_ip()
{
  $ipaddress = '';

  if (isLocalHost()) {
    $ipaddress = getLocalIp();
  } else {
    if (getenv('HTTP_CLIENT_IP')) {
      $ipaddress = getenv('HTTP_CLIENT_IP');
    } elseif (getenv('HTTP_X_FORWARDED_FOR')) {
      $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    } elseif (getenv('HTTP_X_FORWARDED')) {
      $ipaddress = getenv('HTTP_X_FORWARDED');
    } elseif (getenv('HTTP_FORWARDED_FOR')) {
      $ipaddress = getenv('HTTP_FORWARDED_FOR');
    } elseif (getenv('HTTP_FORWARDED')) {
      $ipaddress = getenv('HTTP_FORWARDED');
    } elseif (getenv('REMOTE_ADDR')) {
      $ipaddress = $ipaddress = getenv('REMOTE_ADDR');
    } else {
      /**
       * Return to method 2
       */
      $ipaddress = get_client_ip2();
    }
  }

  return $ipaddress;
}

/**
 * Get client ip, when running on webserver
 *
 * @return void
 */
function get_client_ip2()
{
  $ipaddress = '';
  if (isLocalHost()) {
    $ipaddress = getLocalIp();
  } else {
    if (isset($_SERVER['HTTP_CLIENT_IP'])) {
      $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
      $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } elseif (isset($_SERVER['HTTP_X_FORWARDED'])) {
      $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    } elseif (isset($_SERVER['HTTP_FORWARDED_FOR'])) {
      $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    } elseif (isset($_SERVER['HTTP_FORWARDED'])) {
      $ipaddress = $_SERVER['HTTP_FORWARDED'];
    } elseif (isset($_SERVER['REMOTE_ADDR'])) {
      $ipaddress = $_SERVER['REMOTE_ADDR'];
    } else {
      $ipaddress = 'UNKNOWN';
    }
  }

  return $ipaddress;
}

function getLocalIp()
{
  if (defined('PHP_MAJOR_VERSION') && PHP_MAJOR_VERSION >= 5) {
    $localIP = gethostbyname(gethostname());
  } else {
    $localIP = gethostbyname(php_uname('n'));
  }

  return $localIP;
}
```

## Usage

```php
<?php
var_dump(get_client_ip());
```