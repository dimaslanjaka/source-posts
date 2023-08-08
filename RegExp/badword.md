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
id: e14cbf39-1ac8-4888-8b41-9b6d9b1ad4f4
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
updated: 2021-12-19T06:33:56+07:00
uuid: e14cbf39-1ac8-4888-8b41-9b6d9b1ad4f4
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
