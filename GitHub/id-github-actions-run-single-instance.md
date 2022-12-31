---
title: "Menjalankan Github Workflow Satu Instansi (sequentally)"
description: "Cara setting github actions agar jalan satu job saja (sequentally)"
permalink: /id/Github/github-actions-run-single-instance.md
date: 2022-12-29T19:40:35+07:00
updated: 2022-12-29T19:40:35+07:00
lang: id
---

Cara setting github actions agar jalan satu job saja (sequentally), cukup tambahkan kode berikut:
```yaml
# run single job
concurrency:
  group: nama-runner-bebas-${{ github.head_ref }}
  cancel-in-progress: true
```

[contoh yaml](https://github.com/dimaslanjaka/nodejs-package-types/blob/9b725279f6972e5357294430116b007aee01f32d/.github/workflows/build-release.yml#L25-L28)
