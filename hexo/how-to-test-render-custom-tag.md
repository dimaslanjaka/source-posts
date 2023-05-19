---
title: How to test render custom tag on HexoJS ?
date: 2023-05-19T15:31:45+07:00
updated: 2023-05-19T15:31:45+07:00
tags: [hexo, snippet]
categories: [programming, javascript, typescript]
---

## QA
> original disscussion at https://github.com/orgs/hexojs/discussions/5203

I was created my plugin custom shortcode.

how to test render single post with plugin enabled ?

i was used

```source-ts
process.cwd = () => __dirname;

import Hexo from 'hexo';
import path from 'path';

const hexo = new Hexo(__dirname);
async function main() {
  await hexo.init();
  await hexo.load(() => {
    //
  });
  const post = await hexo.render.render({ path: path.join(__dirname, 'source/lang/php.md') });
  console.log(post);
}

main();
```

but the result not render the shortcode tag, how to do it?

[![image](https://user-images.githubusercontent.com/12471057/237977816-58ea6285-8d6c-41ce-a7b1-712d1f3e3eb4.png)](https://user-images.githubusercontent.com/12471057/237977816-58ea6285-8d6c-41ce-a7b1-712d1f3e3eb4.png)

but my plugin is working when i call `hexo generate` or `hexo server`

## How to test render solution
solved using `hexo.loadPlugin` and `hexo.post.render`.

```ts
import Hexo from 'hexo';
import path from 'path';

const hexo = new Hexo(__dirname);
async function main() {
  await hexo.init();
  hexo.init().then(() => hexo.loadPlugin(require.resolve('hexo-shortcodes')));
  await hexo.load(async () => {
    const post = await hexo.post.render(path.join(__dirname, 'source/lang/php.md'));
    console.log(post);
  });
}

main();
```

