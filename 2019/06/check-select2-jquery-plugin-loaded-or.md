---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2019-06-26T04:20:00.002Z
description: Example How to change select2 jQuery plugin using jQuery.val
lang: en
tags:
  - javascript
  - tips & tricks
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://laraget.com/images/blog/1482184906-Select2.png
title: "[JS] Check select2 jquery plugin loaded or not"
type: post
updated: 2023-09-02T23:34:51.000Z
wordcount: 187

---

<img border="0" src="https://res.cloudinary.com/dimaslanjaka/image/fetch/https://laraget.com/images/blog/1482184906-Select2.png" data-original-width="750" data-original-height="430"><i>Read <a href="https://webmanajemen.com/2019/07/defer-loading-css-js.html" target="_blank" rel="follow">How to async defer CSS JS perfectly</a></i><pre><br>if (jQuery.fn.select2) { //jquery select2 loaded or not false or not undefined =&gt; return array<br>  jQuery.fn.select2.defaults.set( "theme", "bootstrap" ); //then select themes<br>}<br></pre><p>Example: How to change select2 jQuery plugin using jQuery.val()</p><pre><br>  $('#mySelect2').val('US'); // Change the value or make some change to the internal state<br>if (jQuery.fn.select2) {<br>  $('#mySelect2').trigger('change.select2'); // Notify only Select2 of changes<br>}<br></pre>