---
author:
  nick: Dimas Lanjaka
  link: https://www.blogger.com/profile/07981649157148639830
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://miro.medium.com/max/2476/0*Mll3yo3DWALtRYPR.png
date: 2021-04-20T16:40:00.001+07:00
description: pre><br />// change folder path inside bracket<br
  />includeBuildplugin <br /> dependencySubstitution <br /> // change your
excerpt: pre><br />// change folder path inside bracket<br />includeBuildplugin
  <br /> dependencySubstitution <br /> // change your
id: e44cf8cf-1902-4888-8aea-16ddc1614b35
lang: en
photos:
  - https://miro.medium.com/max/2476/0*Mll3yo3DWALtRYPR.png
subtitle: pre><br />// change folder path inside bracket<br />includeBuildplugin
  <br /> dependencySubstitution <br /> // change your
tags:
  - script
  - gradle
  - tips & tricks
thumbnail: https://miro.medium.com/max/2476/0*Mll3yo3DWALtRYPR.png
title: Import composite build plugin as subtitue module dependency [Gradle]
type: post
updated: 2021-04-20T16:40:48+07:00
uuid: a9027466-66dd-4888-8a50-f96f0c8f8ab0
wordcount: 72
---

<pre><br>// change folder path inside bracket<br>includeBuild("plugin") {<br>    dependencySubstitution {<br>    	// change your artifact group and id<br>        // iam using <a href="https://github.com/dimaslanjaka/gradle-plugin/" target="_blank" rel="noopener noreferer nofollow">https://github.com/dimaslanjaka/gradle-plugin/</a> for example<br>        substitute(module("com.dimaslanjaka:gradle-plugin")).with(project(":"))<br>    }<br>}<br></pre> <img src="https://miro.medium.com/max/2476/0*Mll3yo3DWALtRYPR.png">