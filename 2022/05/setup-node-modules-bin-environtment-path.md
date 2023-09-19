---
author: Dimas Lanjaka
categories:
  - uncategorized
comments: true
cover: https://user-images.githubusercontent.com/12471057/167742331-5e5ea481-cbfc-4a9a-87fd-7b404b16a4dc.png
date: 2022-05-10T12:13:21+0000
description: How to setup node_modules/.bin on global environtment path
lang: en
photos:
  - https://user-images.githubusercontent.com/12471057/167742331-5e5ea481-cbfc-4a9a-87fd-7b404b16a4dc.png
tags:
  - nodejs
  - bash
  - cmd
thumbnail: https://user-images.githubusercontent.com/12471057/167742331-5e5ea481-cbfc-4a9a-87fd-7b404b16a4dc.png
title: Setup node_modules bin on global environtment path
type: post
updated: 2023-08-08T14:45:09+07:00
wordcount: 98
---

## Setup Windows
![Environtment Path Windows](https://user-images.githubusercontent.com/12471057/167625486-8ba5d865-b3e5-4cec-bdb5-6c335ff5b2d6.png)

## Setup Linux
```bash
sudo gedit ~/.bashrc
```
add following codes to end of file
```bash
if [ -d "./bin" ] ; then
    export PATH="$PATH:./bin"
fi
if [ -d "./node_modules/.bin" ] ; then
    export PATH="$PATH:./node_modules/.bin"
fi
```

![cover](https://user-images.githubusercontent.com/12471057/167742331-5e5ea481-cbfc-4a9a-87fd-7b404b16a4dc.png)
