---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-04-27T16:29:00.000Z
description: CSS3 Blockquote Effects Demo
lang: en
tags:
  - css
thumbnail: https://i.ytimg.com/vi/gyopOTVV7Jk/maxresdefault.jpg
title: 12 CSS3 Responsive Blockquote Styling
type: post
updated: 2024-10-20T09:47:48+07:00
---

![](https://i.ytimg.com/vi/gyopOTVV7Jk/maxresdefault.jpg)
Today i want to reshare css3 for styling blockquote.

```css
/*
// 12 - CSS3 Blockquote Effects Demo
// Made with ❤ by @Pawan\_Mall
// http://www.web-manajemen.blogspot.jp
*/

@import url('http://fonts.googleapis.com/css?family=Montez');
@import url(http://fonts.googleapis.com/css?family=Francois+One);

body{
  background: #f5f7fa;
  margin:10px;
  padding:10px;
}

blockquote{
  display:block;
  background: #fff;
  padding: 15px 20px 15px 45px;
  margin: 0 0 20px;
  position: relative;

  /*Font*/
  font-family: Georgia, serif;
  font-size: 14px;
  line-height: 1.2;
  color: #666;

  /*Box Shadow - (Optional)*/
  -moz-box-shadow: 2px 2px 15px #ccc;
  -webkit-box-shadow: 2px 2px 15px #ccc;
  box-shadow: 2px 2px 15px #ccc;

  /*Borders - (Optional)*/
  border-left-style: solid;
  border-left-width: 15px;
  border-right-style: solid;
  border-right-width: 2px;
}

blockquote::before{
  content: "\\201C"; /*Unicode for Left Double Quote*/

  /*Font*/
  font-family: Georgia, serif;
  font-size: 60px;
  font-weight: bold;
  color: #999;

  /*Positioning*/
  position: absolute;
  left: 10px;
  top:5px;

}

blockquote::after{
  /*Reset to make sure*/
  content: "";
}

blockquote a{
  text-decoration: none;
  background: #eee;
  cursor: pointer;
  padding: 0 3px;
  color: #c76c0c;
}

blockquote a:hover{
 color: #666;
}

blockquote em{
  font-style: italic;
}

  /*Default Color Palette*/
blockquote.default{
  border-left-color: #656d77;
  border-right-color: #434a53;
}

/*Grapefruit Color Palette*/
blockquote.grapefruit{
  border-left-color: #ed5565;
  border-right-color: #da4453;
}

/*Bittersweet Color Palette*/
blockquote.bittersweet{
  border-left-color: #fc6d58;
  border-right-color: #e95546;
}

/*Sunflower Color Palette*/
blockquote.sunflower{
  border-left-color: #ffcd69;
  border-right-color: #f6ba59;
}

/*Grass Color Palette*/
blockquote.grass{
  border-left-color: #9fd477;
  border-right-color: #8bc163;
}

/*Mint Color Palette*/
blockquote.mint{
  border-left-color: #46cfb0;
  border-right-color: #34bc9d;
}

/*Aqua Color Palette*/
blockquote.aqua{
  border-left-color: #4fc2e5;
  border-right-color: #3bb0d6;
}

/*Blue Jeans Color Palette*/
blockquote.bluejeans{
  border-left-color: #5e9de6;
  border-right-color: #4b8ad6;
}

/*Lavander Color Palette*/
blockquote.lavander{
  border-left-color: #ad93e6;
  border-right-color: #977bd5;
}

/*Pinkrose Color Palette*/
blockquote.pinkrose{
  border-left-color: #ed87bd;
  border-right-color: #d870a9;
}

/*Light Color Palette*/
blockquote.light{
  border-left-color: #f5f7fa;
  border-right-color: #e6e9ed;
}

/*Gray Color Palette*/
blockquote.gray{
  border-left-color: #ccd1d8;
  border-right-color: #aab2bc;
}


/* These CSS classes used just for Demo purpose */
.heading{
   font-family:Montez;
   text-align:center;
   font-size:30px;
}
code{
  color:#da4453;
}
span{
  font-weight:bolder;

}
h1{
  text-align:left;
  font-size:16px;
  font-family: 'Francois One', sans-serif;
}

span.Cdefault{
  color:#434a53;
}
span.Cgrapefruit{
  color:#da4453;
}
span.Cbittersweet{
  color:#e95546;
}
span.Csunflower{
  color:#f6ba59;
}
span.Cgrass{
  color:#8bc163;
}
span.Cmint{
  color:#34bc9d;
}
span.Caqua{
  color:#3bb0d6;
}
span.Cbluejeans{
  color:#4b8ad6;
}
span.Clavander{
  color:#977bd5;
}
span.Cpinkrose{
  color:#d870a9;
}
span.Clight{
  color:#e6e9ed;
}
span.Cgray{
  color:#aab2bc;
}
```


### Demo:

{% codepen https://codepen.io/dimaslanjaka/pen/aWpXJY default_tab=result height=500 %}

**Incoming Terms:** _css3 blockquote | styling blockquote | css for blockquote | Responsive Blockquote | How to make cool and simple clearly | awesome blockquote | 12 css | css3_