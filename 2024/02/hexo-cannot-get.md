---
title: Hexo Cannot GET /
description: How to fix Hexo Cannot GET /
date: 2024-02-24T21:58:30+07:00
tags: [javascript, typescript]
categories: [programming]
---

## Check config yaml

check your `_config.yml`

```yaml
url: https://www.webmanajemen.com/
root: /
# Home page setting
# path: Root path for your blogs index page. (default = '')
# per_page: Posts displayed per page. (0 = disable pagination)
# order_by: Posts order. (Order by date descending by default)
index_generator:
  path: '/'
  per_page: 10
  order_by: -updated # updated | date | -date | -updated
  pagination_dir: page
```

## Check the URL and Paths:
Ensure that you are accessing the correct URL. 
Hexo may be configured to generate content under different paths. 
For example, if your site is located in a subdirectory, you might need to access `http://localhost:4000/subdirectory/`

## Reinstall Dependencies:
Sometimes, issues can arise from corrupted dependencies. 
You can try deleting the node_modules directory and reinstalling dependencies:

```bash
rm -rf node_modules
npm install
```
