---
title: HexoJS get posts by tags or categories
date: 2023-01-01T23:05:15+07:00
updated: 2023-01-03T00:52:22+07:00
tags: ['snippet','hexo']
categories: ['programming', 'javascript']
layout: snippet
type: post
thumbnail: /NodeJS/assets/pngwing.com.png
---

## `@types/hexo` required for typescript users
default `@types/hexo` not giving complete types, so I made my custom definition file for hexo. You can install with below command
```bash
npm i -D https://github.com/dimaslanjaka/nodejs-package-types/tarball/hexo
```

## Snippet get posts by tags or categories for HexoJS
you can put this snippet to `theme/your-theme-name/scripts/get-post-by-tags-categories.js` or inside your plugin libs.
```js
/* global hexo */
hexo.extend.helper.register(
  'getPost',
  /**
   * hexo get post by key with name
   * @param {'tags'|'categories'} by
   * @param {string[]} filternames
   * @returns {Record<string, string>[]}
   */
  function (by, filternames) {
    const hexo = this;
    /**
     * @type {any[]}
     */
    const data = hexo.site[by].data;
    const map = filternames
      .map((filtername) => {
        const filter = data.filter(({ name }) => String(name).toLowerCase() == filtername.toLowerCase());
        return filter.map((group) => {
          return group.posts.map(
            /**
             * @param {import('hexo').Post.Data} post
             */
            function ({ title, permalink }) {
              // get title and permalink
              // for more keys, you can look at https://github.com/dimaslanjaka/nodejs-package-types/blob/ec9b509d81eefdfada79f1658ac02118936a1e5a/index.d.ts#L757-L762
              return { title, permalink };
            }
          );
        });
      })
      // flattern all multidimensional arrays
      // to get array of hexo post object
      .flat(2);
    // dump
    // console.log(map);
    // return an JSON string
    // return JSON.stringify(map, null, 2);
    // return an Array
    return map;
  }
);
```

## Usages
example _get posts by tags or categories_ using _nunjuck_ template
```njk
<div class="py-4">
  <h2>Another Snippets</h2>
  <ul>
    {% for item in getPost('tags', ['snippet', 'script']) %}
      <li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
    {% endfor %}
  </ul>
</div>
```
