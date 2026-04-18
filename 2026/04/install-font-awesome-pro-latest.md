---
title: Install Font Awesome Pro (Latest) for Web
date: 2026-04-18T08:54:46Z
draft: false
layout: post
categories:
  - programming
tags:
  - blogging
  - css
  - blogger
description: Examples for loading Font Awesome Pro CSS in the browser, with fetch + loadCss helpers and an option for secure build-time fetching.
updated: 2026-04-18T08:54:48Z
---

## Install Font Awesome Pro — quick guide

This short guide shows three practical ways to include Font Awesome Pro in your web project:

- Install via npm (recommended for applications)
- Use an official Font Awesome Kit (hosted, simple)
- Fetch Pro CSS during build or at runtime when you have access to a private repo

### Helper: load CSS into the page

Use this small helper to switch between a stylesheet URL (`link`) or inline CSS (`style`) at runtime.

```js
function loadCss(urlOrCss, type = 'link') {
  if (type === 'link') {
    let link = document.querySelector('link[data-theme]');
    if (link) link.href = urlOrCss;
    else {
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = urlOrCss;
      link.dataset.theme = 'true';
      document.head.appendChild(link);
    }
  } else {
    let style = document.querySelector('style[data-theme]');
    if (style) style.innerHTML = urlOrCss;
    else {
      style = document.createElement('style');
      style.dataset.theme = 'true';
      style.innerHTML = urlOrCss;
      document.head.appendChild(style);
    }
  }
}
```

### Runtime fetch

Use this to download css into your webpage.

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js"
  integrity="sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"></script>

<script>
  // CSS fetcher
  async function fetchPrivateCss() {
    const ciphertext = "U2FsdGVkX1+fGbiFMs1hFEzTEoYvXyFxJyMbfkzl1bs5XRQxeuzUo9isnQUcpVGzb5LsWSTS1/r7sVzRd5D3swJY0v2f2KtC5v4LYk1xXyLuDSNXqeZP1IPDV8VuYLy9ou+mSFKc4nDlup9ZCuiHXQ==";
    const bytes = CryptoJS.AES.decrypt(String(ciphertext), String('not-so-secret'));
    const token = bytes.toString(CryptoJS.enc.Utf8);

    const apiUrl = 'https://api.github.com/repos/dimaslanjaka/fontawesome/contents/css/all.min.css';

    const resp = await fetch(apiUrl, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3.raw'
      }
    });

    if (!resp.ok) {
      throw new Error('Failed to fetch private CSS: ' + resp.statusText);
    }

    return resp.text();
  }
</script>
```

### Usage

```html
<script>fetchPrivateCss().then((data) => loadCss(data));</script>

<i class="fa-solid fa-user"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-light fa-star"></i>
<i class="fa-duotone fa-camera"></i>
<i class="fa-brands fa-github"></i>
```

now your webpage font-awesome pro icon ready
