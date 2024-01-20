---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-04-09T06:26:00.001Z
description: Official php-cli installation on android by L3n4r0x php Running On Android Terminal -> How to install php5-cli in android <-
lang: en
tags:
  - php
  - android
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://4.bp.blogspot.com/-3UATHL878wU/WKoXE11tarI/AAAAAAAAFAA/QhBnNJFo5QAiB4C04RKBG9zuFrP2Uhm4gCLcB/s1600/serverphp.jpg
title: Install PHP for Android CLI or Web Server
type: post
updated: 2024-01-20T16:44:47.478Z
webtitle: PHP Android
---

<details>
  <summary>Click me</summary>

  Introduction
  ------------

  -   Brief explanation of PHP programming language
  -   Increasing popularity of using PHP in mobile app development
  -   Purpose of the article

  Overview of PHP programming in Android
  --------------------------------------

  -   History of PHP in Android
  -   Advantages of using PHP in Android
  -   Challenges faced in integrating PHP with Android

  Getting Started with PHP in Android
  -----------------------------------

  -   Installing the necessary tools and software
  -   Setting up a development environment
  -   Creating a basic PHP app in Android

  Utilizing PHP Features in Android
  ---------------------------------

  -   Using PHP libraries and extensions in Android
  -   How to handle server-side requests in Android using PHP
  -   Integrating database connectivity with PHP in Android

  Best Practices for Using PHP in Android
  ---------------------------------------

  -   Security measures to consider when using PHP in Android
  -   Tips for optimizing performance in PHP-based Android apps
  -   Common mistakes to avoid when using PHP in Android

  Case Studies
  ------------

  -   Success stories of using PHP in Android app development
  -   Real-life examples of popular Android apps built with PHP

  Conclusion
  ----------

  -   Recap of the benefits and challenges of using PHP in Android
  -   Future prospects of PHP in Android development
  -   Final thoughts and recommendations for developers interested in using PHP in Android.
</details>

Official php5-cli installation on android by L3n4r0x (php Running On Android Terminal) -> This Repost From My Another Blogs <- You can visit it on http://blog.snfr.cf or http://secretnetworkforces.blogspot.com

![](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://4.bp.blogspot.com/-3UATHL878wU/WKoXE11tarI/AAAAAAAAFAA/QhBnNJFo5QAiB4C04RKBG9zuFrP2Uhm4gCLcB/s1600/serverphp.jpg)

How to install php5-cli in android
----------------------------------

##### Requirement:

1.  Busybox For Programming Support ( [Read And See Here](https://secretnetworkforces.blogspot.co.id/2017/02/busybox-for-programming-support.html?m=1))
2.  Terminal Emulator ( [Download Terminal Emulator](http://android-terminal-emulator.id.uptodown.com/android/download&usg=ALkJrhgo7D4q5JlIuFygyeD5GzdN6lUkNw))
3.  ![php server](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://pic.apk4fun.com/9c/de/13/com.esminis.server.php-92149-qr-code.png)        Code BB For PHP Server ( [Download Server For PHP APK](https://www12.zippyshare.com/v/ZfZ59Qkh/file.html) )
4.  Internal min ± 300 MB free
5.  ROOT Explorer ( [Download Root Explorer Pro](https://rootexplorer.co/wp-content/uploads/2016/11/Root-Explorer-4.0.5.apk) )



### Installation:

1. Install Busybox and The Module
2. Install Server Module For PHP and its php
3. Open Terminal Emulator, type the following code this:

```bash
su
data="/data/data/com.eminis.server.php"
chmod 755 $data/files/*
chmod 755 $data/lib/*
```

Or you can also manually set permissions 755 in /data/data/[com.eminis.server.php](http://webmanajemen.com/search?q=com.eminis.server.php)/ all the files in the folder "files" and "lib"

4\. Open Root Explorer, open the folder /data/data/com.eminis.server.php/files/, "press and hold" file named php. (See screenshot)


[![](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://3.bp.blogspot.com/-4Vxims5hNn0/WKoef7HN-QI/AAAAAAAAFAQ/mMoYicL08MoveNutmUxI0BCyLHPyOA3uACLcB/s1600/Screenshot_2017-02-09-07-28-29-picsay.png)](https://3.bp.blogspot.com/-4Vxims5hNn0/WKoef7HN-QI/AAAAAAAAFAQ/mMoYicL08MoveNutmUxI0BCyLHPyOA3uACLcB/s1600/Screenshot_2017-02-09-07-28-29-picsay.png)

Click hold, then click on the option menu (top right corner)



[![](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://4.bp.blogspot.com/-qL_df_2RacQ/WKoeooYyN3I/AAAAAAAAFAU/mi7d1QL1JyAMaYaAgZxWUXIf0LmPI8HTgCLcB/s1600/Screenshot_2017-02-09-07-23-51-picsay.png)](https://4.bp.blogspot.com/-qL_df_2RacQ/WKoeooYyN3I/AAAAAAAAFAU/mi7d1QL1JyAMaYaAgZxWUXIf0LmPI8HTgCLcB/s1600/Screenshot_2017-02-09-07-23-51-picsay.png)

Click on the options menu, select the "link to this file"



Once the link is copied, immediately go to the dir /system/bin/ (see screenshot)



[![](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://3.bp.blogspot.com/-TkMyPvubUss/WKofgR_YJZI/AAAAAAAAFAc/jnmWoy_Lv149VobN4CVyKrmbGKdKVCeCgCLcB/s1600/Screenshot_2017-02-09-07-24-10-picsay.png)](https://3.bp.blogspot.com/-TkMyPvubUss/WKofgR_YJZI/AAAAAAAAFAc/jnmWoy_Lv149VobN4CVyKrmbGKdKVCeCgCLcB/s1600/Screenshot_2017-02-09-07-24-10-picsay.png)

/System/bin/ click I marked above

Done. Try test open the Terminal emulator. Type the following code:

```bash
php -v
php --help
```


[![](instal-php-cli-pada-android-instalasi/terminal-preview.webp)](https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/16681945_1737945366535452_7911565320819698077_n.png.jpg?efg=eyJpIjoidCJ9&_nc_eui2=v1%3AAeHINJr_n4BocgCIOoIv5Of91PA65CcH0sY_WavQVXTlxnXFlUbfatL4PIoNcwX8LIVHwjq8xGa8zxSqvIS9x7GUrWL5COW0Tkat7Uv4LJs5rA&oh=ce40fc8acc02caf728a9956a95ad6b3e&oe=5939A832)

Installation Results Above


#### \[\*\] Features:

\* Pure PHP v.5.4+ - v.7+ server with modules:

core | session | standard | date | ereg | libxml | openssl | PCRE | sqlite3 | zlib | bcmath | bzip2 | calendar | ctype | curl | dom | hash | fileinfo | filter | ftp | gd | gettext | gmp | spl | iconv | intl | json | mbstring | mcrypt | mongodb | mysqlnd | mysqli | oDBC | pdo | pdo\_mysql | pdo\_odbc | pdo\_pgsql | pdo\_sqlite | pgsql | Phar | posix | pspell | recode | reflection | mysql | simplexml | soap | sockets | exif | tidy | tokenizer | WDDX | xml | XmlReader | xMLRPC | XMLWriter | xsl | zip | cli\_server | mhash ssh2 | opcache | Phalcon | yaf | yar | iD3 | lzf | oauth | quickhash | bbcode | xmldiff | xdiff | rar | gender | stats | EIO | judy | mailparse | rpmreader | spl\_types | yaml | ev | inotify | weakref | xdebug | dba | Imagick



! If you need MySQL or MariaDB Server: [Download MariaDB Server For Android](https://play.google.com/store/apps/details?id=com.esminis.server.mariadb)
! If you need MongoDB Server - moNERIngAo Server: [Download MongoDB Server For Android](https://play.google.com/store/apps/details?id=com.esminis.server.mongodb)

So [I Install PHP in Android |](https://google.nl/search?q=install+php-cli+L3n4r0x) [Php run in a terminal emulator android](https://google.tk/search?q=install+php-cli+L3n4r0x) . Hope it helps, when confused comments only. Or call me at [Dimas Imam Nawawi (Dimas Lanjaka)](https://fb.me/dimaslanjaka1) .

Tag: Install PHP cli android, Install PHP Cli for android, How to install php cli on android, android php command line interface.