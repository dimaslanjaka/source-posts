---
author:
  nick: Dimas Lanjaka
  link: https://www.blogger.com/profile/07981649157148639830
  email: noreply@blogger.com
categories:
  - programming
comments: true
cover: https://1.bp.blogspot.com/-bnFVYzCkPiw/YFvFWw2im6I/AAAAAAAAAAM/28Q_ctk1SuE-1pskAFYfvVREqij-nsjhACLcBGAsYHQ/s0/VStudio2019-NodeJS.png
date: 2021-03-25T06:04:00.006+07:00
description: ul> <li>Install <a
  href=https://visualstudio.microsoft.com/downloads/ rel=nofollow noopener
  target=_blank>Microsoft Visual Studio
lang: en
photos:
  - https://1.bp.blogspot.com/-bnFVYzCkPiw/YFvFWw2im6I/AAAAAAAAAAM/28Q_ctk1SuE-1pskAFYfvVREqij-nsjhACLcBGAsYHQ/s0/VStudio2019-NodeJS.png
tags:
  - javascript
  - windows
thumbnail: https://1.bp.blogspot.com/-bnFVYzCkPiw/YFvFWw2im6I/AAAAAAAAAAM/28Q_ctk1SuE-1pskAFYfvVREqij-nsjhACLcBGAsYHQ/s0/VStudio2019-NodeJS.png
title: Fix Error NodeJS Windows Visual Studio
type: post
updated: 2023-09-03T06:34:31+07:00
wordcount: 150
---

<ul>    <li>Install <a href="https://visualstudio.microsoft.com/downloads/" rel="noopener noreferer nofollow" target="_blank">Microsoft Visual Studio Code 2019</a></li>  <li>Install Module C++</li>  <img alt="Requirement C++ FOr Node JS" src="https://1.bp.blogspot.com/-bnFVYzCkPiw/YFvFWw2im6I/AAAAAAAAAAM/28Q_ctk1SuE-1pskAFYfvVREqij-nsjhACLcBGAsYHQ/s0/VStudio2019-NodeJS.png" title="C++ for nodejs">  <li>Type below codes to your terminal (administrator)</li>  <pre>	<br>  npm i -g --production windows-build-tools<br>  npm config set msvs_version 2019 --global<br>  npm config set msbuild_path "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\MSBuild\Current\Bin\MSBuild.exe"<br>  </pre></ul>