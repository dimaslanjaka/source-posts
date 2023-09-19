---
author:
  nick: Dimas Lanjaka
  link: https://github.com/dimaslanjaka
  image: https://i.pinimg.com/564x/32/bc/65/32bc65e19220728fb290249059a7242a.jpg
categories:
  - programming
comments: true
cover: https://i.stack.imgur.com/4TYxW.jpg
date: 2021-12-06T23:25:00+07:00
description: How to configure shortcut desktop for xampp linux
keywords:
  - xampp
  - apache
  - MySQL
  - shortcut
  - desktop
lang: en
location: Indonesia
photos:
  - https://i.stack.imgur.com/4TYxW.jpg
tags:
  - php
  - apache
  - mysql
thumbnail: https://i.stack.imgur.com/4TYxW.jpg
title: XAMPP
type: post
updated: 2023-08-08T14:44:21+07:00
webtitle: Desktop Shortcut
wordcount: 272
---

# Desktop Start Menu Shortcut XAMPP Linux (Ubuntu etc)

> are you took below errors ?

<pre><code>sudo /opt/lampp/share/xampp-control-panel/xampp-control-panel
Traceback (most recent call last):
  File "xampp-control-panel.py", line 18, in &lt;module&gt;
    import gtk
ImportError: No module named gtk</code></pre>

## Here how to fix show XAMPP Panel on Linux
- Open Terminal, Type below codes

```shell
XAMPP=/usr/share/applications/xampp-control-panel.desktop
sudo touch $XAMPP
sudo gedit $XAMPP
```

- content `/usr/share/applications/xampp-control-panel.desktop`

```desktop
[Desktop Entry]
Encoding=UTF-8
Name=XAMPP Control Panel
Comment=Start and Stop XAMPP
Exec=sudo -H /opt/lampp/manager-linux-x64.run
Icon=/opt/lampp/htdocs/favicon.ico
Categories=Application
Type=Application
Terminal=false
```

- If you use a 32-bit system:

```shell
sudo -H /opt/lampp/manager-linux.run
```

- If you use a 64-bit system:

```shell
sudo -H /opt/lampp/manager-linux-x64.run
```

## Result
![Screenshot from 2021-12-07 02-45-08](https://user-images.githubusercontent.com/12471057/144911998-7459f8b8-1816-447e-a0c7-898a2cd4da49.png)
