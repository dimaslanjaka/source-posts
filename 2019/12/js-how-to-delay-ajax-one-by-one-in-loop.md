---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
cover: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://artandlogic.com/wp-content/uploads/2000px-AJAX_logo_by_gengns.svg_.png
date: 2019-12-30T02:26:00.001+07:00
description: "[JS] How to delay ajax one by one in loop Bahasa indonesia:
  Bagaimana eksekusi ajax satu per satu di Loop <div id=demo></div><script>/
  Define global variable @v"
lang: en
photos:
  - https://res.cloudinary.com/dimaslanjaka/image/fetch/https://artandlogic.com/wp-content/uploads/2000px-AJAX_logo_by_gengns.svg_.png
tags:
  - javascript
  - share
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://artandlogic.com/wp-content/uploads/2000px-AJAX_logo_by_gengns.svg_.png
title: "[JS] How to delay ajax one by one in loop"
type: post
updated: 2023-09-03T06:34:35+07:00
wordcount: 1094
---

<i>Bahasa indonesia: Bagaimana eksekusi ajax satu per satu di Loop</i><br><pre>&lt;div id="demo"&gt;&lt;/div&gt;<br>&lt;script&gt;<br>/**<br> * Define global variable<br> * @var {int} indexLoop global loop indexer<br> * @var {int} lastLoop global last iteration for global loop indexer from loop initializer<br> * @var {array} queueLoop global array to be processed from ajax<br> * @var {array} arrayLoop define array to be proccesed<br> */<br><br>var indexLoop = 0,<br>  lastLoop = 0,<br>  queueLoop = [],<br>  arrayLoop = ['apple', 'melon', 'watermelon', 'grapes'];<br><br>for (var i = 0; i &lt; arrayLoop.length; i++) {<br>  queueLoop.push(arrayLoop[i]);<br>  if (i == arrayLoop.length - 1) {<br>    lastLoop = i + 1;<br>    ajaxLoop(function () {<br>      var b = document.createElement('b');<br>      b.innerHTML = 'Processing all item ' + indexLoop + ' of ' + lastLoop + ' succedeed&lt;br/&gt;';<br>      document.getElementById('demo').appendChild(b);<br>    });<br>  }<br>}<br>/**<br> * Initialize global ajaxLoop function<br> * @param {function} lastFunction function to be executed on last iteration<br> */<br>function ajaxLoop(lastFunction) {<br>  if (indexLoop &lt; lastLoop) {<br>    $.ajax({<br>      url: 'https://reqres.in/api/users?page=' + (indexLoop + 1),<br>      beforeSend: function () {<br>        var b = document.createElement('b');<br>        b.innerHTML = 'Processing item ' + indexLoop + ' of ' + lastLoop + '&lt;br/&gt;';<br>        document.getElementById('demo').appendChild(b);<br>      },<br>      success: function (response) {<br>        var b = document.createElement('b');<br>        b.innerHTML = 'Processed item success ' + this.url.split('=')[1] + ' of ' + lastLoop + '&lt;br/&gt;';<br>        document.getElementById('demo').appendChild(b);<br>      },<br>      error: function () {<br>        var b = document.createElement('b');<br>        b.innerHTML = 'Processed item error ' + this.url.split('=')[1] + ' of ' + lastLoop + '&lt;br/&gt;';<br>        document.getElementById('demo').appendChild(b);<br>      },<br>      complete: function () {<br>        var b = document.createElement('b');<br>        b.innerHTML = 'Processed item complete ' + this.url.split('=')[1] + ' of ' + lastLoop + '&lt;br/&gt;';<br>        document.getElementById('demo').appendChild(b);<br>      }<br>    });<br><br>    indexLoop++;<br>    ajaxLoop();<br>    if (indexLoop == queueLoop.length) {<br>      if (typeof lastFunction == 'function') {<br>        lastFunction();<br>        /** reseting global indexer */<br>        indexLoop = 0;<br>      }<br>    }<br>  }<br>}<br>&lt;/script&gt;</pre><h2>preview</h2>    <div class="cp_embed_wrapper"><iframe name="cp_embed_2" src="https://codepen.io/dimaslanjaka/embed/qBEXLYV?height=265&amp;theme-id=light&amp;default-tab=result&amp;user=dimaslanjaka&amp;slug-hash=qBEXLYV&amp;pen-title=await%20ajax%20jQuery%20on%20loop&amp;name=cp_embed_2" scrolling="no" frameborder="0" height="265" allowtransparency="true" allowfullscreen="true" allowpaymentrequest="true" title="await ajax jQuery on loop" class="cp_embed_iframe " style="width: 100%; overflow:hidden; display:block;" id="cp_embed_qBEXLYV"></iframe></div><script async="" src="https://static.codepen.io/assets/embed/ei.js"></script> <img src="https://res.cloudinary.com/dimaslanjaka/image/fetch/https://artandlogic.com/wp-content/uploads/2000px-AJAX_logo_by_gengns.svg_.png" title="Delay ajax in loop" alt="Delay ajax in loop" width="100%">