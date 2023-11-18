---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2017-09-03T08:08:00.000Z
description: "Install perl on android 2017 Tutorial Install Perl On Android:
  Download BugTroid Pro Apk ->DownloadRun the BugTroid Pro app.click Icon
  android Android pentest.s"
lang: en
tags:
  - android
  - tips & tricks
thumbnail: https://imgdb.net/images/3178.png
title: Install perl on android 2017
type: post
updated: 2023-08-08T07:45:46.000Z
wordcount: 512

---

Tutorial Install Perl On Android:  

[![](https://imgdb.net/images/3178.png)](https://imgdb.net/images/3178.png)

1.  Download BugTroid Pro Apk -> [Download](https://www.dropbox.com/s/97g97bg14gyinaa/Bugtroid%20Pentesting%20PRO%20v5.0.1%5BBala%20Kurawa%5D%20.apk?dl=1 "BugTroid Pro") 
    
    [![](https://imgdb.net/images/3177.png)](https://imgdb.net/images/3177.png)
    
2.  Run the BugTroid Pro app. 
3.  click Icon android (Android pentest).
4.  scroll down and select -> Scripting -> select Perl4android, click install then wait for the process to complete.
    
    [![](https://imgdb.net/images/3176.jpg)](https://imgdb.net/images/3176.jpg)
    
5.  after Perl for Android is installed, run the application, then click Install and wait until the process is complete.
6.  Install Root Explorer (rootex).
7.  Run the Root Explorer ( rootex ) -> Click Mount r / w, then go to: /data/data/com.googlecode.perlforandroid/files/perl/
8.  Chmod 755 file named perl.
9.  copy the file named perl to: / system / bin / or /system/xbin/. (Symlink Is recommended for this step -> Read [How to Symlink file on android.](https://webmanajemen.com/search/?q=symlink+file+android)) then chmod 755.
10.  If done -> run the emulator terminal (Terminal Emulator).
11.   Now just run the perl file through the android emulator terminal (Terminal Emulator) -> type:
    *   su
    *   perl /path/to/script.pl

Finish you have installed Perl on android.