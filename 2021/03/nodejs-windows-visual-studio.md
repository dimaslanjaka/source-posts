---
author:
  nick: Dimas Lanjaka
  link: https://www.blogger.com/profile/07981649157148639830
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2021-03-24T23:04:00.006Z
description: ul> <li>Install <a href=https://visualstudio.microsoft.com/downloads/ rel=nofollow noopener target=_blank>Microsoft Visual Studio
lang: en
tags:
  - javascript
  - windows
thumbnail: https://1.bp.blogspot.com/-bnFVYzCkPiw/YFvFWw2im6I/AAAAAAAAAAM/28Q_ctk1SuE-1pskAFYfvVREqij-nsjhACLcBGAsYHQ/s0/VStudio2019-NodeJS.png
title: Fix Error NodeJS Windows Visual Studio
type: post
updated: 2024-02-20T13:05:45+07:00
---

*   Install [Microsoft Visual Studio Code 2019](https://visualstudio.microsoft.com/downloads/)
*   Install Module C++
![Requirement C++ FOr Node JS](https://1.bp.blogspot.com/-bnFVYzCkPiw/YFvFWw2im6I/AAAAAAAAAAM/28Q_ctk1SuE-1pskAFYfvVREqij-nsjhACLcBGAsYHQ/s0/VStudio2019-NodeJS.png "C++ for nodejs")*   Type below codes to your terminal (administrator)

```bash
npm i -g --production windows-build-tools
npm config set msvs_version 2019 --global
npm config set msbuild_path "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\MSBuild\Current\Bin\MSBuild.exe"
```