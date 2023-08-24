---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
date: 2019-12-28T11:49:00.001+07:00
description: MengubahdomdocumentsebuahelemenkedalamHTMlstringbiasa<div
  id=elemenTersedia></div><script>function
excerpt: MengubahdomdocumentsebuahelemenkedalamHTMlstringbiasa<div
  id=elemenTersedia></div><script>function
lang: en
photos:
  - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
subtitle: MengubahdomdocumentsebuahelemenkedalamHTMlstringbiasa<div
  id=elemenTersedia></div><script>function
tags:
  - js
  - html
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: Konversi DOM element ke HTML string
type: post
updated: 2023-08-08T14:45:16+07:00
wordcount: 276
---

<div>
   <div>Mengubah&nbsp;dom&nbsp;document&nbsp;sebuah&nbsp;elemen&nbsp;kedalam&nbsp;HTMl&nbsp;string&nbsp;biasa
   </div>
   <pre><br>  &lt;div id="elemenTersedia"&gt;&lt;/div&gt;
<br>&lt;script&gt;
<br>  function htmlFromDom(ClonedNode) {
<br>    var target = document.getElementById('element-helper');
<br>    if (!target) {
<br>      document.body.innerHTML += '&lt;div id="element-helper" style="display:none"&gt;&lt;/div&gt;';
<br>      target = document.getElementById('element-helper');
<br>    }
<br>    target.innerHTML = '';
<br>    var wrap = document.createElement('div');
<br>    wrap.appendChild(ClonedNode);
<br>    return wrap.innerHTML;
<br>  }
<br>  /* Penggunaan dalam pembuatan element */
<br>  var elem = document.createElement('p');
<br>  elem.id = 'IDELEMENT';
<br>  elem.innerHTML = 'text element';
<br>  // print secara langsung juga bisa
<br>  document.write(htmlFromDom(elem));
<br>  // atau append ke element yang tersedia
<br>  document.getElementById('elemenTersedia').innerHTML = htmlFromDom(elem);
<br>&lt;/script&gt;
<br>  </pre>
 </div>
