---
author:
  nick: Dimas Lanjaka
  link: https://github.com/dimaslanjaka
categories:
  - programming
comments: false
date: 2021-09-21T17:00:00.000Z
description: Match string not containing string, exclude badwords
lang: en
location: Indonesia
tags:
  - regexp
  - regular expression
thumbnail: /RegExp/RegExp/badwords.png
title: Badword
type: post
updated: 2023-09-02T21:27:59.000Z
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