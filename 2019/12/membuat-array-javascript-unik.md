---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://static.cdn-cdpl.com/700x350/5615bb41d81fad8fe992985aec0e5f29/js.jpg
date: 2019-12-26T22:18:00.000+07:00
description: img border=0
  src=https://static.cdn-cdpl.com/700x350/5615bb41d81fad8fe992985aec0e5f29/js.jpg
  data-original-width=700
excerpt: img border=0
  src=https://static.cdn-cdpl.com/700x350/5615bb41d81fad8fe992985aec0e5f29/js.jpg
  data-original-width=700
id: 21b5764f-1a20-4888-83c4-aead1194edfc
lang: en
photos:
  - https://static.cdn-cdpl.com/700x350/5615bb41d81fad8fe992985aec0e5f29/js.jpg
subtitle: img border=0
  src=https://static.cdn-cdpl.com/700x350/5615bb41d81fad8fe992985aec0e5f29/js.jpg
  data-original-width=700
tags:
  - js
  - share
thumbnail: https://static.cdn-cdpl.com/700x350/5615bb41d81fad8fe992985aec0e5f29/js.jpg
title: Membuat array javascript unik
type: post
updated: 2023-08-08T14:45:15+07:00
uuid: 8c0ab152-ccfa-4888-84b0-6e9e8a76aa71
wordcount: 127
---

<img border="0" src="https://static.cdn-cdpl.com/700x350/5615bb41d81fad8fe992985aec0e5f29/js.jpg" data-original-width="700" data-original-height="350"> <pre><br>function arrayUnik(A){<br>  uniq = A.filter(function(item, pos, self) {<br>      return self.indexOf(item) == pos;<br>  });<br>  return uniq;<br>}<br><br>/* Penggunaan */<br><br>var arraymu = [1,2,3,4,5,6,3,7,7,55,6,7,90,98,89,98,89,98,98,89,89];<br>console.log(arrayUnik(arraymu)); //Buka F12 developer tools untuk melihat hasilnya<br></pre> <b><ul><li>Menghapus duplikat array di javascript</li><li>Membuat array menjadi unik di javascript</li></ul></b>