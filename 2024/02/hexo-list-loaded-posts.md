---
title: List loaded posts in HexoJS
date: 2024-02-12T20:50:16+07:00
keywords:
  - hexo
  - post
tags:
  - javascript
  - typescript
categories:
  - programming
updated: 2024-02-12T14:08:52.737Z
---

## Basic codes to list loaded hexo posts

by default to list all posts you can using below codes:

{% github https://github.com/sergeyzwezdin/hexo-related-posts/blob/daf1021bf1914f2f90e3c77780e36a01330406ee/lib/calcRelatedPosts.js#L32-L40 %}

## Fix missing description

by default hexo not provide property `description`, you have to add it manually to all your Hexo Markdown posts. Or you provide the `post excerpt` to assign with missing `description`

```js
const posts = hexo.locals.get('posts').data.map(({ description, excerpt }) => ({
  description: description || excerpt
}));
```

## List loaded hexo posts in typescript

in typescript you should declare custom type

```ts
interface PostList {
  title: string;
  description: string;
  keywords: string[];
  tags: string[];
  categories: string[];
  permalink: string;
}
const posts = hexo.locals
  .get('posts')
  .data.map(
    ({
      title,
      keywords,
      description,
      excerpt,
      raw,
      tags,
      categories,
      path
    }) => ({
      title,
      // fix non-array keywords
      keywords: Array.isArray(keywords) ? keywords : [keywords],
      // fix missing description
      description: description || excerpt,
      raw,
      permalink: path,
      tags: tags.data.map((tag) => tag.name),
      categories: categories.data.map((category) => category.name)
    })
  ) as PostList;
```
