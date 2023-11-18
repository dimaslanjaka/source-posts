---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2017-10-18T16:00:00.000Z
description: Cara Membuat File Peta Situs untuk Situs Anda
lang: en
tags:
  - wordpress
  - seo
  - blogging
thumbnail: https://cdn.woorkup.com/wp-content/uploads/2013/09/wordpress-sitemap.png
title: Cara Membuat File Peta Situs untuk Situs Anda
type: post
updated: 2023-08-08T07:45:45.000Z
wordcount: 2042

---

Cara Membuat File Peta Situs untuk Situs Anda
=============================================

![](https://cdn.woorkup.com/wp-content/uploads/2013/09/wordpress-sitemap.png)

Dalam tutorial ini saya akan menunjukkan cara membuat file sitemap WordPress (contoh sitemap\_index.xml) untuk situs Anda.Peta situs digunakan oleh Google, Bing, dan Yandex sebagai hierarki untuk situs web Anda. Saya sangat menyarankan meluangkan waktu untuk membuatnya dan mengirimkannya dengan benar ke Google, Bing, dan Yandex. Jika Anda tidak menjalankan WordPress, lihat tutorial saya yang lain tentang " [Cara Membuat File Peta Situs secara Manual untuk Situs Anda](https://webmanajemen.com/search/?q=Cara%20Membuat%20File%20Peta%20Situs%20untuk%20Situs%20Web%20HTML%20Anda "Cara Membuat File Peta Situs untuk Situs Web HTML Anda") ." Menyiapkan file sitemap Anda di WordPress sangat mudah, namun saya sering ditanya pertanyaan ini berkali-kali yang saya ambil. waktu untuk posting itu

Membuat File Peta Situs WordPress
---------------------------------

### Langkah 1

Langkah pertama adalah memasang plugin WordPress " [WordPress SEO by Yoast](https://wordpress.org/plugins/wordpress-seo/&usg=ALkJrhhsLiVV0T1LDcTgw2wXijeZ8gtOrg "WordPress SEO oleh Yoast") ." Ini adalah plugin yang selalu saya rekomendasikan untuk menghasilkan file sitemap Anda jika Anda menjalankan WordPress, dan ini benar-benar gratis. Saya telah menggunakan plugin ini di ratusan instalasi WordPress selama 10 tahun terakhir. Saat ini digunakan oleh situs WordPress di seluruh dunia dan memiliki lebih dari 1 juta pemasangan aktif.

[![yoast seo](https://cdn.woorkup.com/wp-content/uploads/2013/09/yoast-seo.jpg)](https://translate.googleusercontent.com/translate_c?depth=2&nv=1&rurl=translate.google.com&sl=en&sp=nmt4&tl=id&u=https://wordpress.org/plugins/wordpress-seo/&usg=ALkJrhhsLiVV0T1LDcTgw2wXijeZ8gtOrg)

Jadi di WordPress, mari kita pergi ke bagian Plugins dan klik "Add New." Kemudian kita akan mengetikkan "WordPress SEO" dan klik "Search Plugins."

![wordpress menambahkan plugin baru](https://cdn.woorkup.com/wp-content/uploads/2013/09/wordpress-add-new-plugin.png)

### Langkah 2

Sekarang kita akan klik "Install Now" di plugin WordPress SEO oleh Yoast ._(Saya selalu merekomendasikan untuk memback up WordPress sebelum menginstal plugin apapun, hanya untuk menjadi aman. Atau setidaknya sudah ada akses FTP)_

![pasang wordpress seo dengan yoast](https://cdn.woorkup.com/wp-content/uploads/2013/09/install-wordpress-seo-by-yoast.jpg)

### Langkah 3

Sekarang klik "Activate Plugin."

![aktifkan yoast seo](https://cdn.woorkup.com/wp-content/uploads/2013/09/activate-yoast-seo.jpg)

### Langkah 4

Sekarang kita akan menuju ke "SEO" di sisi kiri dan klik ke "XML Sitemaps."

![wordpress seo xml sitemaps](https://cdn.woorkup.com/wp-content/uploads/2013/09/wordpress-seo-xml-sitemaps.jpg)

### Langkah 5

Sekarang kita akan memastikan fungsi sitemap XML diatur pada "enabled." Ini harus diaktifkan secara default setelah Anda menginstal plugin.

![aktifkan sitemap xml wordpress](https://cdn.woorkup.com/wp-content/uploads/2013/09/enable-wordpress-xml-sitemap.jpg)

### Langkah 6

Sekarang klik pada "XML Sitemap" tombol dan terbuka hanya untuk memverifikasi bahwa hak akses direktori untuk menulis file bekerja dan bahwa file terlihat ok.

![konfirmasi file peta situs](https://cdn.woorkup.com/wp-content/uploads/2013/09/confirm-sitemap-file.jpg)

Catatan: Jika dikatakan file tersebut tidak dapat ditemukan maka coba nonaktifkan pilihan sitemap, simpan, dan kemudian aktifkan kembali pilihan sitemap.Saya harus melakukan ini kadang-kadang pada instalasi pertama.

File peta situs Anda harus menampilkan daftar halaman / posting Anda dan akan terlihat seperti ini. Hal ini kemungkinan besar terletak di akar situs Anda, contoh: https://woorkup.com/sitemap\_index.xml. Ini bukan file fisik yang sebenarnya. Ini secara dinamis dihasilkan dengan cepat dengan PHP.

![xml wordpress sitemap](https://cdn.woorkup.com/wp-content/uploads/2013/09/xml-sitemap-file-yoast-seo.jpg)

Plugin ini akan mengupdate file secara otomatis setiap kali Anda membuat / update halaman atau postingan di WordPress. Jadi tidak perlu lagi membuat file ini secara manual lagi.

Sekarang setelah file sitemap Anda dibuat, pastikan untuk memeriksa posting tambahan saya tentang cara mengirimkannya dengan benar.

Perhatikan juga: Google masih akan [mengindeks situs Anda tanpa peta situs](https://productforums.google.com/forum/%3Fhl%3Den&usg=ALkJrhgbhSmGPqN0lXtBG2jEdbJDL5aA0Q#!category-topic/webmasters/crawling-indexing--ranking/_cA46A_RMTQ) , namun data yang dapat Anda lihat di Google Search Console bisa sangat bermanfaat.