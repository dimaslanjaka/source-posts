---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
categories:
  - programming
comments: true
cover: https://i.stack.imgur.com/frOSJ.png
date: 2017-05-17T20:02:00.000+07:00
description: h2>Is there any Blogger blogspot not portable contingent
  arrangement.</h2>Someone ask to stackoverflow like this.<br /><br />I would
lang: en
photos:
  - https://i.stack.imgur.com/frOSJ.png
tags:
  - blogger
thumbnail: https://i.stack.imgur.com/frOSJ.png
title: conditional tags blogger for desktop only
type: post
updated: 2023-09-03T06:13:50+07:00
wordcount: 504
---

<h2>Is there any Blogger (blogspot) not portable contingent arrangement.</h2>Someone ask to stackoverflow like this.<br><br>I would prefer to load javascript files solely on Desktop version of my<br>Google blogspot (blogger.com) since i would like a lightweight version of<br>my web log for mobile.<br><br>I came through followings, however not operating<br><br><br><pre><code>&lt;b:if cond != 'data:blog.isMobile'&gt;;<br>&lt;b:if cond = !'data:blog.isMobile'&gt;;<br>&lt;b:if cond = '!data:blog.isMobile'&gt;;<br>&lt;b:if cond='data:blog.pageType !== "data:blog.isMobile"&gt;<br></code></pre><br>How can I write "is Not Mobile" conditional in Google blogspot? Thanks in<br>advance for all answers.<br><br>Update: I'm using following code at the moment and it's working but better<br>ideas are welcome<br><br><br><pre><code>&lt;b:if cond='data:blog.isMobile'&gt;<br><br>&lt;b:else/&gt;<br>    //I include javascript files here and they only appear on desktop version<br>&lt;/b:if&gt;</code></pre><br><h3>Here the solved for this problem:</h3>You can be use <code>true</code> or <code>false</code> statements in blogger<br>conditional tags in this case. This is the perfect way :)<br><br><br><pre><code>&lt;b:if cond='data:blog.isMobile == &amp;quot;false&amp;quot;'&gt;<br>//Contents inside this, will only appear in Desktop version.<br>&lt;/b:if&gt;<br></code></pre><strong><em><br></em></strong> <strong><em>Edit #1:</em></strong><br><br>This will work just on the off chance that you have empowered versatile format, and set it to custom.<br><br><img alt="enter image description here" src="https://i.stack.imgur.com/frOSJ.png"><br><br><img alt="enter image description here" src="https://i.stack.imgur.com/SqZkw.png"><br><br>Furthermore, it works on Chrome's portable emulator. (will be diverted to portable adaptation if going to from a cell phone or with an emulator that mirrors a versatile Program Client Operator. it will include ?m=1 toward the finish of the URL)<br><br><img alt="enter image description here" src="https://i.stack.imgur.com/9xnCv.png"><br><br>Hope this helps.

## Also Read Blogger Conditional Tags
[Blogger Conditional Tags](/2021/12/18/blogger-conditional-tags.md)