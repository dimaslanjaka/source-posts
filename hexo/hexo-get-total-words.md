---
author: Dimas Lanjaka
categories:
  - programming
  - javascript
comments: true
date: 2023-07-15T18:09:58+07:00
description: Get total words of hexo post Hexo script to get words count of a
  post contents / Get the word count of a paragraph.
  /hexo.extend.helper.registerword_count, content => content =
  content.replace/<\/?[a-z][^>]>/gi, ; content = content.trim; return content ?
  content.ma
excerpt: Get total words of hexo post Hexo script to get words count of a post
  contents / Get the word count of a paragraph.
  /hexo.extend.helper.registerword_count, content => content =
  content.replace/<\/?[a-z][^>]>/gi, ; content = content.trim; return content ?
  content.ma
lang: en
photos: []
subtitle: Get total words of hexo post Hexo script to get words count of a post
  contents / Get the word count of a paragraph.
  /hexo.extend.helper.registerword_count, content => content =
  content.replace/<\/?[a-z][^>]>/gi, ; content = content.trim; return content ?
  content.ma
tags:
  - snippet
  - hexo
title: Get total words of hexo post
type: post
updated: 2023-08-08T14:44:18+07:00
wordcount: 135
---

Hexo script to get words count of a post contents

```js
/**
 * Get the word count of a paragraph.
 */
hexo.extend.helper.register('word_count', (content) => {
    content = content.replace(/<\/?[a-z][^>]*>/gi, '');
    content = content.trim();
    return content ? (content.match(/[\u00ff-\uffff]|[a-zA-Z]+/g) || []).length : 0;
});
```
