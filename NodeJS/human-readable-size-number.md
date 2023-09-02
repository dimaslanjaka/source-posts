---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2022-10-12T09:02:28+07:00
description: Snippet Convert Bytes To Human Readable Script function JS for
  Converting file size in bytes to human-readable string / Format bytes as
  human-readable text. @pa
keywords:
  - bytes
  - human readable
  - typescript
  - javascript
  - function
lang: en
tags:
  - file
  - size
  - node
  - javascript
title: Snippet Convert Bytes To Human Readable
type: post
updated: 2023-09-03T04:28:00+07:00
wordcount: 621
---

Script function JS for Converting file size in bytes to human-readable string
```ts
/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 */
function humanFileSize(bytes: string | number, si = false, dp = 1) {
  const thresh = si ? 1000 : 1024;
  let parseBytes = parseInt(String(bytes));

  if (Math.abs(parseBytes) < thresh) {
    return parseBytes + ' B';
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10 ** dp;

  do {
    parseBytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(parseBytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return parseBytes.toFixed(dp) + ' ' + units[u];
}
```