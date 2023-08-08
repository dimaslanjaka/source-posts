---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - programming
  - bash
comments: true
cover: https://res.cloudinary.com/practicaldev/image/fetch/https://www.wissenschaft.com.ng/wp-content/uploads/2021/02/clear_ram_buffer_linux.jpg
date: 2020-05-30T00:03:00.002+07:00
description: Script To Clear Cache Linux
excerpt: Script To Clear Cache Linux
id: 70a9cd6a-2cb6-4888-8dec-4994e563b878
lang: en
photos:
  - https://res.cloudinary.com/practicaldev/image/fetch/https://www.wissenschaft.com.ng/wp-content/uploads/2021/02/clear_ram_buffer_linux.jpg
subtitle: Script To Clear Cache Linux
tags:
  - bash
  - script
  - tips & tricks
  - linux/unix
thumbnail: https://res.cloudinary.com/practicaldev/image/fetch/https://www.wissenschaft.com.ng/wp-content/uploads/2021/02/clear_ram_buffer_linux.jpg
title: Linux Clear Cache
type: post
updated: 2023-08-08T14:45:13+07:00
uuid: db68c44f-5c4e-4888-824c-065ae21add60
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
