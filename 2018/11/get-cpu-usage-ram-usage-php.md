---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
date: 2018-11-06T03:08:00.000+07:00
description: "if you mean how much ramcpu php is using then you can do the
  following using plain php without using any package: this returns the"
excerpt: "if you mean how much ramcpu php is using then you can do the following
  using plain php without using any package: this returns the"
lang: en
photos:
  - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
subtitle: "if you mean how much ramcpu php is using then you can do the
  following using plain php without using any package: this returns the"
tags:
  - script
  - php
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: Get CPU usage / RAM usage [PHP]
type: post
updated: 2023-08-08T14:45:37+07:00
wordcount: 291
---

<p>    if you mean how much ram/cpu php is using then you can do the following     using plain php without using any package: this returns the ram usage: </p><pre><code>function get_server_memory_usage(){<br><br>$free = shell_exec('free');<br>$free = (string)trim($free);<br>$free_arr = explode("\n", $free);<br>$mem = explode(" ", $free_arr[1]);<br>$mem = array_filter($mem);<br>$mem = array_merge($mem);<br>$memory_usage = $mem[2]/$mem[1]*100;<br>return $memory_usage;<br>}</code></pre><p>    cpu usage: </p><pre><code>function get_server_cpu_usage(){<br>$load = sys_getloadavg();<br>return $load[0];<br>}</code></pre><p>Native Conditions:</p><pre><code>$load = sys_getloadavg();<br>$limit =15; //percent cpu<br>if ($load[0] &gt;= $limit) {<br>  die("Oops Server Busy, this message was automate from Dimas Lanjaka For telling users, there too many processed.");<br>}</code></pre>