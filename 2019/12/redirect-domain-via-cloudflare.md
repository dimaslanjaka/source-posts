---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2019-12-04T21:03:00.000Z
description: Step .Migrasi domain host ke cloudflare dengan mengubah nameserver
  nyaBelum tahu caranya ? Klik tautanCara host domain ke
lang: en
tags:
  - seo
  - tips & tricks
thumbnail: https://1.bp.blogspot.com/-vaafAtA7fJ0/XegbZIw3CYI/AAAAAAAAAgg/0S7WeEzqKLg1nPSyrd1zJ-ZaVjXVORKZgCLcBGAsYHQ/s640/Screenshot_1.png
title: Cara redirect domain lama ke domain baru untuk SEO menggunakan Cloudflare
type: post
updated: 2023-08-08T07:45:15.000Z
wordcount: 379

---

Step 1.  
  
Migrasi domain (host) ke cloudflare dengan mengubah nameserver nya  
  
Belum tahu caranya ? Klik tautan [Cara host domain ke cloudflare](https://webmanajemen.com/search/?q=host+domain+cloudflare)  
  
Step 2.  
  
Set DNS point ke 192.0.2.1 sebagai dummy saja atau ip yang lain boleh, dan aktifkan **Proxied DNS**, seperti gambar berikut yang saya tandai mark kuning :  
![](https://1.bp.blogspot.com/-vaafAtA7fJ0/XegbZIw3CYI/AAAAAAAAAgg/0S7WeEzqKLg1nPSyrd1zJ-ZaVjXVORKZgCLcBGAsYHQ/s640/Screenshot_1.png)  
  
Step 3.  
  
Setup **Page Rules**.  
  

> Setup HTTP dan HTTPS secara terpisah untuk domain lama. Contoh milik saya: **webmanajemen.com**

![](https://1.bp.blogspot.com/-8UFKrpBeVuI/XegeaeZLNrI/AAAAAAAAAhI/zEQF27_xadQ113FMrPf1LtxR4xg9DLQygCLcBGAsYHQ/s640/Screenshot_1.png)

Screenshot 1 (http)

![](https://1.bp.blogspot.com/-XcZ4ifQNnnA/XegcYe4HtkI/AAAAAAAAAgs/5oSjgaP9gk0DAGTHF5xvHD-otMfKe9MCACLcBGAsYHQ/s640/Screenshot_1.png)

Screenshot 2 (https)

  
Keterangan diatas :  
Saya ingin meredirect http(s)://webmanajemen.com/\* ke https://www.webmanajemen.com/$1  
  
Setting Rules :  
 - Forwarding URL  
 - 301 - Permanent Redirect  
  
Keterangan (**\***) di URL pertama menandakan semua PATH dan QUERY url  
Keterangan **($1)** pada URL kedua menandakan FORWARDING dari (**\***) URL pertama  
  
**Selesai.**  
Tunggu minimal 30 menit agar Bekerja Dengan Sempurna.  
  
sekarang semua URL http(s)://webmanajemen.com/\* akan di redirect sepenuhnya ke https://www.webmanajemen.com/$1