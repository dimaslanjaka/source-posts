---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2020-05-29T17:03:00.002Z
description: Script To Clear Cache Linux
lang: en
tags:
  - bash
  - script
  - tips & tricks
  - linux/unix
thumbnail: https://res.cloudinary.com/practicaldev/image/fetch/https://www.wissenschaft.com.ng/wp-content/uploads/2021/02/clear_ram_buffer_linux.jpg
title: Linux Clear Cache
type: post
updated: 2023-09-02T21:28:07.000Z
webtitle: Script
wordcount: 343

---

```bash
#!/bin/bash
#clean page cache
#sync
#echo 1 >/proc/sys/vm/drop_caches
#clean dentries and inodes
#sync
#echo 2 >/proc/sys/vm/drop_caches
#clean page cache and dentries inodes, but it is not recommended in production instead use "echo 1"
#sync
#echo 3 >/proc/sys/vm/drop_caches

##################
# begin refresh script
##################

sync
if [ $(dpkg-query -W -f='${Status}' polipo 2>/dev/null | grep -c "ok installed") -eq 0 ]; then
  apt-get install polipo -y
fi
polipo -x
echo 3 >/proc/sys/vm/drop_caches
swapoff -a && swapon -a
printf '\n%s\n\n' 'Ram-cache and Swap Cleared'
/opt/lampp/xampp restart
free -h
```


this script used for better performance your linux vps.

incoming terms:
* fix apache slow response
* fix xampp web server slow
* fix overload ram vps
* fix mysqld overheat
* fix java machine overheat ram