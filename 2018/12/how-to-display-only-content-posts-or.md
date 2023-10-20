---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2018-12-13T16:45:00.000Z
description: img
  src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0esfECcbfautWTR7oGMPXO6eLhiAOX03vpEXndHO2HQDPVIJC
  /><br>Usually a
lang: en
tags:
  - javascript
  - blogger
thumbnail: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0esfECcbfautWTR7oGMPXO6eLhiAOX03vpEXndHO2HQDPVIJC
title: How to display only content posts or pages on blogger
type: post
updated: 2023-09-02T23:34:57.000Z
wordcount: 431

---

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0esfECcbfautWTR7oGMPXO6eLhiAOX03vpEXndHO2HQDPVIJC"><br>Usually a blogger when creating a page on a blog that wants content that is displayed only content only. In other words a blogger wants to create a clean page.<br>Yes, the purpose of this article is to help you guys who want to create a clean page from comments, widgets, or navigation headers.<br><b>Here's the <mark>tutorial</mark>:</b><br><blockquote>Make sure you had call jquery framework ( <kbd>https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js</kbd> ) before <kbd>&lt;/head&gt;</kbd></blockquote>Lets begun:<br><h3>Tutorial to display content of posts or pages only in blogger:</h3>When you create an article or page, put the code below at the end of your article or content page in HTML EDITOR.<br><pre>&lt;script&gt;<br>$('div:not(div[id^=post-body-])').hide(); // hide everything except id="post-body-xxxxxxxxxx"<br>$("[id^='post-body-']").appendTo('body'); // move id="post-body-xxxxxxxxx" up to the body<br>&lt;/script&gt;</pre><br>Done. I hope this post be help you..<br>Dont forget share this blog. Thank you..<br><br><i>Incoming Terms:</i><br><ol><li>Make clean pages on blogger</li><li>Make clean articles on blogger</li><li>Make articles or pages clean from comments, widget, and anything except the content articles or pages.</li></ol>