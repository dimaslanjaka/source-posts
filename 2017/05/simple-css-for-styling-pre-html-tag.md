---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-05-04T20:27:00.000+07:00
description: Styling pre> tag using simple css code Description of <pre> tag on HTML The HTML <pre> tag is employed for indicating
lang: en
tags:
  - css
  - html
thumbnail: https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPU5mp9B9Vq99lF8d8-apVN1I1DoiA9DcmpTwYsP1MY5hRB8oY
title: Simple CSS for Styling pre html tag
type: post
updated: 2023-10-08T12:03:41+07:00
---

## Styling `<pre>` tag using simple css code

![pre tag](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPU5mp9B9Vq99lF8d8-apVN1I1DoiA9DcmpTwYsP1MY5hRB8oY "pre tag")

## Description of `<pre>` tag on HTML

The HTML `<pre>` tag is employed for indicating preformatted text. The code tag surrounds the code being marked up.

Browsers commonly render pre text during a fixed-pitched font, with whitespace in tactfulness, and while not word wrap.

### Example

```html
<!doctype html>
<html>
  <head>
    <title>HTML pre Tag</title>
  </head>
  <body>
    <pre>
      This text is
 in a fixed-pitch
        font, and it preserves
 both    spaces and line breaks
</pre
    >
  </body>
</html>
```

Above codes will produce following result:

```
      This text is
 in a fixed-pitch
        font, and it preserves
 both    spaces and line breaks
```

In this article i'll share the simple way / simple code CSS for styling of `<pre>` HTML tag.

The CSS:

```css
pre {
  background: rgb(248, 248, 248);
  border-color: rgba(17, 17, 17, 0.0392157) rgba(17, 17, 17, 0.0392157) rgba(17, 17, 17, 0.0392157) rgb(32, 142, 214);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px 1px 1px 5px;
  box-sizing: border-box;
  clear: both;
  color: #4d4e53;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 13px;
  line-height: 28px;
  margin-bottom: 30px;
  overflow: auto;
  padding: 15px;
  tab-size: 4;
  word-break: break-all;
  word-wrap: normal;
}
```

 Here the test code from jsfiddle (CSS and HTML) section tabs.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="auto" src="//jsfiddle.net/dimaslanjaka/p9uw69bb/embedded/" width="100%"></iframe>

I Hope That Code may help you