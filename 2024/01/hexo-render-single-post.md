---
title: How to render single post hexo
description: example javascript codes to render single markdown post with HexoJS
date: 2024-01-30T01:40:36+07:00
updated: 2024-01-30T01:49:59+07:00
categories: [programming]
tags: [javascript, typescript, hexo]
---

According [my discussion on github](https://github.com/orgs/hexojs/discussions/5203#discussioncomment-5946132) I solved how to render single post markdown using HexoJS.

## Render existing loaded post

Basically render a single post you need load database, like below:

```js
const hexo = require('hexo')();

// Replace 'my-first-post' with the actual filename of your post (without the file extension).
const postToRender = 'my-first-post';

// Initialize Hexo
hexo.init().then(() => {
  // Load the Hexo database
  return hexo.load();
}).then(() => {
  // Find the specified post
  const post = hexo.locals.get('posts').filter(post => post.slug === postToRender)[0];

  if (post) {
    // Render the post
    return post.render().then(() => {
      // Access the rendered HTML content
      const renderedContent = post.content;
      console.log(renderedContent);
    });
  } else {
    console.error(`Post '${postToRender}' not found.`);
  }
}).catch(err => {
  console.error(err);
}).finally(() => {
  // Stop Hexo gracefully
  return hexo.exit();
});
```

## Render single post using markdown file location path

You also can render any frontmatter markdown files in specific location by initialize -> load plugins -> render post. See below snippets:

```js
import Hexo from 'hexo';
import path from 'path';

const hexo = new Hexo(__dirname);
async function main() {
  // intialie and load external plugins
  await hexo.init().then(() => hexo.loadPlugin(require.resolve('hexo-shortcodes')));
  // load hexo
  await hexo.load(async () => {
    // render single post
    const post = await hexo.post.render(path.join(__dirname, 'source/lang/php.md'));
    console.log(post);
  });
}

main();
```
This script initializes Hexo, loads the Hexo database, finds the specified post, renders the post, and then outputs the rendered HTML content.
And test result below
![render single post result](https://github.com/hexojs/hexo/assets/12471057/b4edd0a3-79d7-4aed-b1fe-daa7e54e99ab)

## Conclusion

And all the shortcodes work fine and according to what I want, just need the post body (post.content) to validate shortcode result using JSDOM or cheerio
