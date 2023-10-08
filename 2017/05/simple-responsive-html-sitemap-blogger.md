---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-05-03T22:21:00.000+07:00
description: Today i want to share an simple codes for creating Simple
  Responsive HTML Sitemap.CSSshow-catfloat:left;margin:20px 5 20px
lang: en
tags:
  - css
  - blogger
  - html
thumbnail: https://1000logos.net/wp-content/uploads/2020/08/Blogger-Logo.jpg
title: Simple Responsive HTML Sitemap Blogger
type: post
updated: 2023-10-08T11:44:46+07:00
---

![](https://1000logos.net/wp-content/uploads/2020/08/Blogger-Logo.jpg)
Today i want to share an simple codes for creating 'Simple Responsive HTML Sitemap'.

**CSS**

```css
#show-cat{
    float:left;
    margin:20px 5% 20px 0;
    width:25%;
    height:389px;
    overflow-x:hidden;
    overflow-y:auto;
    line-height:18px;
    border:1px solid #ccc
}
 #show-cat ul{
    margin:0;
    border-top:0px solid #ccc;
    padding:0
}
 #show-cat ul li{
    list-style-type:none;
    margin:0;
    border-right:1px solid #ccc;
    border-bottom:0px solid #ccc;
    border-left:0px solid #ccc;
    padding:0
}
 #show-cat ul li a{
    display:block;
    padding:10px;
    border-bottom:1px solid #ccc;
}
 #show-cat ul li:last-child a{
    border-bottom:none;
}
 #show-cat ul li a,#navi-cat a{
    background:#fff;
    color:#4d90f0;
    text-decoration:none
}
 #show-cat ul li a,#navi-cat a,#navi-cat span{
    font-size:14px
}
 #show-cat ul li a:hover,#navi-cat a:hover{
    background:#ccc;
    color:#fff
}
 #show-post{
    float:left;
    width:69%;
    line-height:1.6em
}
 #show-post ul li{
    list-style-type:none;
    margin-left:-40px
}
 #navi-cat{
    padding:20px 0
}
 #navi-cat a{
    margin-right:10px;
    border:1px solid #ccc
}
 #navi-cat a,#navi-cat span{
    padding:5px 10px
}
 #navi-cat span{
    float:right
}
 @media screen and (max-width:768px){
     #show-cat{
        width:35%;
    }
     #show-post{
        width:59%;
    }
}
 @media screen and (max-width:480px){
     #show-cat{
        width:100%;
        margin:20px 0
    }
     #show-post{
        width:100%;
    }
}
```

**HTML**

```html
<div id="show-cat"></div>
<div id="show-post">
  <script type="text/javaScript">
    var
        cat_home='http://www.webmanajemen.com';cat_numb=12;cat_pre='Prev';cat_nex='Next';
    var cat_name;var cat_start;var cat_class;
    function show_post2(a){var
        tt=a.feed.openSearch$totalResults.$t;dw='';dw+='<ul>';for(var
        i=0;i<cat_numb&&i<a.feed.entry.length;i++){var
        entry=a.feed.entry[i];cat_title=entry.title.$t;for(var
        j=0;j<entry.link.length;j++){if(entry.link[j].rel=='alternate'){var
        cat_url=entry.link[j].href}}dw+='<li>';dw+=(cat_start+i)+'. <a
        href="'+cat_url+'" rel="nofollow"
        title="'+cat_title+'">'+cat_title+'</a>';dw+='</li>'}dw+='</ul>';dw+='<div
        id="navi-cat">';if(cat_start>1){dw+='<a href=""
        onclick="show_post(\''+cat_name+'\',\''+(cat_start-cat_numb)+'\',\''+cat_class+'\');return
        false"
        title="'+cat_pre+'">'+cat_pre+'</a>'}if((cat_start+cat_numb-1)<tt){dw+='<a
        href=""
        onclick="show_post(\''+cat_name+'\',\''+(cat_start+cat_numb)+'\',\''+cat_class+'\');return
        false"
        title="'+cat_nex+'">'+cat_nex+'</a>'}dw+='<span>'+cat_start;if(cat_start!=tt){dw+='
        &ndash; '+(cat_start+i-1)}dw+=' /
        '+tt+'</span>';dw+='</div>';document.getElementById('show-post').innerHTML=dw+'<style
        type="text/css">.cat-'+cat_class+'
        a{background:#bbb!important;color:#fff!important}<\/style>'}function
        show_post(a,b,c){var
        d=document.getElementsByTagName('head')[0];e=document.createElement('script');e.type='text/javascript';e.setAttribute('src',cat_home+'/feeds/posts/default/-/'+a+'?alt=json-in-script&start-index='+b+'&max-results='+cat_numb+'&callback=show_post2');d.appendChild(e);cat_name=a;cat_start=parseInt(b),cat_class=c}function
        show_cat(a){var cat=a.feed.category;dw='';dw+='<ul>';for(var
        i=0;i<cat.length-1;i++){for(var
        j=i+1;j<cat.length;j++){if(cat[i].term>cat[j].term){cat_hv=cat[i].term;cat[i].term=cat[j].term;cat[j].term=cat_hv}}}for(var
        i=0;i<cat.length;i++){dw+='<li class="cat-'+i+'">';dw+='<a
        href="" onclick="show_post(\''+cat[i].term+'\',\'1\',\''+i+'\');return
        false"
        title="';dw+=cat[i].term;dw+='">';dw+=cat[i].term;dw+='</a>';dw+='</li>'}dw+='</ul>';document.getElementById('show-cat').innerHTML=dw}document.write('<script
        type="text/javascript"
        src="'+cat_home+'/feeds/posts/default?alt=json-in-script&max-results=0&callback=show_cat"><\/script>');
  </script>
</div>

<div style="clear: both"></div>
```

Change **www.webmanajemen.com** with your domain blog. (only blogger blog).

### Combining the codes at page

```html
<style>
  #show-cat {
    float: left;
    margin: 20px 5% 20px 0;
    width: 25%;
    height: 389px;
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 18px;
    border: 1px solid #ccc;
  }
  #show-cat ul {
    margin: 0;
    border-top: 0px solid #ccc;
    padding: 0;
  }
  #show-cat ul li {
    list-style-type: none;
    margin: 0;
    border-right: 1px solid #ccc;
    border-bottom: 0px solid #ccc;
    border-left: 0px solid #ccc;
    padding: 0;
  }
  #show-cat ul li a {
    display: block;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  #show-cat ul li:last-child a {
    border-bottom: none;
  }
  #show-cat ul li a,
  #navi-cat a {
    background: #fff;
    color: #4d90f0;
    text-decoration: none;
  }

  #show-cat ul li a,
  #navi-cat a,
  #navi-cat span {
    font-size: 14px;
  }

  #show-cat ul li a:hover,
  #navi-cat a:hover {
    background: #ccc;
    color: #fff;
  }

  #show-post {
    float: left;
    width: 69%;
    line-height: 1.6em;
  }

  #show-post ul li {
    list-style-type: none;
    margin-left: -40px;
  }

  #navi-cat {
    padding: 20px 0;
  }

  #navi-cat a {
    margin-right: 10px;
    border: 1px solid #ccc;
  }

  #navi-cat a,
  #navi-cat span {
    padding: 5px 10px;
  }

  #navi-cat span {
    float: right;
  }

  @media screen and (max-width: 768px) {
    #show-cat {
      width: 35%;
    }

    #show-post {
      width: 59%;
    }
  }

  @media screen and (max-width: 480px) {
    #show-cat {
      width: 100%;
      margin: 20px 0;
    }

    #show-post {
      width: 100%;
    }
  }
</style>

<div id="show-cat"></div>

<div id="show-post">
  <script type="text/javaScript">

    var
        cat_home='http://www.webmanajemen.com';cat_numb=12;cat_pre='Prev';cat_nex='Next';

    var cat_name;var cat_start;var cat_class;

    function show_post2(a){var
        tt=a.feed.openSearch$totalResults.$t;dw='';dw+='<ul>';for(var
        i=0;i<cat_numb&&i<a.feed.entry.length;i++){var
        entry=a.feed.entry[i];cat_title=entry.title.$t;for(var
        j=0;j<entry.link.length;j++){if(entry.link[j].rel=='alternate'){var
        cat_url=entry.link[j].href}}dw+='<li>';dw+=(cat_start+i)+'. <a
        href="'+cat_url+'" rel="nofollow"
        title="'+cat_title+'">'+cat_title+'</a>';dw+='</li>'}dw+='</ul>';dw+='<div
        id="navi-cat">';if(cat_start>1){dw+='<a href=""
        onclick="show_post(\''+cat_name+'\',\''+(cat_start-cat_numb)+'\',\''+cat_class+'\');return
        false"
        title="'+cat_pre+'">'+cat_pre+'</a>'}if((cat_start+cat_numb-1)<tt){dw+='<a
        href=""
        onclick="show_post(\''+cat_name+'\',\''+(cat_start+cat_numb)+'\',\''+cat_class+'\');return
        false"
        title="'+cat_nex+'">'+cat_nex+'</a>'}dw+='<span>'+cat_start;if(cat_start!=tt){dw+='
        &ndash; '+(cat_start+i-1)}dw+=' /
        '+tt+'</span>';dw+='</div>';document.getElementById('show-post').innerHTML=dw+'<style
        type="text/css">.cat-'+cat_class+'
        a{background:#bbb!important;color:#fff!important}<\/style>'}function
        show_post(a,b,c){var
        d=document.getElementsByTagName('head')[0];e=document.createElement('script');e.type='text/javascript';e.setAttribute('src',cat_home+'/feeds/posts/default/-/'+a+'?alt=json-in-script&start-index='+b+'&max-results='+cat_numb+'&callback=show_post2');d.appendChild(e);cat_name=a;cat_start=parseInt(b),cat_class=c}function
        show_cat(a){var cat=a.feed.category;dw='';dw+='<ul>';for(var
        i=0;i<cat.length-1;i++){for(var
        j=i+1;j<cat.length;j++){if(cat[i].term>cat[j].term){cat_hv=cat[i].term;cat[i].term=cat[j].term;cat[j].term=cat_hv}}}for(var
        i=0;i<cat.length;i++){dw+='<li class="cat-'+i+'">';dw+='<a
        href="" onclick="show_post(\''+cat[i].term+'\',\'1\',\''+i+'\');return
        false"
        title="';dw+=cat[i].term;dw+='">';dw+=cat[i].term;dw+='</a>';dw+='</li>'}dw+='</ul>';document.getElementById('show-cat').innerHTML=dw}document.write('<script
        type="text/javascript"
        src="'+cat_home+'/feeds/posts/default?alt=json-in-script&max-results=0&callback=show_cat"><\/script>');
  </script>
</div>

<div style="clear: both"></div>
```

Change **www.webmanajemen.com** with your blogger domain/subdomain.

**DEMO:**

<div class="codegena_iframe">
  <iframe
    class="iframe"
    height="auto"
    id="iframe"
    name="html sitemap blogger"
    src="http://codepen.io/dimaslanjaka/full/xqvJYO"
    style="
      background: url(&quot;http://codegena.com/wp-content/uploads/2015/09/loading.gif&quot;) white center center
        no-repeat;
      border: 2px solid #00adef;
      float: middle;
    "
    width="100%"></iframe>
</div>
<style>
  .codegena_iframe {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }
  .codegena_iframe iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
<script src="https://gist.github.com/dimaslanjaka/fe3fa58bdadf1f24926a2779251945fa.js"></script>

I hope this article may be helpful.