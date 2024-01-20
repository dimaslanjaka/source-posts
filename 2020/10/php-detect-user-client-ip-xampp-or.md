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
title: "[PHP] Detect User Client IP XAMPP or Localhost Machine Supported"
type: post
updated: 2023-09-02T21:28:07.000Z
wordcount: 638

---

## Snippet get real visitor/user ip (support localhost XAMPP)

<pre><br>/**<br> * Detect is localhost<br> *<br> * @return boolean<br> */<br>function isLocalHost()<br>{<br>  $whitelist = [<br>    '127.0.0.1',<br>    '::1',<br>  ];<br><br>  return in_array($_SERVER['REMOTE_ADDR'], $whitelist);<br>}<br><br>/**<br> * Get client ip, when getenv supported (maybe cli)<br> *<br> * @return string<br> */<br>function get_client_ip()<br>{<br>  $ipaddress = '';<br><br>  if (isLocalHost()) {<br>    $ipaddress = getLocalIp();<br>  } else {<br>    if (getenv('HTTP_CLIENT_IP')) {<br>      $ipaddress = getenv('HTTP_CLIENT_IP');<br>    } elseif (getenv('HTTP_X_FORWARDED_FOR')) {<br>      $ipaddress = getenv('HTTP_X_FORWARDED_FOR');<br>    } elseif (getenv('HTTP_X_FORWARDED')) {<br>      $ipaddress = getenv('HTTP_X_FORWARDED');<br>    } elseif (getenv('HTTP_FORWARDED_FOR')) {<br>      $ipaddress = getenv('HTTP_FORWARDED_FOR');<br>    } elseif (getenv('HTTP_FORWARDED')) {<br>      $ipaddress = getenv('HTTP_FORWARDED');<br>    } elseif (getenv('REMOTE_ADDR')) {<br>      $ipaddress = $ipaddress = getenv('REMOTE_ADDR');<br>    } else {<br>      /**<br>       * Return to method 2<br>       */<br>      $ipaddress = get_client_ip2();<br>    }<br>  }<br><br>  return $ipaddress;<br>}<br><br>/**<br> * Get client ip, when running on webserver<br> *<br> * @return void<br> */<br>function get_client_ip2()<br>{<br>  $ipaddress = '';<br>  if (isLocalHost()) {<br>    $ipaddress = getLocalIp();<br>  } else {<br>    if (isset($_SERVER['HTTP_CLIENT_IP'])) {<br>      $ipaddress = $_SERVER['HTTP_CLIENT_IP'];<br>    } elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {<br>      $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];<br>    } elseif (isset($_SERVER['HTTP_X_FORWARDED'])) {<br>      $ipaddress = $_SERVER['HTTP_X_FORWARDED'];<br>    } elseif (isset($_SERVER['HTTP_FORWARDED_FOR'])) {<br>      $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];<br>    } elseif (isset($_SERVER['HTTP_FORWARDED'])) {<br>      $ipaddress = $_SERVER['HTTP_FORWARDED'];<br>    } elseif (isset($_SERVER['REMOTE_ADDR'])) {<br>      $ipaddress = $_SERVER['REMOTE_ADDR'];<br>    } else {<br>      $ipaddress = 'UNKNOWN';<br>    }<br>  }<br><br>  return $ipaddress;<br>}<br><br>function getLocalIp()<br>{<br>  if (defined('PHP_MAJOR_VERSION') &amp;&amp; PHP_MAJOR_VERSION &gt;= 5) {<br>    $localIP = gethostbyname(gethostname());<br>  } else {<br>    $localIP = gethostbyname(php_uname('n'));<br>  }<br><br>  return $localIP;<br>}<br></pre>

## Usage
```php
<?php
var_dump(get_client_ip());
```