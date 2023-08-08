---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - programming
  - php
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
date: 2020-10-17T04:26:00.004+07:00
description: PHP Snippet get real visitor/user ip support localhost XAMPP
excerpt: PHP Snippet get real visitor/user ip support localhost XAMPP
id: 7f3691ba-3295-4888-8e28-4096e2f43fc5
lang: en
photos:
  - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
subtitle: PHP Snippet get real visitor/user ip support localhost XAMPP
tags:
  - script
  - php
  - tips & tricks
  - ip
thumbnail: https://i.ytimg.com/vi/amIclgSsi7Y/maxresdefault.jpg
title: "[PHP] Detect User Client IP XAMPP or Localhost Machine Supported"
type: post
updated: 2022-12-20T08:02:56+07:00
uuid: 34312352-b8b1-4888-8e50-1c29c99b2e5d
wordcount: 638
---

## Snippet get real visitor/user ip (support localhost XAMPP)

<pre><br>/**<br> * Detect is localhost<br> *<br> * @return boolean<br> */<br>function isLocalHost()<br>{<br>  $whitelist = [<br>    '127.0.0.1',<br>    '::1',<br>  ];<br><br>  return in_array($_SERVER['REMOTE_ADDR'], $whitelist);<br>}<br><br>/**<br> * Get client ip, when getenv supported (maybe cli)<br> *<br> * @return string<br> */<br>function get_client_ip()<br>{<br>  $ipaddress = '';<br><br>  if (isLocalHost()) {<br>    $ipaddress = getLocalIp();<br>  } else {<br>    if (getenv('HTTP_CLIENT_IP')) {<br>      $ipaddress = getenv('HTTP_CLIENT_IP');<br>    } elseif (getenv('HTTP_X_FORWARDED_FOR')) {<br>      $ipaddress = getenv('HTTP_X_FORWARDED_FOR');<br>    } elseif (getenv('HTTP_X_FORWARDED')) {<br>      $ipaddress = getenv('HTTP_X_FORWARDED');<br>    } elseif (getenv('HTTP_FORWARDED_FOR')) {<br>      $ipaddress = getenv('HTTP_FORWARDED_FOR');<br>    } elseif (getenv('HTTP_FORWARDED')) {<br>      $ipaddress = getenv('HTTP_FORWARDED');<br>    } elseif (getenv('REMOTE_ADDR')) {<br>      $ipaddress = $ipaddress = getenv('REMOTE_ADDR');<br>    } else {<br>      /**<br>       * Return to method 2<br>       */<br>      $ipaddress = get_client_ip2();<br>    }<br>  }<br><br>  return $ipaddress;<br>}<br><br>/**<br> * Get client ip, when running on webserver<br> *<br> * @return void<br> */<br>function get_client_ip2()<br>{<br>  $ipaddress = '';<br>  if (isLocalHost()) {<br>    $ipaddress = getLocalIp();<br>  } else {<br>    if (isset($_SERVER['HTTP_CLIENT_IP'])) {<br>      $ipaddress = $_SERVER['HTTP_CLIENT_IP'];<br>    } elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {<br>      $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];<br>    } elseif (isset($_SERVER['HTTP_X_FORWARDED'])) {<br>      $ipaddress = $_SERVER['HTTP_X_FORWARDED'];<br>    } elseif (isset($_SERVER['HTTP_FORWARDED_FOR'])) {<br>      $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];<br>    } elseif (isset($_SERVER['HTTP_FORWARDED'])) {<br>      $ipaddress = $_SERVER['HTTP_FORWARDED'];<br>    } elseif (isset($_SERVER['REMOTE_ADDR'])) {<br>      $ipaddress = $_SERVER['REMOTE_ADDR'];<br>    } else {<br>      $ipaddress = 'UNKNOWN';<br>    }<br>  }<br><br>  return $ipaddress;<br>}<br><br>function getLocalIp()<br>{<br>  if (defined('PHP_MAJOR_VERSION') &amp;&amp; PHP_MAJOR_VERSION &gt;= 5) {<br>    $localIP = gethostbyname(gethostname());<br>  } else {<br>    $localIP = gethostbyname(php_uname('n'));<br>  }<br><br>  return $localIP;<br>}<br></pre>

## Usage
```php
<?php
var_dump(get_client_ip());
```
