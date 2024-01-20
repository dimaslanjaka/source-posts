---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2022-12-29T19:40:35+07:00
description: Cara setting github actions agar jalan satu job saja sequentally
lang: id
permalink: /id/GitHub/github-actions-run-single-instance.html
tags:
  - github
  - github-actions-workflow
  - snippet
  - yaml
title: Menjalankan Github Workflow Satu Instansi sequentally
type: post
updated: 2023-09-03T04:28:01+07:00
wordcount: 79
---

Cara setting github actions agar jalan satu job saja (sequentally), cukup tambahkan kode berikut:

```yaml
# run single job
concurrency:
  group: nama-runner-bebas-${{ github.head_ref }}
  cancel-in-progress: true
```

[contoh yaml](https://github.com/dimaslanjaka/nodejs-package-types/blob/9b725279f6972e5357294430116b007aee01f32d/.github/workflows/build-release.yml#L25-L28)
