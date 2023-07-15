---
title: Get total words of hexo post
tags: [snippet, hexo]
categories: [programming, javascript]
date: 2023-07-15T18:09:58+07:00
updated: 2023-07-15T18:09:58+07:00
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
