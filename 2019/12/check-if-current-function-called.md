---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
cover: https://i.ytimg.com/vi/ZFhadzpISPY/maxresdefault.jpg
date: 2019-12-04T05:51:00.001+07:00
description: pre><br />static = issetthis amp;amp; get_classthis ==
  __CLASS__;<br />if static <br /> return self;<br /> else <br />
lang: en
photos:
  - https://i.ytimg.com/vi/ZFhadzpISPY/maxresdefault.jpg
tags:
  - php
thumbnail: https://i.ytimg.com/vi/ZFhadzpISPY/maxresdefault.jpg
title: Check if current function called statically or not
type: post
updated: 2023-09-03T06:30:03+07:00
wordcount: 251
---

<pre><br>$static = !(isset($this) &amp;&amp; get_class($this) == __CLASS__);<br>if ($static) {<br>  return self;<br>} else {<br>  return $this;<br>}<br></pre> in class example: <pre>class Foo {<br>   function bar() {<br>      $static = !(isset($this) &amp;&amp; get_class($this) == __CLASS__);<br>if ($static) {<br>  return self;<br>} else {<br>  return $this;<br>}<br>   }<br>}</pre> or simply create below function to test: <pre><br>class A<br>{<br>    function foo()<br>    {<br>        if (isset($this)) {<br>            echo '$this is defined (';<br>            echo get_class($this);<br>            echo ")\n";<br>        } else {<br>            echo "\$this is not defined.\n";<br>        }<br>    }<br>}<br></pre> <i>How do I check in PHP that I'm in a static context (or not)?</i> <a href="https://i.ytimg.com/vi/ZFhadzpISPY/maxresdefault.jpg" imageanchor="1" rel="noopener noreferer nofollow"><img border="0" src="https://i.ytimg.com/vi/ZFhadzpISPY/maxresdefault.jpg" data-original-width="800" data-original-height="450"></a>