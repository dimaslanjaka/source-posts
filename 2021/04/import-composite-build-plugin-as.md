---
author:
  nick: Dimas Lanjaka
  link: https://www.blogger.com/profile/07981649157148639830
  email: noreply@blogger.com
categories:
  - programming
comments: true
cover: https://miro.medium.com/max/2476/0*Mll3yo3DWALtRYPR.png
date: 2021-04-20T16:40:00.001+07:00
description: pre><br>// change folder path inside bracket<br
  />includeBuildplugin <br> dependencySubstitution <br> // change your
lang: en
photos:
  - https://miro.medium.com/max/2476/0*Mll3yo3DWALtRYPR.png
tags:
  - script
  - gradle
  - tips & tricks
thumbnail: https://miro.medium.com/max/2476/0*Mll3yo3DWALtRYPR.png
title: Import composite build plugin as subtitue module dependency [Gradle]
type: post
updated: 2023-09-03T06:44:45+07:00
wordcount: 72
---

<pre><br>// change folder path inside bracket<br>includeBuild("plugin") {<br>    dependencySubstitution {<br>    	// change your artifact group and id<br>        // iam using <a href="https://github.com/dimaslanjaka/gradle-plugin/" target="_blank" rel="noopener noreferer nofollow">https://github.com/dimaslanjaka/gradle-plugin/</a> for example<br>        substitute(module("com.dimaslanjaka:gradle-plugin")).with(project(":"))<br>    }<br>}<br></pre> <img src="https://miro.medium.com/max/2476/0*Mll3yo3DWALtRYPR.png">