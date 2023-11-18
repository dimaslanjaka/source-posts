---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-04-09T03:38:00.000Z
description: Dalam tutorial iniKita dapat memanipulasi lokasi iklan yang akan
  ditampilkan dengan menambahkan script dalam template dan menggunakan tag
lang: en
tags:
  - adsense
  - blogger
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://i1.wp.com/4.bp.blogspot.com/-Z4TdEbpcxn0/UthBZXiyPYI/AAAAAAAAF40/nwthnaxPQuw/s1600/insert-adsense-into-blogger-post.png?zoom=1.5&ssl=1
title: Bagaimana Tambahkan Iklan Adsense Di Tengah atau di mana saja di dalam
  Blogger Post
type: post
updated: 2023-09-02T23:13:51.000Z
wordcount: 2915

---

[![position of banner](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://res.cloudinary.com/practicaldev/image/fetch/4.bp.blogspot.com/-Z4TdEbpcxn0/UthBZXiyPYI/AAAAAAAAF40/nwthnaxPQuw/s1600/insert-adsense-into-blogger-post.png?zoom=1.5&ssl=1 "adsense positions")](https://res.cloudinary.com/practicaldev/image/fetch/4.bp.blogspot.com/-Z4TdEbpcxn0/UthBZXiyPYI/AAAAAAAAF40/nwthnaxPQuw/s1600/insert-adsense-into-blogger-post.png?zoom=1.5&ssl=1)

Dalam tutorial ini Kita dapat memanipulasi lokasi iklan yang akan ditampilkan dengan menambahkan script dalam template dan menggunakan tag di dalam posting kami di mana kami ingin iklan AdSense muncul. Setelah ditambahkan, kita dapat menempatkan iklan di mana saja, baik itu antara paragraf atau di tengah-tengah konten dll.  
  
  

Manual memasukkan iklan AdSense di tengah posting di Blogger cukup mudah, cukup ikuti langkah-langkah di bawah ini:

### Menambahkan Iklan Adsense Di Tengah atau di mana saja di dalam Blogger Post

Sebelum melanjutkan, dianjurkan untuk cadangan template Anda: pergi ke "Template" dan klik pada "/ restore Backup" tombol untuk menyimpan salinan di hard drive Anda.

#### Menambahkan script

  

Langkah 1. Hal pertama yang perlu kita lakukan adalah untuk mengurai kode Adsense dan mengubahnya menjadi teks biasa. Lalu pergi ke "Template", klik pada tombol "Edit HTML" dan klik di mana saja di dalam area kode untuk mencari menggunakan tombol CTRL + F untuk tag ini:

> <Data: post.body />

Catatan: Anda mungkin menemukan beberapa kali, tetapi kita perlu berhenti di satu detik. Atau, jika Anda tidak dapat melihat perubahan apapun, menguji sepertiga.

![how-to-add-adsense-ads-inside-blogger-post How to Add Adsense Ads In the Middle or Anywhere inside Blogger Posts](https://res.cloudinary.com/practicaldev/image/fetch/3.bp.blogspot.com/-txi86RJaWYk/Utg3xTPV_8I/AAAAAAAAF4Y/LTah2B86lYE/s1600/how-to-add-adsense-ads-inside-blogger-post.png?zoom=1.5&resize=330%2C197&ssl=1 "Bagaimana Tambahkan Iklan Adsense Di Tengah atau di mana saja di dalam Blogger Post")

Langkah 2. Ganti dengan kode ini:

> <Div expr: id = ' "adsmiddle1" + Data: post.id'> </ div> <B: if 'data: blog.pageType == "item"' = cond> <B: if 'Data: blog.pageType = & quot; static\_page & quot;' = cond> <Div style = "clear: both; margin: 10px 0"> <! - Tambahkan sini kode iklan Anda -> </ Div> </ B: if> </ B: if> <Div expr: id = ' "adsmiddle2" + Data: post.id'> <Data: post.body /> </ Div> <Script type = "text / javascript"> var obj0 = document.getElementById ( "adsmiddle1 <data: post.id/>"); var obj1 = document.getElementById ( "adsmiddle2 <data: post.id/>"); var s = obj1.innerHTML; var r = s.search (! / \\ x3C - adsense - \\ x3e / IgM); if (r> 0) {obj0.innerHTML = s.substr (0, r); obj1.innerHTML = s.substr (r + 16);} </ Script>

 Langkah 3. Tambahkan kode Adsense dikonversi pada di mana Anda melihat <! - Tambahkan sini kode iklan -> penjelasan, kemudian simpan perubahan dengan mengklik tombol "Simpan template".  

Catatan: Untuk berpusat iklan, tambahkan <center> </ center> tag sebelum dan setelah kode AdSense, seperti ini:

> <Div style = "clear: both; margin: 10px 0"> <center> <! - Tambahkan sini kode iklan Anda -> </ center> </ Div>

  
  

#### Menambahkan penjelasan AdSense untuk menampilkan iklan

Langkah 4. Ketika Anda membuat New Post, menambahkan penjelasan ini dalam "HTML" untuk mana Anda ingin iklan Google AdSense muncul:

> <! - adsense ->

Sebagai contoh:

> Ini adalah teks demo. Ini adalah teks demo. Ini adalah teks demo.Ini adalah teks demo. Ini adalah teks demo. Ini adalah teks demo.Ini adalah teks demo. Ini adalah teks demo. Ini adalah teks demo.Ini adalah demo teks. <br /> <br /> <! - adsense -> Ini adalah teks demo. Ini adalah teks demo. Ini adalah teks demo. Ini adalah teks demo. Ini adalah teks demo.Ini adalah teks demo. Ini adalah teks demo. Ini adalah teks demo.Ini adalah teks demo. Ini adalah teks demo.

  

![adding-adsense-inside-posts How to Add Adsense Ads In the Middle or Anywhere inside Blogger Posts](https://res.cloudinary.com/practicaldev/image/fetch/1.bp.blogspot.com/-hcAdKZfjRyg/Utg5FISx95I/AAAAAAAAF4k/ZbE-Dip3wkk/s1600/adding-adsense-inside-posts.png?zoom=1.5&resize=330%2C193&ssl=1 "Bagaimana Tambahkan Iklan Adsense Di Tengah atau di mana saja di dalam Blogger Post")

penjelasan AdSense di tengah-tengah isi posting

Perlu diketahui bahwa jika Anda tidak menambahkan penjelasan ini untuk menentukan di mana untuk menampilkan iklan, maka akan muncul di bawah judul secara default.

Jadi ini adalah bagaimana kita dapat menambahkan iklan AdSense di tengah atau di mana saja di dalam posting Blogger kami. Jangan khawatir tentang melanggar [Syarat Layanan Google](http://translate.googleusercontent.com/translate_c?depth=1&nv=1&rurl=translate.google.com&sl=auto&sp=nmt4&tl=id&u=http://l3n4r0xblog.cf/out/aHR0cHM6Ly9hZGYubHkvMTEwMjQ1NjEvaHR0cHM6Ly9zdXBwb3J0Lmdvb2dsZS5jb20vYWRzZW5zZS9hbnN3ZXIvMTM1NDczNj9obD1lbiZhbXA7cmVmX3RvcGljPTEyNzE1MDg%3D&usg=ALkJrhh5osxHpE2Dgf39CHkijm83ZVVAew) karena menerapkan metode ini tidak akan mengubah struktur iklan.