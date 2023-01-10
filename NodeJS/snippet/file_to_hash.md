---
title: File to Hash
description: get hashes checksum from file using NodeJS
webtitle: NodeJS Snippet
date: 2022-12-30T14:14:39+07:00
updated: 2022-12-30T14:14:39+07:00
tags: ['snippet', 'javascript', 'typescript', 'file']
categories: ['JS', 'TS']
layout: snippet
type: post
thumbnail: /NodeJS/assets/pngwing.com.png
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
