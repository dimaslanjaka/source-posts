---
author: Dimas Lanjaka
categories:
  - hexo
comments: true
date: 2023-08-08T14:25:40+07:00
description: "PreText Code Blocks Code Block Shortcode Using code block
  shortcode from official hexo Plain code codeblock alertHello World; Specifying
  the language codeblock lang:objc [rectangle setX: 10 y: 10 width: 20 height:
  20]; Adding a caption to the code block codeblock Array.map a"
excerpt: "PreText Code Blocks Code Block Shortcode Using code block shortcode
  from official hexo Plain code codeblock alertHello World; Specifying the
  language codeblock lang:objc [rectangle setX: 10 y: 10 width: 20 height: 20];
  Adding a caption to the code block codeblock Array.map a"
id: 9b59209b-26ce-4888-8e73-3f7b82ff5d80
lang: en
photos: []
subtitle: "PreText Code Blocks Code Block Shortcode Using code block shortcode
  from official hexo Plain code codeblock alertHello World; Specifying the
  language codeblock lang:objc [rectangle setX: 10 y: 10 width: 20 height: 20];
  Adding a caption to the code block codeblock Array.map a"
tags:
  - codeblock
  - shortcode
title: PreText Code Blocks
type: post
updated: 2023-08-08T14:25:40+07:00
wordcount: 162
---

# Code Block Shortcode
Using code block shortcode from official hexo

Plain code

{% codeblock %}
alert('Hello World!');
{% endcodeblock %}

Specifying the language

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

Adding a caption to the code block

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

Adding a caption and a URL

{% codeblock _.compact https://webmanajemen.com/page/redirect.html?u=http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}