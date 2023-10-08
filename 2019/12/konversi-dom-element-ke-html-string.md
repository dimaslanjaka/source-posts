---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
date: 2019-12-28T11:49:00.001+07:00
description: MengubahdomdocumentsebuahelemenkedalamHTMlstringbiasa<div
  id=elemenTersedia></div><script>function
lang: en
photos:
  - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
tags:
  - javascript
  - html
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: Konversi DOM element ke HTML string
type: post
updated: 2023-09-03T06:34:35+07:00
wordcount: 276
---

Mengubah dom document sebuah elemen kedalam HTMl string biasa

```html
<div id="elemenTersedia"></div>

<script>
  function htmlFromDom(ClonedNode) {
    var target = document.getElementById("element-helper");

    if (!target) {
      document.body.innerHTML +=
        '<div id="element-helper" style="display:none"></div>';

      target = document.getElementById("element-helper");
    }

    target.innerHTML = "";

    var wrap = document.createElement("div");

    wrap.appendChild(ClonedNode);

    return wrap.innerHTML;
  }

  /* Penggunaan dalam pembuatan element */

  var elem = document.createElement("p");

  elem.id = "IDELEMENT";

  elem.innerHTML = "text element";

  // print secara langsung juga bisa

  document.write(htmlFromDom(elem));

  // atau append ke element yang tersedia

  document.getElementById("elemenTersedia").innerHTML = htmlFromDom(elem);
</script>
```