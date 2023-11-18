---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2018-11-12T20:33:00.000Z
description: after struggling finally
lang: en
tags:
  - popular
  - social media
  - php
  - android
  - tips & tricks
  - linux/unix
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://lh6.googleusercontent.com/-toLz3YUOMz8/T4N7B_ofSMI/AAAAAAAADa8/YIwsAh5MVtI/s800/shot_000003.png
title: Installation Ubuntu On Android Tutorial
type: post
updated: 2023-09-02T23:30:12.000Z
wordcount: 2498

---

 [![thumb](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://lh6.googleusercontent.com/-toLz3YUOMz8/T4N7B_ofSMI/AAAAAAAADa8/YIwsAh5MVtI/s800/shot_000003.png)](#/)Install Ubuntu on an Android phone
==============================================================================================================================================================================================================

after struggling finally managed to also install Ubuntu on my beloved android phone. the installation is easy, the hard one is to download it, make it like that.breaking up disconnecting disconnects, once it breaks it can't be _resumed_ , if you want to _download_ , it must be dawn, the speed is still god 😀 \* Pffftttt 😂

**INSTALLATION**

1.  Ok, proceed to the first stage, which must be _downloaded_is the _Image_ file from Ubuntu that has been _remastered_ using X-Window LXDE. 3.5 GB file size is quite something for the internet in Indonesia, files can be downloaded at [http://minus.com/mKGww7gIl#2](http://minus.com/mKGww7gIl#2) . the form is a Zip file and if _extracted it_ will produce 3**ubuntu.img, ubuntu.sh,** and the **ubuntu.sh.md5 files** . if you have downloaded the file then there are some software that must be prepared, first is**Terminal Emulator** , **Busybox** and **Android VNC** , all three can be _downloaded_ at the android market for free. install and we proceed to the next stage.
2.  **The Android must be _rooted._**
3.  Copy the ubuntu.img, ubuntu.sh and ubuntu.sh.md5 files to a folder on your Android HP SD Card, make sure it's in one folder, let's say the folder is "Ubuntu".
4.  if you have already opened the **terminal emulator** , type **_#su to_** become root.
5.  **#cd sdcard / ubuntu /** to enter the ubuntu folder that we created earlier on the SD Card.
6.  last type **_#sh ubuntu.sh_**
7.  let the warning appear. wait a while, ubuntu is being booted on your android phone, of course this depends on the specifications of your cellphone, if I use the Samsung Galaxy S so it's OK to run the Ubuntu.

[![Running Terminal](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://lh5.googleusercontent.com/-Qf0WKqdHfsg/T4N7D8d-FFI/AAAAAAAADbE/qpb5CBzMwdI/s800/shot_000007.png)](#amp;tl=en)

Running Terminal

![Ubuntu Boot Up](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://lh3.googleusercontent.com/-va20bvcsP48/T4N7FwRkflI/AAAAAAAADbM/UaYnaKKdteM/s512/shot_000008.png)

Ubuntu Boot Up

**HOW TO RUN**

1.  if you are already out of the terminal emulator, but don't_exit_ , leave the Terminal Emulator running, then open **Android VNC** , enter the parameters as follows:
2.  Address: localhost (or leave it blank).
3.  Password: Ubuntu
4.  Port: 5900
5.  BPP: 24
6.  press connect and enjoy enjoying 😀

![Android VNC Settings](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://lh3.googleusercontent.com/-hpKGX3oGBNo/T4N7InBpSYI/AAAAAAAADbU/Lfl2CZ-hh8g/s800/shot_000009.png)

**HOW TO GET OUT AND UNINSTALL**

1.  To exit the Ubuntu Operating System, please log out of Android VNC.
2.  then from the Terminal Emulator that was still open, type**#exit** three times followed by **enter** , leave it long enough until the entire Ubuntu OS is shut down.
3.  and finished, just to uninstall it just delete the ubuntu folder: D.

Here are some screenshots that I get when running the application on Ubuntu LXDE 😀

![LXDE desktop](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://lh6.googleusercontent.com/-toLz3YUOMz8/T4N7B_ofSMI/AAAAAAAADa8/YIwsAh5MVtI/s800/shot_000003.png)

LXDE Desktop I Screenshot Directly on Mobile

![Ana Shoot Use my BB](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://lh5.googleusercontent.com/-urp5_zCS2ps/T4N6lOyNCnI/AAAAAAAADac/a2pu9Ov-GXU/s640/IMG-20120410-00203.jpg)

Ana Shoot using my BB, so convincing

![Gimp Photo Editor application is common on Ubuntu](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://lh4.googleusercontent.com/-uxyBHSTPGHQ/T4N6phmG4uI/AAAAAAAADak/wmCC8ffl690/s640/IMG-20120410-00204.jpg)

Gimp Photo Editor application is common on Ubuntu

![Gimp is running again](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://lh4.googleusercontent.com/-tpUqG7lEpTY/T4N7ltHuWoI/AAAAAAAADb0/InTtmyG07wY/s640/IMG-20120410-00210.jpg)

Gimp is running again

![Open Office again Start Up](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://lh3.googleusercontent.com/-1i0rsah096U/T4tzPTMeROI/AAAAAAAADkQ/TQVvbXGpWbY/s912/Suko%2520Manunggal-20120410-00201.jpg)

Open Office again Start Up

![Open Office Draw](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://lh5.googleusercontent.com/-1qcGPVNHe4A/T4N7f6IS2jI/AAAAAAAADbs/nncWg4GDnwI/s640/IMG-20120410-00206.jpg)

Open Office Draw

![Terminal aka the Ubuntu Console](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://lh3.googleusercontent.com/-gsqPjyxN4Rc/T4N68LtXh0I/AAAAAAAADas/Z60eb1Q7_Qs/s640/IMG-20120410-00216.jpg)

Warning, because running Ubuntu requires a large amount of resources, I don't have to be responsible if until the HP situ modar, please try with your own risk: D. and one more don't do # apt-get update or install application here, indeed it's okay, but this ubuntu is Ubuntu that has been made so that it can run on Android Device, if it's updated yes your Android address will be super slow .

Greetings Me and wait for the next article: p