---
author:
  nick: Dimas Lanjaka
  link: https://github.com/dimaslanjaka
categories:
  - programming
  - regular expression
comments: false
cover: /RegExp/RegExp/badwords.png
date: 2021-09-22T00:00:00+07:00
description: Match string not containing string, exclude badwords
excerpt: Match string not containing string, exclude badwords
lang: en
location: Indonesia
photos:
  - /RegExp/RegExp/badwords.png
subtitle: Match string not containing string, exclude badwords
tags:
  - regexp
thumbnail: /RegExp/RegExp/badwords.png
title: Badword
type: post
updated: 2023-08-08T14:44:14+07:00
webtitle: RegExp
wordcount: 13
---

<!--toc-->

## Main Expression
```regexp {#regexp-main}
^((?!badword).)*$
```

## Try It
[Click Here](https://www.regextester.com/15)

<!-- script /RegExp/RegExp/badwords.js -->
