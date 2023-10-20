---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2020-03-08T09:44:00.001Z
description: pre><br>LinearLayout.LayoutParams param = new
  LinearLayout.LayoutParams<br> LayoutParams.MATCH_PARENT, //OR WRAP_CONTENT ->
lang: en
tags:
  - android
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://techcrunch.com/wp-content/uploads/2017/02/android-studio-logo.png?w=730&crop=1
title: Android Studio Set Weight Layout Programatically
type: post
updated: 2023-08-08T07:45:13.000Z
wordcount: 57

---

<pre><br>LinearLayout.LayoutParams param = new LinearLayout.LayoutParams(<br>    LayoutParams.MATCH_PARENT, //OR WRAP_CONTENT -&gt; layout_width<br>    LayoutParams.MATCH_PARENT, //OR WRAP_CONTENT -&gt; layout_height<br>    1.0f // layout_weight 1<br>);<br>YOUR_VIEW.setLayoutParams(param);<br></pre> <img src="https://res.cloudinary.com/dimaslanjaka/image/fetch/https://techcrunch.com/wp-content/uploads/2017/02/android-studio-logo.png?w=730&amp;crop=1" width="100%">