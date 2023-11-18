---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2017-10-20T03:46:00.000Z
description: Cara Menggunakan Google Search Console Tutorial ini akan
  menunjukkan cara mengirimkan situs Anda ke Google Google search console,
  bersama dengan file sitemap An
lang: en
tags:
  - wordpress
  - seo
  - blogging
  - tips & tricks
thumbnail: https://cdn.woorkup.com/wp-content/uploads/2013/09/submit-website-to-google.png
title: Cara Menggunakan Google Search Console
type: post
updated: 2023-08-08T07:45:44.000Z
wordcount: 1488

---

![submit website ke google](https://cdn.woorkup.com/wp-content/uploads/2013/09/submit-website-to-google.png)

Tutorial ini akan menunjukkan cara mengirimkan situs Anda ke Google (Google search console), bersama dengan file sitemap Anda. Pertama Anda harus memiliki file sitemap yang dibuat. Jika Anda belum melakukan ini, silakan lihat artikel saya di [Cara Membuat File Peta Situs untuk Situs WordPress Anda](https://webmanajemen.com/search/?q=%20%20%20%20%20%20%20%20Cara%20Membuat%20File%20Peta%20Situs%20untuk%20Situs%20WordPress%20Anda "Cara Membuat File Peta Situs untuk Situs WordPress Anda") atau [Cara Membuat File Peta Situs untuk Situs Web HTML Anda](https://webmanajemen.com/search/?q=Cara%20Membuat%20File%20Peta%20Situs%20untuk%20Situs%20Web%20HTML%20Anda "Cara Membuat File Peta Situs untuk Situs Web HTML Anda").  

Cara Mengirimkan Situs ke Google
--------------------------------

### Langkah 1

Pertama, kami akan menuju ke situs web Google Search Console (sebelumnya Google Webmaster Tools) dan masuk dengan akun Google Anda. (http://www.google.com/webmasters/tools/) Jika Anda tidak memiliki akun Google, Anda dapat mendaftar secara gratis.  

### Langkah 2

Kami sekarang perlu menambahkan situs Anda. Klik pada tombol berlabel "Add A Site" dan kemudian masukan nama situs Anda.  
![tambahkan situs google search console](https://cdn.woorkup.com/wp-content/uploads/2013/09/add-website-google-search-console.png)  

### Langkah 3

Sekarang akan meminta Anda untuk memverifikasi situs Anda. Ada beberapa pilihan untuk dipilih.Sebaiknya tambahkan meta tag ke situs web Anda. Jadi klik ke tab "Metode Alternatif" dan pilih opsi "tag HTML".  
![memverifikasi google search console](https://cdn.woorkup.com/wp-content/uploads/2013/09/verifying-google-search-console.png)  

### Langkah 4

Sekarang kita perlu menyalin meta tag itu dan memasukkannya ke dalam header situs Anda. Jika Anda menjalankan WordPress, saya sangat menyarankan untuk menginstal plugin [WordPress SEO](https://translate.googleusercontent.com/translate_c?depth=2&nv=1&rurl=translate.google.com&sl=en&sp=nmt4&tl=id&u=https://wordpress.org/plugins/wordpress-seo/&usg=ALkJrhhsLiVV0T1LDcTgw2wXijeZ8gtOrg) . Setelah terinstal, turun ke bagian "SEO" dan klik di dasbor. Tempelkan tag meta Google Anda ke bagian Alat Webmaster di bawah "Google Search Console" dan klik "Simpan Perubahan".  
![Menambahkan Google Search Console Meta Tag di WordPress SEO](https://cdn.woorkup.com/wp-content/uploads/2013/09/adding-google-search-console-meta-tag-wordpress-SEO.png)  
Anda bisa mengganti `header.php file` Anda di WordPress dengan membuka bagian "Appearance> Editor" dan mengklik file `header.php`Anda. Lalu paste di tag meta Google setelah head tag. Kemudian klik "Save Settings." (Saya sangat menyarankan untuk mencadangkan file header Anda sebelum mengeditnya)  
![menambahkan google search console meta tag header wordpress](https://cdn.woorkup.com/wp-content/uploads/2013/09/adding-google-search-console-meta-tag-wordpress-header.png)  
Jika Anda tidak menjalankan WordPress, cukup letakkan tag meta ke bagian header situs web Anda.  

### Langkah 5

Setelah tag meta ditambahkan ke situs web Anda, kembalilah ke Google Webmaster Tools dan klik tombol "Verifikasi". Anda harus melihat tanda centang hijau jika berhasil diverifikasi.Catatan: Anda mungkin perlu menghapus cache di situs WordPress Anda sebelum Google dapat melihat tag verifikasi Anda.  
![verifikasi google search console](https://cdn.woorkup.com/wp-content/uploads/2013/09/google-search-console-verify.png)  

### Langkah 6

Sekarang kita akan klik ke bagian "Crawl" dan klik "Peta Situs."  
![Sitemaps konsol pencarian google](https://cdn.woorkup.com/wp-content/uploads/2013/09/google-search-console-sitemaps.png)  

### Langkah 7

Sekarang kita perlu menambahkan file sitemap anda. Klik pada tombol "Add / Test Sitemap" di kanan atas. Masukkan URL peta situs Anda dan klik "Kirim Peta Situs." Peta situs Anda kemungkinan besar terletak di akar URL Anda, contoh https://woorkup.com/sitemap\_index.xml. Tapi Anda selalu bisa mengujinya juga.  
![google search console submit sitemap](https://cdn.woorkup.com/wp-content/uploads/2013/09/google-search-console-submit-sitemap.png)  
Untuk menemukan alamat sitemap Anda, Anda bisa mengklik "Peta Situs" di bawah plugin Yoast SEO. Kemudian klik kanan pada sitemap "XML sitemap" dan pilih copy link address. Anda juga bisa mengkliknya dan menyalin alamat dari address bar Anda.  
![salin alamat sitemap](https://cdn.woorkup.com/wp-content/uploads/2013/09/copy-sitemap-address.png)  
Sekarang Anda dapat melihat status sitemap dan kesalahan yang mungkin muncul. Saya selalu menyarankan untuk menunggu sekitar satu hari sebelum melihat jika sitemap Google Search Console Anda diproses dengan benar. Ini akan menunjukkan berapa banyak halaman / posting yang telah dikirim dan berapa banyak yang sebenarnya terindeks. Google sekarang akan secara otomatis merayapi file peta situs Anda secara teratur.  
![peta pencarian google sitemap diproses](https://cdn.woorkup.com/wp-content/uploads/2013/09/google-search-console-sitemap-processed.png)  
Juga pastikan untuk memeriksa posting saya saat mengirimkan [file sitemap ke Yandex](https://webmanajemen.com/search/?q=Cara%20Menggunakan%20Yandex%20Webmaster%20Tools "Cara Mengirimkan Situs Anda ke Google Webmaster Tools") dan [Bing](https://webmanajemen.com/search/?q=Cara%20Menggunakan%20Bing%20Webmaster%20Tools "Cara Mengirimkan Situs Anda ke Bing Webmaster Tools").  
Seperti biasa merasa bebas untuk meninggalkan komentar Anda di bawah ini!