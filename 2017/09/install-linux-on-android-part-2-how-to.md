---
author:
  nick: Dimas Lanjaka 2
  link: https://www.blogger.com/profile/08197822797622284515
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-09-02T16:46:00.000Z
description: Install Linux on the Android part 2-How to Install Apache2, PHP and
  MYSQL on Android Install Linux on the Android part 2-How to Install Apache2,
  PHP and MYSQL o
lang: en
tags:
  - android
  - tips & tricks
  - mysql
thumbnail: https://image.ibb.co/fFtDUF/unnamed_5.png
title: Install Linux on the Android part 2-How to Install Apache2, PHP and MYSQL
  on Android
type: post
updated: 2023-09-02T23:13:41.000Z
wordcount: 1361

---

### Install Linux on the Android part 2-How to Install Apache2, PHP and MYSQL on Android

[![](https://image.ibb.co/fFtDUF/unnamed_5.png)](https://image.ibb.co/fFtDUF/unnamed_5.png)

There are a few applications to run the AMP (Apache, Mysql, PHP) on android smartphone, but the features are dimikiki by that application is very limited. Some of the features in php like some framework, the composer, the database migration cannot be used. To be able to run it all then we have to do linux installation first android system. Usually the widely used linux is ubuntu, ubuntu installed only after we can install apache2, php and mysql.

To install ubuntu in the android system, we can use the linux deploy applications. For the tutorial can be found [here](https://webmanajemen.com/2017/09/install-linux-on-android-part-1-running.html) . After ubuntu installed in the android system, we can proceed with installing apache2, php and mysql. The trick is:

1\. Open a terminal, and log in as user root by way of typing commands

sudo-i

then enter

2\. Update the repository by way of typing commands

apt-get update (enter)

Until here we are ready to do the installation.

3\. install apache2

apt-get install apache2 libapache2-mod-php (enter)

4\. install php

apt-get install php (enter)  
If we want to use the framework, usually the framework requires some additional php plugins, such as php-zip etc. Note what plugins are needed, then install. As a note plugin can be installed later. We just do the installation as follows:  
apt-get install php-curl php-cli php-mbstring php-zip php-gettext (enter)

5\. install mysql-server

apt-get install mysql-server (enter)

6\. install the mysql tool like phpmyadmin and mysql workbench

apt-get install phpmyadmin (enter)

apt-get install mysql-workbench (enter)

If the installation process there is unmet dependency error messages, and we are asked to type the command apt-get-f install, thentype command

apt-get-f install (enter)

But if the installation goes smoothly, the above command does not need to be run.  
On ubuntu with linux normally deploy apache2 and mysql is not running automatically, therefore it must berun manually dengan how to mengetik's command:  
Service apache2 start (enter)  
mysql service start (enter)  
  

The tutorial install apache2, php, and mysql in android. May be useful.