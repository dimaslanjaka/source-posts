---
title: Convert iframe to hexo-shortcodes codepen
description: Script javascript for convering html iframe to hexo-shortcodes codepen
categories:
  - programming
tags:
  - hexo-shortcodes
  - codepen
  - markdown
  - hexo
keywords:
  - hexo
date: 2023-10-09T07:12:12.619Z
updated: 2023-10-09T07:12:17.044Z
---

```js
const Promise = require('bluebird');
const glob = require('glob');
const { join } = require('path');
const { writefile } = require('sbg-utility');
const moment = require('moment-timezone');

// convert iframe to hexo-shortcodes codepen

Promise.all(glob.glob('src-posts/**/*.md', { ignore: ['**/node_modules/**'] }))
  .map(p => join(__dirname, p))
  .map(file =>
    import('hexo-post-parser').then(async loaded => {
      const parsed = await loaded.parsePost(file);
      return { module: loaded, file, ...parsed };
    })
  )
  .each(parsed => {
    const { file, module } = parsed;
    let { body: contents } = parsed;
    let save = false;
    if (contents.includes('source.l3n4r0x.cf')) {
      contents = contents.replace(/<iframe [^>]*src="[^"]*"[^>]*>[\s\S]*?<\/iframe\b[^>]*>/gim, tag => {
        let shortcode = tag;
        const src = /(?<=src=").*?(?=[*"])/gim.exec(tag)[0];
        const url = new URL(decodeHTMLEntities(src));
        const searchParams = new URLSearchParams(url.search);
        let user,
          id,
          opt = [];
        for (const [key, value] of searchParams.entries()) {
          if (key == 'id') {
            id = value;
          } else if (key == 'user') {
            user = value;
          } else if (key == 'h') {
            opt.push('height=' + value);
          } else if (key == 'tab') {
            opt.push('default_tab=' + value);
          } else {
            console.log(key, value);
          }
        }
        if (user.length > 0 && id.length > 0) {
          shortcode = `{% codepen https://codepen.io/${user}/pen/${id} ${opt.join(' ')} %}`;
        }

        // console.log(tag, shortcode);

        return shortcode;
      });
      // writefile(__dirname + '/tmp/x.html', contents);
      parsed.body = contents;
      parsed.content = contents;
      parsed.metadata.updated = moment(new Date()).tz('Asia/Jakarta').format();
      save = true;
    }
    if (save)
      Promise.resolve(module.buildPost({ body: contents, metadata: parsed.metadata })).then(build => {
        writefile(file, build);
      });
  });

function decodeHTMLEntities(text) {
  var entities = [
    ['amp', '&'],
    ['apos', "'"],
    ['#x27', "'"],
    ['#x2F', '/'],
    ['#39', "'"],
    ['#47', '/'],
    ['lt', '<'],
    ['gt', '>'],
    ['nbsp', ' '],
    ['quot', '"']
  ];

  for (var i = 0, max = entities.length; i < max; ++i)
    text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);

  return text;
}
```