---
author: Dimas Lanjaka
categories:
  - programming
comments: true
cover: /2022/10/cara-mengecualikan-kalimat-dalam-beberapa-elemen-dari-serp/cover.png
date: 2022-10-12T10:38:30+07:00
description: cara menghilangkan beberapa kalimat dari artikel
keywords:
  - menghilangkan kalimat artikel dari SERP
lang: en
photos:
  - /2022/10/cara-mengecualikan-kalimat-dalam-beberapa-elemen-dari-serp/cover.png
tags:
  - seo
  - html
thumbnail: /2022/10/cara-mengecualikan-kalimat-dalam-beberapa-elemen-dari-serp/cover.png
title: Cara mengecualikan kalimat dalam beberapa elemen dari serp
type: post
updated: 2023-09-03T04:28:05+07:00
wordcount: 283
---

## Menggunakan atribut HTML data-nosnippet
Cara baru untuk membantu menghilangkan bagian halaman mana yang tidak memenuhi syarat untuk ditampilkan dari SERP. Dengan ini, Anda dapat mencegah bagian halaman HTML itu ditampilkan daru SERP.

Contoh:
```html
<span data-nosnippet="data-nosnippet">Dimas Lanjaka</span> tidak diragukan lagi adalah pesulap paling terkenal yang pernah hidup.
```

Deskripsi:

Kalimat `Dimas Lanjaka` tidak akan muncul dari SERP.

Contoh lain:
```html
<div data-nosnippet>tidak ada dalam cuplikan</div>
<div data-nosnippet="true">juga tidak ada dalam cuplikan</div>
<div data-nosnippet="false">juga tidak ada dalam cuplikan</div>
<!-- semua nilai diabaikan -->
```

```html
<p>Teks ini dapat ditampilkan dalam cuplikan
<span data-nosnippet>dan bagian ini tidak akan ditampilkan</span>.</p>
```