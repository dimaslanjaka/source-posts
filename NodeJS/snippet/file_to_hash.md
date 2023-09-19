---
author: Dimas Lanjaka
categories:
  - programming
comments: true
cover: /NodeJS/assets/pngwing.com.png
date: 2022-12-30T14:14:39+07:00
description: get hashes checksum from file using NodeJS
lang: en
photos:
  - /NodeJS/assets/pngwing.com.png
tags:
  - snippet
  - javascript
  - typescript
  - file
thumbnail: /NodeJS/assets/pngwing.com.png
title: File to Hash
type: post
updated: 2023-09-02T21:10:16.443Z
webtitle: NodeJS Snippet
wordcount: 280
---

## get checksum from file
```js
const crypto = require('crypto');
const fs = require('fs');

/**
 * convert file to hash
 * @param {'sha1' | 'sha256' | 'sha384' | 'sha512', 'md5'} alogarithm
 * @param {string} path
 * @param {import('crypto').BinaryToTextEncoding} encoding
 * @returns
 */
function file_to_hash(alogarithm = 'sha1', path, encoding = 'hex') {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash(alogarithm);
    const rs = fs.createReadStream(path);
    rs.on('error', reject);
    rs.on('data', (chunk) => hash.update(chunk));
    rs.on('end', () => resolve(hash.digest(encoding)));
  });
}
```

## Usages

```js
file_to_hash('sha512', 'D:/Repositories/release/file.tgz').then(console.log);
```

![thumbnail](https://github.com/dimaslanjaka/source-posts/assets/12471057/e295efe9-e194-4bf2-a6ea-d385f6686e7b)
