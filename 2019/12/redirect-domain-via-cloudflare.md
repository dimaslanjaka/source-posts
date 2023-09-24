---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://1.bp.blogspot.com/-vaafAtA7fJ0/XegbZIw3CYI/AAAAAAAAAgg/0S7WeEzqKLg1nPSyrd1zJ-ZaVjXVORKZgCLcBGAsYHQ/s640/Screenshot_1.png
date: 2019-12-05T04:03:00.000+07:00
description: Step .Migrasi domain host ke cloudflare dengan mengubah nameserver
  nyaBelum tahu caranya ? Klik tautanCara host domain ke
lang: en
photos:
  - https://1.bp.blogspot.com/-vaafAtA7fJ0/XegbZIw3CYI/AAAAAAAAAgg/0S7WeEzqKLg1nPSyrd1zJ-ZaVjXVORKZgCLcBGAsYHQ/s640/Screenshot_1.png
tags:
  - seo
  - tips & tricks
thumbnail: https://1.bp.blogspot.com/-vaafAtA7fJ0/XegbZIw3CYI/AAAAAAAAAgg/0S7WeEzqKLg1nPSyrd1zJ-ZaVjXVORKZgCLcBGAsYHQ/s640/Screenshot_1.png
title: Cara redirect domain lama ke domain baru untuk SEO menggunakan Cloudflare
type: post
updated: 2023-08-08T14:45:15+07:00
wordcount: 379
---

<div dir="ltr" style="text-align: left;" trbidi="on">Step 1.<br><br>Migrasi domain (host) ke cloudflare dengan mengubah nameserver nya<br><br>Belum tahu caranya ? Klik tautan&nbsp;<a href="https://webmanajemen.com/search/?q=host+domain+cloudflare" target="_blank">Cara host domain ke cloudflare</a><br><br>Step 2.<br><br>Set DNS point ke 192.0.2.1 sebagai dummy saja atau ip yang lain boleh, dan aktifkan <b>Proxied DNS</b>, seperti gambar berikut yang saya tandai mark kuning :<br><img height="99" src="https://1.bp.blogspot.com/-vaafAtA7fJ0/XegbZIw3CYI/AAAAAAAAAgg/0S7WeEzqKLg1nPSyrd1zJ-ZaVjXVORKZgCLcBGAsYHQ/s640/Screenshot_1.png" width="640"><br><br>Step 3.<br><br>Setup <b>Page Rules</b>.<br><br><blockquote>Setup HTTP dan HTTPS secara terpisah untuk domain lama. Contoh milik saya: <b>webmanajemen.com</b></blockquote><figure>  <img border="0" src="https://1.bp.blogspot.com/-8UFKrpBeVuI/XegeaeZLNrI/AAAAAAAAAhI/zEQF27_xadQ113FMrPf1LtxR4xg9DLQygCLcBGAsYHQ/s640/Screenshot_1.png" width="640" height="291" data-original-width="1365" data-original-height="620">  <figcaption>Screenshot 1 (http)</figcaption></figure> <figure>  <img border="0" data-original-height="767" data-original-width="1365" height="358" src="https://1.bp.blogspot.com/-XcZ4ifQNnnA/XegcYe4HtkI/AAAAAAAAAgs/5oSjgaP9gk0DAGTHF5xvHD-otMfKe9MCACLcBGAsYHQ/s640/Screenshot_1.png" style="margin-left: auto; margin-right: auto;" width="640">  <figcaption>Screenshot 2 (https)</figcaption></figure> <br>Keterangan diatas :<br>Saya ingin meredirect http(s)://webmanajemen.com/* ke https://www.webmanajemen.com/$1<br><br>Setting Rules :<br>&nbsp;- Forwarding URL<br>&nbsp;- 301 - Permanent Redirect<br><br>Keterangan (<b>*</b>) di URL pertama menandakan semua PATH dan QUERY url<br>Keterangan <b>($1)</b> pada URL kedua menandakan FORWARDING dari (<b>*</b>) URL pertama<br><br><b>Selesai.</b><br>Tunggu minimal 30 menit agar Bekerja Dengan Sempurna.<br><br>sekarang semua URL http(s)://webmanajemen.com/* akan di redirect sepenuhnya ke https://www.webmanajemen.com/$1</div>