---
author:
  nick: Unknown
  link: https://www.blogger.com/profile/00073980860956332189
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2018-11-24T04:39:00.000+07:00
description: Sometimes we as the blog owner was bored to see the look of the
  blog, one of them post view on the homepage.
lang: en
tags:
  - css
  - blogger
  - html
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://3.bp.blogspot.com/-kz6KVIcdKck/WPL9AYym7FI/AAAAAAAAqqI/lqIph6SjXNUJEm0vW6p6HHi0AhV2n1FNwCLcB/w1100/Untitled-1_1.jpg
title: How To Modifying Post Views On Homepage To Be Different
type: post
updated: 2023-10-08T11:33:21+07:00
---

Sometimes we as the blog owner was bored to see the look of the blog, one of them post view on the homepage. Well, we can get rid of this boredom by modifying the post appearance on the homepage to be different.

[![](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://3.bp.blogspot.com/-kz6KVIcdKck/WPL9AYym7FI/AAAAAAAAqqI/lqIph6SjXNUJEm0vW6p6HHi0AhV2n1FNwCLcB/w1100/Untitled-1_1.jpg)](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://3.bp.blogspot.com/-kz6KVIcdKck/WPL9AYym7FI/AAAAAAAAqqI/lqIph6SjXNUJEm0vW6p6HHi0AhV2n1FNwCLcB/w1100/Untitled-1_1.jpg)

We can freely modify the post homepage display is different, eg combine the grid and list view, or we modify the first post view is different from other posts.

This trick I have applied to some Company template. If you would like to try it, please follow the way below.

Please find the code below

```xml
<b:includable id='main' var='top'>
```

Scroll down a bit, then please delete the following code:

```xml
<b:if cond="data:post.isDateStart">
  <b:if cond='data:post.isFirstPost == "false"'>
    &lt;/div&gt;&lt;/div&gt;
  </b:if>
</b:if>
<b:if cond="data:post.isDateStart">
  &lt;div class=&quot;date-outer&quot;&gt;
</b:if>

<b:if cond="data:post.isDateStart">
  &lt;div class=&quot;date-posts&quot;&gt;
</b:if>
```

<p>Then scroll again down, and then delete the following code:</p>

```xml
<b:if cond='data:numPosts != 0'>
  &lt;/div&gt;&lt;/div&gt;
</b:if>
```

Well now we just make a style to set the post view by using `.post-outer:nth-child()`

If we want to change the look of the first post, then all the styles
  associated with the first post use `.post-outer:nth-child(1)` as below for example:

```css
.post-outer:nth-child(1) .post {
..............
..............
}
.post-outer:nth-child(1) .post h2 {
..............
..............
}
.post-outer:nth-child(1) .post-body {
..............
..............
}
```

Etc.

Then if you want to change the appearance of other posts also then add a style like this, eg for the second post, third, and fourth (in order to have the same look).

```css
.post-outer:nth-child(2) .post,
.post-outer:nth-child(3) .post,
.post-outer:nth-child(4) .post {
..............
..............
}
.post-outer:nth-child(2) .post h2,
.post-outer:nth-child(3) .post h2,
.post-outer:nth-child(4) .post h2 {
..............
..............
}
.post-outer:nth-child(2) .post-body,
.post-outer:nth-child(3) .post-body,
.post-outer:nth-child(4) .post-body {
..............
..............
}
```

Etc.

And for other posts, create a style as usual, as follows

```css
.post {
..............
..............
}
.post h2 {
..............
..............
}
.post-body {
..............
..............
}
```

<br />
<p>How easy is not it? Good luck...</p>
<br />
