---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2018-02-21T13:55:00.000Z
description: "PHP Function get_meta_tags Helper. Description Of getmeta_tags Source Description: PHP.NET PHP 4, PHP 5, PHP 7 get_meta_tags "
lang: en
tags:
  - php
thumbnail: https://www.svgrepo.com/show/84714/php.svg
title: "PHP Function get_meta_tags Helper"
type: post
updated: 2023-10-20T16:16:45+07:00
---

![](https://www.svgrepo.com/show/84714/php.svg "[PHP] Function get_meta_tags() Helper")

Description Of get\_meta\_tags
==============================

Source Description: [PHP.NET](http://php.net/manual/en/function.get-meta-tags.php "Description Of get_meta_tags")

(PHP 4, PHP 5, PHP 7)

get\_meta\_tags — Extracts all meta tag content attributes from a file and returns an array

### Description [¶](http://php.net/manual/en/function.get-meta-tags.php#refsect1-function.get-meta-tags-description)

array get\_meta\_tags ( string`$filename` \[, bool `$use_include_path` = `FALSE` \] )

Opens `filename` and parses it line by line for <meta> tags in the file. The parsing stops at _</head>_.

### Parameters [¶](http://php.net/manual/en/function.get-meta-tags.php#refsect1-function.get-meta-tags-parameters)

`filename`

The path to the HTML file, as a string. This can be a local file or an URL.

Example #1 What get\_meta\_tags()parses

```html
<meta name="author" content="name">
<meta name="keywords" content="php documentation">
<meta name="DESCRIPTION" content="a php manual">
<meta name="geo.position" content="49.33;-86.59">
</head> <!-- parsing stops here -->
```

(pay attention to line endings - PHP uses a native function to parse the input, so a Mac file won't work on Unix).

`use_include_path`

Setting `use_include_path` to `TRUE` will result in PHP trying to open the file along the standard include path as per the [include\_path](http://php.net/manual/en/ini.core.php#ini.include-path) directive. This is used for local files, not URLs.

### Return Values [¶](http://php.net/manual/en/function.get-meta-tags.php#refsect1-function.get-meta-tags-returnvalues)

Returns an array with all the parsed meta tags.

The value of the name property becomes the key, the value of the content property becomes the value of the returned array, so you can easily use standard array functions to traverse it or access single values. Special characters in the value of the name property are substituted with '\_', the rest is converted to lower case. If two meta tags have the same name, only the last one is returned.

> **This function helper needs cURL or file\_get\_contents()**
> [Click Here](//webmanajemen.com/search/?q=Alternative+file_get_contents "[PHP] alternative file_get_contents()") To Find Function Helper For file\_get\_contents() on PHP

Function helper for get\_meta\_tags();
--------------------------------------


```php
function get_meta($val){
$tags = get_meta_tags($val);
return array('author' => $tags['author'], 'description' => $tags['description'], 'keywords' => $tags['keywords']);
}

function get_metas($url){
$html = get_contents($url); //Define your cURL functions

//parsing begins here:
$doc = new DOMDocument();
@$doc->loadHTML($html);
$nodes = $doc->getElementsByTagName('title');
//get and display what you need:
$title = $nodes->item(0)->nodeValue; //titles
$metas = $doc->getElementsByTagName('meta');
for ($i = 0; $i < $metas->length; $i++)
{
    $meta = $metas->item($i);
    if($meta->getAttribute('name') == 'author'){
        $author = $meta->getAttribute('content');
        }
    if($meta->getAttribute('name') == 'description'){
        $description = $meta->getAttribute('content');
        }
    if($meta->getAttribute('name') == 'keywords'){
        $keywords = $meta->getAttribute('content');
        }
}
return array('description' => $description, 'author' => $author, 'keywords' => $keywords);
}
```

Usage Function Helper For
-------------------------

```php
$targeturl = "https://webmanajemen.com"; //target url to scraped

if (get_meta_tags($targeturl) == FALSE){
$meta = get_metas($targeturl);
} else {
$meta = get_meta($targeturl);
}

$getDesc = $meta['description'];
$getKey = $meta['keywords'];
$getAuthor = $meta['author'];

echo "<b>Description: </b>".$getDesc."<hr />";
echo "<b>Keywords: </b>".$getKey."<hr />";
echo "<b>Author: </b>".$getAuthor."<hr />";
```