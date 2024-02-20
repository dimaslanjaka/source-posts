---
author:
  nick: Dimas Lanjaka
  link: https://www.blogger.com/profile/07981649157148639830
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2020-12-31T08:11:00.003Z
description: NodeJS Common Fix Command On Linux Or Windows Linux add new repositorysudo add-apt-repository ppa:deadsnakes/ppasudo apt-get update -ysudo apt install libgtk-3-
lang: en
tags:
  - windows
  - tips & tricks
  - linux/unix
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: NodeJS Common Fix Command On Linux Or Windows
type: post
updated: 2024-02-20T13:00:25+07:00
---

### Linux

```bash
# add new repository
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt-get update -y
sudo apt install libgtk-3-0 -y
sudo apt install software-properties-common checkinstall -y
sudo apt-get install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev libffi-dev zlib1g-dev build-essential libncurses5-dev libgmp-dev libnss3-dev wget -y

# nodejs additional packages
npm install --global lerna node-pre-gyp typescript

# python 2.7
sudo apt install python-minimal -y
sudo apt install python-pip -y

# Install
npm --build-from-source install

# Fix Chrome Sandbox
sudo chown root:root node_modules/electron/dist/chrome-sandbox
sudo chmod 4755 node_modules/electron/dist/chrome-sandbox

# run
sudo npm run start
```

### Windows

*   install [Visual Studio Installer](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools)

```bash
npm config set msvs_version 2017 --global
npm i electron-builder-squirrel-windows electron-builder node-gyp electron electron-rebuild -g
node-gyp configure --msvs_version=2017
npm install --global --production windows-build-tools
npm install
```