---
author:
  nick: Dimas Lanjaka
  link: ""
  email: noreply@blogger.com
categories:
  - programming
comments: true
cover: https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0Jbr1UikPXCMcKYhYI8In9l8ajc_-DJiJInkoPOmc0t4Vi3zz
date: 2017-04-30T01:34:00+07:00
description: Bagaimana Cara mempercepat loading blogger AMP maupun NON AMP.
  Langkah awal mempercepat loading <b>AMP Blogger</b> maupun
keywords:
  - Mempercepat loading blog dengan dns-prefetch
  - prefetching external script dan css
  - Mempercepat loading AMP Blogger
  - Mempercepat loading blog tahap awal
  - link rel="dns-prefetch" blogger
  - Bagaimana cara mempercepat loading blog dengan link metatag
  - Bagaimana cara mempercepat loading blogger AMP maupun NON AMP
lang: id
photos:
  - https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0Jbr1UikPXCMcKYhYI8In9l8ajc_-DJiJInkoPOmc0t4Vi3zz
tags:
  - blogger
  - html
  - amp
thumbnail: https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0Jbr1UikPXCMcKYhYI8In9l8ajc_-DJiJInkoPOmc0t4Vi3zz
title: Cara Mempercepat Blogger Dengan dns-prefetch metatag
type: post
updated: 2023-09-03T04:28:47+07:00
wordcount: 581
---

<b>Bagaimana Cara mempercepat loading blogger AMP maupun NON AMP.</b>

* * * * *
Langkah awal mempercepat loading ___AMP Blogger___ maupun Blogger dengan template biasa (mengandung javascript).
* * * * *

Link <i>dns-prefetch</i> metatag merupakan metatags untuk mempercepat
loading external source. Dengan kata lain <i>defer loading external sources</i>.

Kali ini saya akan share bagaimana cara mempercepat lagi loading
<i>AMP Blogger</i> yang biasanya mengandung banyak
<i>&lt;amp-iframe&gt;</i>.<br><br>Ga pake lama, cekidot tutorialnya:<br><br>

1. Buka dashboard <i class="fa fa-blogger"></i> <b>Blogger</b>.
2. Klik tab <i>Layout</i> --&gt; klik <b>Edit HTML</b>.
3. Kemudian, taruh kode dibawah ini dibawah `<head>` atau diatas `</head>`.

```html
<link rel="dns-prefetch" href="https://cdn.ampproject.org"/>
```

Bila anda juga menggunakan fonts dari google cdn maka juga tambahkan:

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com"/>
```

Dan bila anda juga menggunakan <b>Fontawesome.css</b> dari
<i>https://netdna.bootstrapcdn.com/font-awesome/[VERSION]/css/font-awesome.css.</i>

Maka juga tambahakan kode dibawah ini:

```html
<link rel="dns-prefetch" href="https://netdna.boostrapcdn.com"/>
```

Bila digabungkan akan seperti ini:

```html
<link rel="dns-prefetch" href="https://cdn.ampproject.org"/>
<link rel="dns-prefetch" href="https://fonts.googleapis.com"/>
<link rel="dns-prefetch" href="https://netdna.boostrapcdn.com"/>
```

Untuk <b>HTML5</b> Markup seperti ini:

```html
<link href="https://cdn.ampproject.org" rel="dns-prefetch" />
```
```html
<link href="https://fonts.googleapis.com" rel="dns-prefetch" />
```
```html
<link href="https://netdna.boostrapcdn.com" rel="dns-prefetch" />
```

<b>Bedanya</b> HTML biasa dengan HTML5 cuma <mark>href</mark> yang di
dahulukan.

### Untuk kalian yang menggunakan template biasa

kalian juga bisa menerapkan teknik diatas cuman ganti saja <mark>href</mark> source nya dengan source external anda. <b>Malah lebih joss bila kalian juga menerapkan defer load javascript</b>. Baca
disini: <a href="https://webmanajemen.com/search?q=defer+javascript">Bagaimana cara defer javascript</a>.

Selesai. Semoga tulisan saya ini membantu kalian. :) . Jangan lupa
share yah...