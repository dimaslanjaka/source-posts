---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-04-11T18:34:00.000Z
description: CSS Rollover Efek Gambar Ganti Gambar pada gambarHoverRollover
  adalah fitur desain di mana gambar berubah ketika mouse melayang di
lang: en
tags:
  - css
  - html
thumbnail: https://3.bp.blogspot.com/-JOfTRWkg06Y/V_z6BpgKHjI/AAAAAAAAL3M/vF_yc-oNkd8BjbQOElXOiHEx7Jj93k25wCLcB/s200/css-rollover-image-change-on-hover.png
title: Cara membuat Rollover Images Dengan CSS
type: post
updated: 2023-09-02T23:13:58.000Z
wordcount: 2263

---

CSS Rollover Efek Gambar - Ganti Gambar pada gambar 
====================================================

HoverRollover adalah fitur desain di mana gambar berubah ketika mouse melayang di atasnya. Pikirkan sebuah bola lampu yang menyala dan mati ketika Anda memindahkan kursor mouse Anda ke dalam area halaman. Ketika halaman sedang loading, gambar rollover dimuat ke dalamnya untuk Pastikan bahwa efek rollover ditampilkan dengan cepat intervening.This digunakan untuk diimplementasikan menggunakan JavaScript, yang cukup mudah dengan hanya sejumlah kecil script Terlibat. Untuk membuat gambar rollover fungsional, onmouseover dan onmouseout atribut yang digunakan untuk tag link. Kode ini kemudian ditambahkan ke blog gadget atau ke dalam posting baru. Hal ini terbukti memiliki sejumlah kelemahan, namun, yang mengapa banyak pengembang web menggunakan metode CSS-satunya.
================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

  

![css rollover image](https://3.bp.blogspot.com/-JOfTRWkg06Y/V_z6BpgKHjI/AAAAAAAAL3M/vF_yc-oNkd8BjbQOElXOiHEx7Jj93k25wCLcB/s200/css-rollover-image-change-on-hover.png "CSS Rollover Image Effect")

  

Cara membuat Gambar Rollover Menggunakan CSS.
---------------------------------------------

Berikut adalah cara untuk menerapkan _gambar_ _rollover_ menggunakan CSS.  
  

#### The Image

Tempatkan kedua _gambar_ _statis_ dan _rollover_ dalam satu file dan memastikan bahwa gambar rollover ditempatkan di atas satu statis. Untuk mencapai efek rollover, kami akan menulis kode untuk menampilkan gambar statis dan memotong gambar hover, sehingga negara hanya satu gambar yang ditampilkan pada suatu waktu.  
  
Untuk tutorial ini, kita akan menggunakan berikut sebagai gambar CSS rollover.  
  

![html rollover image](https://1.bp.blogspot.com/-NtrjKUd-0fs/V_ewyJEdB_I/AAAAAAAAL28/D3OfCvvRv4oADehdckX0d919xFeggWZOwCLcB/s180/rollover-image-light-bulb-on-off.png "CSS Rollover Image ")

  

### Membuat HTML jangkar Elemen untuk Gambar

Alih-alih menambahkan file gambar dalam tag <img, kami akan menampilkannya sebagai gambar latar belakang dari sebuah tag (anchor):  
  

> <a class="rolloverimage" href="#URL">Rollover Image</a>

  
Note: if you want to make the image clickable, replace #URL with the url of the webpage where you want the link to point to.  
  

### Menggunakan CSS untuk menentukan background image.

  
Untuk menciptakan efek mouseover gambar, kami akan menggunakan: hover CSS pseudo-kelas. Kemudian, kita akan menggunakan properti background-posisi dan menetapkan nilai-nilai ke 0 0 untuk memindahkan gambar latar belakang ke sudut kiri atas yang akan menciptakan efek rollover.  

> <style type="text/css">  
> .rolloverimage{  
> display: block;  
> width: 56px;  
> height: 90px;  
> background: url('https://1.bp.blogspot.com/-NtrjKUd-0fs/V\_ewyJEdB\_I/AAAAAAAAL28/D3OfCvvRv4oADehdckX0d919xFeggWZOwCLcB/s180/rollover-image-light-bulb-on-off.png') bottom;  
> text-indent: -99999px;  
> }  
> .rolloverimage:hover{  
> background-position: 0 0;  
> }  
> </style>

Catatan: Ganti teks warna biru dengan url dari file gambar Anda. Silahkan membayar perhatian pada lebar dan tinggi nilai-nilai ditandai dengan warna merah, ini harus berbeda tergantung pada file Anda, di mana nilai tinggi adalah untuk hanya satu gambar dan tidak seluruh file gambar!  
  

#### Hasilnya

Arahkan kursor mouse bola lampu untuk melihat efek rollover image dalam tindakan:  
  
   [The Demo Results](https://jsfiddle.net/dimaslanjaka/sjh3bnz8/1/) (Click To View The Result)  
  
Menambahkan Rollover Image untuk Blogger.