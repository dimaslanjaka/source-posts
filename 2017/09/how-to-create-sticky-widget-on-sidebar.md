---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-09-13T07:55:00.000Z
description: How to Create a Sticky Widget in Blog Sidebar
lang: en
tags:
  - css
  - javascript
  - blogger
thumbnail: https://imgdb.net/images/3192.jpg
title: How to create sticky widget on sidebar blogger
type: post
updated: 2023-10-08T05:49:54.000Z

---

![](https://imgdb.net/images/3192.jpg)
In the previous article I once shared a tutorial on Installing Sticky Functions
**On Blogger Widgets**, this time I will share a tutorial with the same function that is to make a particular widget sticky or float following the page when scrolled down and up. This tutorial is an improvement as well as answering your comment from the previous tutorial which when the page is scrolled down sticky widget will pass the Footer Wrapper and it will be a bit annoying because it blocks the widgets that are installed in the Footer area.

I will share this code more suitable to be installed on all content in Sidebar or can also be installed on one particular widget. For buddy who want to try it, please follow tutorial **How to Make Sticky Widget in Sidebar Blog**.
![](https://imgdb.net/images/3193.jpg)

#### **How to Create a Sticky Widget in Blog Sidebar**


1. Login to Blogger
2. Go to Template editor
3. Put below script before `</body>` tag

```xml
<script type='text/javascript'>
//<![CDATA[
$(function() {
  // Change "#sticky-sidebar" with spesific ID or Change to Your ID Widgets
  if ($('#sticky-sidebar').length) {
    var el = $('#sticky-sidebar');
    var stickyTop = $('#sticky-sidebar').offset().top;
    var stickyHeight = $('#sticky-sidebar').height();
    $(window).scroll(function() {
      var limit = $('#footer-wrapper').offset().top - stickyHeight - 20; // Distance stops at "#footer-wrapper"
      var windowTop = $(window).scrollTop();
      if (stickyTop < windowTop) {
        el.css({
          position: 'fixed',
          top: 20 // Distance of margin from top
        });
      } else {
        el.css('position', 'static');
      }
      if (limit < windowTop) {
        var diff = limit - windowTop;
        el.css({
          top: diff
        });
      }
    });
  }
});
//]]>
</script>
```

Notice the code marked, replace the code with the ID to be made sticky according to the template used

> NOTE: **#sticky-sidebar**: ID of the content or widget to be made sticky
> **#footer-wrapper**: Specify the ID to limit the sticky function

Next add the width to the content or widget that is made sticky with CSS. Suppose here I give 300px for sticky width, for example:

```css
#sticky-sidebar{
    width:100%;
    max-width:300px
}
```

**Or:**

```css
#ID_WIDGET{
    width:100%;
    max-width:300px
}
```

Determine the width according to the width of the sidebar of the template you use and also do not forget to replace the width on a particular query media, for example

```css
@media only screen and (max-width:768px) {
	#sticky-sidebar {
		width: 100%;
		max-width: 100%;
	}
}
```

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="OMXaYb" data-user="arlinacode" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/arlinacode/pen/OMXaYb">
  Cara Membuat Sticky Widget di Sidebar Blog</a> by Arlina Code (<a href="https://codepen.io/arlinacode">@arlinacode</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>