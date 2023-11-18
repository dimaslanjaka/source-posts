---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-09-29T19:24:00.000Z
description: Salah satu sifat CSS yang paling ditunggu
  adalahborder-radius.Perancang web tidak lagi harus menggunakan struktur tabel
  yang rumit
lang: en
tags:
  - css
thumbnail: http://cdn.the-art-of-web.com/images/moz-border-radius.gif
title: border-radius dan -moz-border-radius
type: post
updated: 2023-09-02T23:30:22.000Z
wordcount: 3867

---

Salah satu sifat CSS3 yang paling ditunggu adalah border-radius . Perancang web tidak lagi harus menggunakan struktur tabel yang rumit menggunakan grafik sudut khusus atau termasuk file JavaScript misterius untuk menghasilkan desain dengan sudut yang membulat.

Sementara Internet Explorer sebelum IE9 tidak mendukung banyak (atau ada) sifat CSS lanjutan, Mozilla (Firefox dan peramban terkait) dan WebKit ( [mesin peramban web](http://translate.googleusercontent.com/translate_c?depth=2&nv=1&rurl=translate.google.com&sl=en&sp=nmt4&tl=id&u=http://webkit.org/&usg=ALkJrhg8OjzZK3784vVm2LBZMLOgPuyHOw) Apple yang digunakan di [Safari](http://translate.googleusercontent.com/translate_c?depth=2&nv=1&rurl=translate.google.com&sl=en&sp=nmt4&tl=id&u=http://www.apple.com/safari/&usg=ALkJrhh6t9I6gY5IeWmOfLkwtQhirf1cyg) dan [Chrome](http://translate.googleusercontent.com/translate_c?depth=2&nv=1&rurl=translate.google.com&sl=en&sp=nmt4&tl=id&u=http://www.google.com/chrome&usg=ALkJrhhFc-prLIUde8NtoZSmag_eOjuFsQ) ) dan Opera telah mendukungnya selama bertahun-tahun.

**Awalan vendor ( \-moz , \-webkit ) sekarang tidak lagi diperlukan untuk rilis peramban terbaru karena mereka semua mengadopsi sintaks CSS3 resmi.**

1. Definisi dan sintaks untuk border-radius
-------------------------------------------

Seperti banyak properti CSS yang berkaitan dengan margin, padding dan border, ada empat properti individual - satu untuk setiap sudut elemen kotak - dan satu properti singkat. Masing-masing atribut sudut akan menerima satu atau dua nilai.Properti border-radius akan menerima hingga dua nilai di browser WebKit dan sampai delapan sekarang di Firefox 3.5.

Berikut adalah atribut khusus CSS dan browser yang dimaksud:

CSS3

Setara Mozilla

Setara dengan WebKit

border-top-right-radius

\-moz-border-radius-topright

\-webkit-border-top-right-radius

border-bottom-right-radius

\-moz-border-radius-bottomright

\-webkit-border-bottom-right-radius

border-bottom-left-radius

\-moz-border-radius-bottomleft

\-webkit-border-left-left-radius

radius batas kiri atas

\-moz-border-radius-topleft

\-webkit-border-top-left-radius

border-radius

\-moz-border-radius

\-webkit-border-radius

Sebelum IE9, properti CSS3 ini **tidak berfungsi di Internet Explorer** . Versi 'Mozilla' bagaimanapun bekerja dengan sangat baik di Firefox dan browser berbasis Mozilla lainnya dan 'WebKit' di Safari dan Chrome serta iPhone / iPad.

Masing-masing sudut CSS3 properti mengambil satu atau dua nilai _panjang_ (umumnya nilai 'px' atau 'em'). Jika satu nilai diberikan maka itu menjadi radius sudut yang membulat. Jika dua nilai diberikan maka mereka menjadi radius horizontal dan vertikal untuk sudut elips.

Sintaks Mozilla sebelum Firefox 3.5 hanya mendukung sudut bulat (berlawanan dengan elips) dan menambahkan nilai kedua akan menghasilkan sudut persegi standar.

Properti border-radius di WebKit menerima satu atau dua nilai dan menggunakannya untuk membuat gaya keempat penjuru membuat bentuk simetris yang bagus. [Sintaks Firefox yang baru](http://translate.googleusercontent.com/translate_c?depth=2&nv=1&rurl=translate.google.com&sl=en&sp=nmt4&tl=id&u=http://www.the-art-of-web.com/css/border-radius/&usg=ALkJrhgPcL3jYr_vlupRO8lUXDIt6H_zqw#firefox_35) memungkinkan Anda mendefinisikan empat sudut bulat atau elips yang berbeda. Garis miring telah diperkenalkan untuk memisahkan pengaturan _panjang_ horizontal dan vertikal.

Tidak ada solusi CSS murni untuk sudut membulat di IE8 atau browser primitif lainnya. Hanya berbagai tambalan JavaScript yang bisa ditemukan dengan mencari secara online.

2. Menggunakan -moz-border-radius di Mozilla (Firefox)
------------------------------------------------------

Contoh berikut hanya akan bekerja jika Anda menggunakan Firefox atau browser Mozilla lainnya yang mendukung \-moz-border-radius properties.

Contoh 1

`-moz-border-radius: 1em;`  

Contoh 2

`-moz-border-radius-topright: 2em; -moz-border-radius-topleft: 2em;`  

Contoh 3

`-moz-border-radius: 2em 0;`  

Contoh 4

`-moz-border-radius: 3em 1em;`  

Properti Mozilla yang digunakan di sini **tidak** sesuai dengan standar (dengan demikian _\-moz-_ awalan) dan sampai Firefox 3.5 hanya mendukung sudut bulat. Di versi yang lebih baru dari sudut elips Firefox juga dimungkinkan.

Seperti beberapa orang telah menunjukkan sifat-sifat ini dapat digunakan tidak hanya untuk 'kotak' tapi juga untuk banyak objek HTML lainnya termasuk elemen bentuk.

Bagi anda yang masih melihat pojok persegi, berikut adalah cuplikan dari [Firefox yang](http://translate.googleusercontent.com/translate_c?depth=2&nv=1&rurl=translate.google.com&sl=en&sp=nmt4&tl=id&u=http://www.mozilla.com/firefox/&usg=ALkJrhgcpswFVtoIrGc_dWfB3_QLtB3A9g) menunjukkan efek sudut membulat:

![](http://cdn.the-art-of-web.com/images/moz-border-radius.gif)

Ada sejumlah solusi JavaScript yang rumit yang memungkinkan border-radius dan properti CSS3 lainnya dapat dilihat di Internet Explorer dan browser lainnya - namun biaya overhead tidak benar-benar membenarkan hasilnya.

3. Menggunakan -webkit-border-radius di Safari (Webkit)
-------------------------------------------------------

Versi terbaru Safari sekarang mendukung \-webkit-border-radius . Sebelumnya hanya 'nightly builds' yang berisi fungsi ini Di Opera, sintaks untuk sudut-sudutnya sama seperti di Safari, namun perilaku border-radius dengan dua nilai sama dengan Firefox, seperti yang terlihat pada Contoh # 7 di bawah ini:

Contoh 5

`-webkit-border-radius: 1em;`  

Contoh 6

`-webkit-border-top-right-radius: 24px; -webkit-border-top-left-radius: 24px;`  

Contoh 7

`-webkit-border-radius: 24px 0;`  

Contoh 8

`-webkit-border-radius: 36px 12px;`  

Contoh 9

`-webkit-border-top-right-radius: 50px 30px; -webkit-border-bottom-right-radius: 50px 30px;`  

Bagi Anda yang masih melihat sudut persegi, di bawah ini Anda dapat menemukan cuplikan dari WebKit yang menunjukkan efek sudut membulat. Perhatikan terutama perubahan sintaks dan efek melewatkan dua nilai ke -webkit-border-radius dibandingkan dengan contoh \-moz-border-radius di atas.

![](http://cdn.the-art-of-web.com/images/border-radius.gif)

WebKit juga memiliki dukungan terbatas untuk properti border CSS3 lainnya seperti: multiple background; gambar latar belakang; dan berbagai penyeleksi lanjutan ( ::select misalnya) menjadikannya platform uji coba yang bagus untuk pengembang berwawasan ke depan. Nantikan blog Surfin 'Safari yang terhubung di bawah ini untuk perkembangan terbaru yang menarik.

4. Efek khusus lainnya
----------------------

WebKit, Firefox dan Opera sekarang mendukung sejumlah fitur CSS3 lainnya, termasuk efek dan transformasi sederhana berikut ini. Syukurlah, tidak seperti sudut membulat, untuk bayang-bayang dan transformasi, nampaknya ada kesepakatan mengenai sintaks yang sama.

#### \-webkit-kotak-bayangan

Contoh bayangan

`-webkit- border-radius: 36px 12px; -moz- border-radius: 36px / 12px; border-radius: 36px / 12px; box-shadow: 2px 2px 6px rgba(0,0,0,0.6);`  

Jelas masih ada beberapa masalah anti-aliasing, tapi untuk sudut dan lekuk lembut itu bisa terlihat keren banget.

Lalu ada berbagai opsi \-webkit-transform yang bisa digunakan untuk menciptakan segala macam bentuk aneh dan indah:

#### \-webkit-transform: memutar ()

Putar contoh

`-webkit- border-radius: 36px 12px; -moz- border-radius: 36px / 12px; border-radius: 36px / 12px; -webkit- transform: rotate(-5deg);`  

#### \-webkit-transform: condong ()

Contoh miring

`-webkit- border-radius: 36px 12px; -moz- border-radius: 36px / 12px; border-radius: 36px / 12px; -webkit- transform: skew(5deg,5deg);`  

Untuk browser-impaired disini adalah screenshot dari Safari yang menunjukkan efek dari aturan CSS ini. Efek yang sama sekarang mungkin dilakukan di Firefox, Opera dan browser terkait. Ganti saja \-webkit dengan \-moz atau \-o , kecuali border-radius dan box-shadow dimana Opera tidak menggunakan awalan.

![](http://cdn.the-art-of-web.com/images/webkit-effects.gif)

Juga di Safari ini dan transformasi lainnya dapat diimplementasikan sebagai [animasi](http://translate.googleusercontent.com/translate_c?depth=2&nv=1&rurl=translate.google.com&sl=en&sp=nmt4&tl=id&u=http://www.the-art-of-web.com/css/css-animation/&usg=ALkJrhhM_gdfYq7qFaYRCQAl_SkudOfgYw) dengan hanya menggunakan efek CSS yang dipicu oleh melayang di atas elemen - tidak diperlukan JavaScript.

5. Properti pendek baru
-----------------------

Sintaks berikut sekarang bekerja di Firefox dan Opera yang memungkinkan Anda untuk menentukan tidak hanya mencocokkan sudut elips, tapi juga sudut elips yang berbeda dalam satu properti singkat.

Di sini kita telah menciptakan dua contoh WebKit di atas dengan menggunakan sintaks baru. Anda dapat melihat bahwa pengaturan sudut individu bekerja sama persis sekarang di Firefox seperti di WebKit, namun untuk properti singkat yang Anda butuhkan untuk menyertakan garis miring:

Contoh 8

`border-radius: 36px / 12px;`  

Contoh 9

`border-radius-topright: 50px 30px; border-radius-bottomright: 50px 30px;`  

Dan sekarang ke bagian yang menakutkan. Dengan menggunakan properti tangan pendek, semua nilai sebelum garis miring berlaku untuk jari-jari horizontal dan semua nilai kemudian ke vertikal. Dalam contoh ini kita telah membuat hibrida dari dua contoh sebelumnya.

Contoh 10

`border-radius: 36px 50px 50px 36px / 12px 30px 30px 12px`  

Di sini Anda bisa melihat seperti apa kotak-kotak ini di Firefox 3.5:

![](http://cdn.the-art-of-web.com/images/firefox-wonky.gif)

Dengan semua browser utama yang sekarang menggunakan sintaks yang sama, prefiks vendor telah dilepas dan standarnya sepertinya ada di batu.

6. Daftar dengan sudut membulat
-------------------------------

Berikut adalah contoh bagus daftar unordered (UL) yang ditandai menggunakan CSS untuk menerapkan radius perbatasan hanya pada sudut luar elemen pertama dan terakhir:

*   bulat
*   sudut
*   pertama & terakhir
*   elemen

Markup CSS adalah sebagai berikut:

`<style type="text/css"> ul.rounded { margin: 0; padding: 0; width: 200px; background: #ababab; border-radius: 1em; box-shadow: 2px 2px 4px #666; } ul.rounded li { display: block; margin: 0 0 1px; padding: 4px 12px; background: #dedede; transition: 0.2s; } ul.rounded li:first-child { border-radius: 1em 1em 0 0; } ul.rounded li:last-child { border-radius: 0 0 1em 1em; } ul.rounded li:hover { padding-left: 20px; background: #efefef; } </style>`  

Markup HTML adalah untuk elemen daftar UL standar dengan class="rounded".

Dengan memanfaatkan first-child and last-child kita harus mengidentifikasi unsur-unsur mana yang harus menerapkan radius perbatasan di dalam HTML kita.