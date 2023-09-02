---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2023-07-15T18:09:58+07:00
description: Get total words of hexo post Hexo script to get words count of a
  post contents / Get the word count of a paragraph.
  /hexo.extend.helper.registerword_count, cont
lang: en
tags:
  - hexo
  - snippet
  - script
  - javascript
title: Get total words of hexo post
type: post
updated: 2023-09-03T04:28:03+07:00
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
