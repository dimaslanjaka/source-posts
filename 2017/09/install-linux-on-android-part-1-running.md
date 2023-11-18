---
author:
  nick: Dimas Lanjaka 2
  link: https://www.blogger.com/profile/08197822797622284515
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2017-09-01T16:41:00.000Z
description: Another of the features of the android smartphone that we can take
  advantage of IE running OS Ubuntu Xenial at 6or more times Therein
lang: en
tags:
  - android
  - tips & tricks
thumbnail: https://image.ibb.co/fFtDUF/unnamed_5.png
title: Install Linux on the Android part 1-running Linux Ubuntu/Xenial on Android
type: post
updated: 2023-08-08T07:45:47.000Z
wordcount: 5363

---

[![unnamed_5](https://image.ibb.co/fFtDUF/unnamed_5.png "imgDb")](https://imgbb.com/ "imgdb")Another of the features of the android smartphone that we can take advantage of IE running OS Ubuntu Xenial at 16 or more times There in the android smartphone OS with Ubuntu, where or Times be installed on android smartphone we then automatically features that exist on Ubuntu OS or at 16 times also we can use. PC again when we run OS Ubuntu or the Time, we don't need to shut down the android OS on our smartphone OS, both Ubuntu and android OS can be run simultaneously so that the features on android Smartphones such as telephone, sms, whatsapp, BBM, line, and so on will still work.  
  
Ubuntu is one of the linux operating system on the basis of the debian operating system. Ubuntu was first released circa 2004 and have experienced the development until now with final release of Ubuntu Xenial at 16. Some software that we can take advantage of ubuntu are:  
  
Office Software (word, excel, powerpoint) use Libreoffice 5.  
\-Software development web server for local use apache2, php and mysql.  
\-Code editor with features of interest to developers.  
\-Browsing using web browser just like on a PC.  
\-And so on.  
  
Another thing to keep in mind in the process of installing ubuntu on a smartphone cannot be ascertained that the installation will succeed 100% due to the characteristics of the hardware on every android smartphone. Here also I remind that the installation process may have to be repeated several times until the os installation of ubuntu on a smartphone successful, so it is recommended to use a wifi connection with good speed, or data connection smartpone with large quotas.  
  
All the steps in this tutorial is a safe, all the steps done in software but does not cover the possibility if the later will be faced with some problems even though the odds are small so we must be ready with the risk that would be faced. By following this tutorial I think have agreed that all the risks are borne by themselves.  
  
To run ubuntu, android smartphone we should meet the minimum specification, namely:  
  
\-at least 1 Ghz processor  
\-1 GB RAM  
\-sdcard with the rest of the space at least 5 GB  
\-mandatory android smartphone is already in the root.  
  
Actually not just ubuntu that can be installed, other linux distros like debian, opensuse, slackware, times, and centos could also be installed. But from my experience installing linux on android, ubuntu only the most stable. I chose ubuntu latest version namely xenial at 16 because the repository for application installation in ubuntu like office, apache, mysql, php, etc. are still complete and we can get the latest versions of these applications with a nicer look and a more complete feature. As for the Time There there are some applications that still use the old version in the repository, and if we want to install the latest version, we harus embodying other repository manually, but the benefits of Time There terasa lighter.   
  
After the minimum specifications of android smartphone, we now begin to stage installation. Previously used to prepare supporting applications as follows:  
  
1\. Deploy Linux Applications. Download [here](https://play.google.com/store/apps/details?id=ru.meefik.linuxdeploy)  
2\. application Busybox installer. Download [here](https://www.blogger.com/https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dru.meefik.busybox)  
3\. Applications the bVNC. Download [here](https://www.blogger.com/https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.iiordanov.freebVNC)  
4\. application Terminal Emulator. Download [here](https://www.blogger.com/https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Djackpal.androidterm)  
  
After all the applications installed, we start ubuntu installation phase as follows:  
  
1\. open busybox installer app, and then click install busybox.  
2\. Go to deploy linux applications, and then open the installation settings (picture the arrow down) and make the settings as follows:

  
a) distribution: ubuntu, if you want to use the time pbe selected times.   
b) Distribution suite: xenial, if you use the select time there.  
c) Architecture: armhf.  
d) Mirror: Let alone without change, according to their standard.   
e) installation type: file.  
f) Installation path:/sdcard/linuximg.  
g) image size: 4000  
h) file system: auto.  
I) User name: android.  
j) Password: changeme.  
k: LXDE Desktop environment).  
l) Select component: give ceklist on a desktop environment, ssh server, vnc servers.  
m) marked ceklist on ssh and gui.  
n) Graphic subsystem: vnc.  
o) Gui settings: display 0, 24 depth, width and height, the appropriate screen resolution recommended hp.

  
3\. Back to the top of the settings menu, select install. Then download and install process will begin. The process will last for quite a while, depending on the speed of the internet. The downloaded data is approximately 300-500 MB. Wait until it is finished.  
4\. After the installation process is complete, click on the stop button, wait for the stop process is complete, then click on the start button. If on the status of ssh and vnc done, then the installation was successful, if it fail, then your installation failed.   
5\. If the download fails, click the stop button, click on the install button on the settings menu of the installation. Then the installation process will be repeated.

6\. If the installation is successful, we can be checked by clicking on the stop button, then after the stop process is complete click on the start button wait a few moments until the emerging status of ssh and vnc done done. If the status of ssh and vnc fail means installation fails, try signing in lagi settings then click reconfigure. If the status still fail, repeat from step no. 3.

7\. If it appears the status of ssh and vnc done, to start using ubuntu use bVNC applications. Open application settings then bVNC at:

a) server: 127.0.0.1

b) port: 5900

c) username: android

d) password: changeme

8\. Click on the connect button that is in the application, if any error bVNC disregard it, just click on the OK button. The look of ubuntu with its menu is already displayed and we can already start using it.

9\. At this point ubuntu still in a State of blank without any application except the file manager and terminal.

10\. To install software, use the terminal. To access the root use the command sudo-i then enter. Do update reposotory with type apt-get update on terminal then enter.

Until this stage been successfully installed ubuntu at 16. We can make a backup of the file mengkopikan with the way linux. img on sdcard to another folder so that if there is an error because of the wrong software to install or other error we can restore the backup of the last we created so no need to do the installation from the beginning.

For installing software via terminal for unfamiliar with linux system can find tutorials on google. Use the keyword install for ubuntu, it's usually way installation using apt-get. Keep in mind that our install ubuntu is ubuntu with a special arm processor architecture, so software-software that requires intel processor will not be installed. Examples of available software for the arm processors are: libreoffice, apache2, php, mysql, phpmyadmin, mysql workbench, gedit, firefox and many more.

  

The tutorial running ubuntu xenial at 16 or more times there in android, may be useful.