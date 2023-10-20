---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2019-12-26T15:18:00.000Z
description: img border=0
  src=https://static.cdn-cdpl.com/700x350/5615bb41d81fad8fe992985aec0e5f29/js.jpg
  data-original-width=700
lang: en
tags:
  - javascript
  - share
thumbnail: https://static.cdn-cdpl.com/700x350/5615bb41d81fad8fe992985aec0e5f29/js.jpg
title: Membuat array javascript unik
type: post
updated: 2023-09-02T23:34:35.000Z
wordcount: 127

---

<img border="0" src="https://static.cdn-cdpl.com/700x350/5615bb41d81fad8fe992985aec0e5f29/js.jpg" data-original-width="700" data-original-height="350"> <pre><br>function arrayUnik(A){<br>  uniq = A.filter(function(item, pos, self) {<br>      return self.indexOf(item) == pos;<br>  });<br>  return uniq;<br>}<br><br>/* Penggunaan */<br><br>var arraymu = [1,2,3,4,5,6,3,7,7,55,6,7,90,98,89,98,89,98,98,89,89];<br>console.log(arrayUnik(arraymu)); //Buka F12 developer tools untuk melihat hasilnya<br></pre> <b><ul><li>Menghapus duplikat array di javascript</li><li>Membuat array menjadi unik di javascript</li></ul></b>