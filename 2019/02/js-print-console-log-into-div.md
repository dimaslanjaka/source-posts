---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2019-02-06T15:55:00.001Z
description: "[JS] Print console log into div HTML <div id=debug></div> Pure
  Javascript function var old = console.log; var logger =
  document.getElementByIdlog; console.log ="
lang: en
tags:
  - javascript
  - html
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://topjavatutorial.com/wp-content/uploads/2016/08/consolelog.png
title: "[JS] Print console log into div"
type: post
updated: 2023-09-02T23:34:54.000Z
wordcount: 244

---

<div><img src="https://res.cloudinary.com/dimaslanjaka/image/fetch/https://topjavatutorial.com/wp-content/uploads/2016/08/consolelog.png"></div> <h3>HTML</h3><pre><br>&lt;div id="debug"&gt;&lt;/div&gt;<br></pre><h3>Pure Javascript</h3><pre><br>(function () {<br>    var old = console.log;<br>    var logger = document.getElementById('log');<br>    console.log = function (message) {<br>        if (typeof message == 'object') {<br>            logger.innerHTML += (JSON &amp;&amp; JSON.stringify ? JSON.stringify(message) : message) + '&lt;br /&gt;';<br>        } else {<br>            logger.innerHTML += message + '&lt;br /&gt;';<br>        }<br>    }<br>})();<br></pre><h3>Using jQuery</h3><pre><br>// Using jQuery<br>if (typeof console  != "undefined") <br>    if (typeof console.log != 'undefined')<br>        console.olog = console.log;<br>    else<br>        console.olog = function() {};<br><br>console.log = function(message) {<br>    console.olog(message);<br>    $('#debug').append('&lt;p&gt;' + message + '&lt;/p&gt;');<br>};<br>console.error = console.debug = console.info =  console.log<br></pre>