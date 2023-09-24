---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2022-09-01
description: Cara menghapus direktori path panjang di terminal Bagaimana cara
  mempersingkat jalur direktori saat ini yang ditampilkan di terminal? Pergi ke
  Home direktori at
lang: en
tags:
  - bash
title: Cara menghapus direktori path panjang di terminal
type: post
updated: 2023-08-08T14:45:09+07:00
wordcount: 156
---

Bagaimana cara mempersingkat jalur direktori saat ini yang ditampilkan di terminal? 

- Pergi ke **Home** direktori atau **~**
- Edit **.bashrc**
- change lowercase **\w** to uppercase **\W**.
- See below image:

![Hasil mempersingkat direktori path pada terminal](https://user-images.githubusercontent.com/12471057/197099003-41e4e0c3-8f3b-43bb-af66-466956a1d9a0.png)

Selesai.

Sejak bash 4, untuk mempersingkat direktori path di baris perintah dilakukan dengan menggunakan PROMPT_DIRTRIM di file .bashrc.
```properties
PROMPT_DIRTRIM=1
```
Hasil:

sebelum: bob@bob-ubuntu:~/Desktop/Drop/box/School/20/17/C/A3/$

sesudah: bob@bob-ubuntu:.../A3/$

Baca [Bash Manual](https://www.gnu.org/software/bash/manual/html_node/Bash-Variables.html#index-PROMPT_005fDIRTRIM) untuk informasi lebih lanjut.
