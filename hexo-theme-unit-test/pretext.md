---
title: PreText (Code Blocks)
tags:
  - codeblock
  - shortcode
category:
  - hexo
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