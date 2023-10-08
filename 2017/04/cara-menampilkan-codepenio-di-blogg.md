---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-04-20T13:39:00.001+07:00
description: Cara menampilkan codepen.io di blog Bagaimana cara menampilkan codepen.io di blog. Nah kali ini banyak mungkin yang minat dengan trik ini. Karena embbed codepen
lang: id
tags:
  - html
  - js
thumbnail: https://res.cloudinary.com/css-tricks/images/f_auto,q_auto/v1637697874/embed-builder-overview/embed-builder-overview.png?_i=AA
title: Cara menampilkan codepen.io di blog
type: post
updated: 2023-10-08T14:35:00+07:00
---

## Bagaimana cara menampilkan codepen.io di blog.

![](https://res.cloudinary.com/css-tricks/images/f_auto,q_auto/v1637697874/embed-builder-overview/embed-builder-overview.png?_i=AA)

Nah kali ini banyak mungkin yang minat dengan trik ini. Karena embbed codepen hanya di peruntukkan user premium. Lalu bagaimana cara menampilkan kode kita yang sudah di edit dari codepen.io ke blog kita ?.

Mari kita mulai.



1\. Mula mula kita harus daftar di codepen.io dulu, lalu membuat atau mengedit sesuatu kode (Html css js) di codepen.io dan bila selesai di save.

2\. Lihat bagian URL address browser anda. Contohnya seperti ini ->  `http://codepen.io/msvbg/pen/sGIof`

URL codepen.io kita seperti berikut formatnya -> `https://codepen.io/USERNAME/pen/KODE_UNIK`


Lalu ubah url anda seperti ini -> `http://codepen.io/USERNAME/embed/KODE\_UNIK?height=TINGGI&slug-hash=KODE\_UNIK&default-tab=TARGET&host=http%3A%2F%2Fcodepen.io`

**Misalkan:**

**1\. Menampilkan Result Sebagai Tab Utama**
`http://codepen.io/msvbg/embed/sGIof?height=300&slug-hash=sGIof&default-tab=result&host=http%3A%2F%2Fcodepen.io`

**2\. Menampilkan HTML Sebagai Tab Utama**
 `http://codepen.io/msvbg/embed/sGIof?height=300&slug-hash=sGIof&default-tab=html&host=http%3A%2F%2Fcodepen.io`

**3\. Menampilkan CSS Sebagai Tab Utama.**
`http://codepen.io/msvbg/embed/sGIof?height=300&slug-hash=sGIof&default-tab=css&host=http%3A%2F%2Fcodepen.io`

**4\. Menampilkan JAVASCRIPT Sebagai Tab Utama.**
`http://codepen.io/msvbg/embed/sGIof?height=300&slug-hash=sGIof&default-tab=javascript&host=http%3A%2F%2Fcodepen.io`

**5\. Menampilkan Dengan Tingi 500px**
`http://codepen.io/msvbg/embed/sGIof?height=500&slug-hash=sGIof&default-tab=result&host=http%3A%2F%2Fcodepen.io`

**Deskripsi**

**USERNAME: msvbg**

**KODE_UNIK: sGIof**

**TINGGI: 300 (** _dihitung dalam pixels/px_ **)**

**TARGET: Tab yang akan ditampilkan diawal atau default.**

**Pertanyaan:** Kenapa tidak menggunakan HTTPS protokol ?. Karena beberapa website atau apalah itu yang tidak memiliki syarat shah di rules codepen.io maka iframe anda tidak akan tampil di website anda. Namun bila anda menggunakan HTTP coba aja ubah ke HTTPS kalo bisa ya alhamdulillah.

**Selesai. Semoga artikel ini membantu permasalahan anda atau keingintahuan anda. Bantu share yah....**

> **Peringatan:** bila mengcopy artikel yang ada di website ini anda harus memberikan url source ke url source artikel kami. Karena kami sudah mendaftarkan blog ini ke DMCA dan COPYSCAPE. Bila anda menggunakan adsense siap-siap saja akan saya dropdown blog anda, dan di banned dari adsense. Selamat terbanned.