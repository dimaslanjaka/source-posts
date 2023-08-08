---
author: Dimas Lanjaka
categories:
  - programming
  - javascript
comments: true
cover: https://res.cloudinary.com/practicaldev/image/fetch/s--6KFkGVIh--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rn8ecbvghqyulclj0m42.png
date: 2023-06-08T11:03:53+07:00
description: How to implement Inline Ternary Operator In Nunjucks And EJS
excerpt: How to implement Inline Ternary Operator In Nunjucks And EJS
id: ea8cf874-d75a-4888-8fe4-feaa02de9568
lang: en
photos:
  - https://res.cloudinary.com/practicaldev/image/fetch/s--6KFkGVIh--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rn8ecbvghqyulclj0m42.png
subtitle: How to implement Inline Ternary Operator In Nunjucks And EJS
tags:
  - ejs
  - nunjucks
  - javascript
thumbnail: https://res.cloudinary.com/practicaldev/image/fetch/s--6KFkGVIh--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rn8ecbvghqyulclj0m42.png
title: Inline Ternary Operator In Nunjucks And EJS
type: post
updated: 2023-06-08T11:07:46+07:00
wordcount: 454
---

## Nunjucks
Nunjucks Inline Ternary Operator examples:

```html
<span>{{ post.data.uuid if post.data.uuid else absolutePostUrl }}</span>
```

> it check the `post.data.uuid` is not undefined otherwise return `absolutePostUrl`

## EJS
EJS Inline Ternary Operator examples:

You need to replace the `<% %>` tag with the `<%= %>` tag in order to output the expression value:

```
<li class="<%= currentMenu === 'dashboard' ? 'active' : '' %>">
  <!-- -->
</li>

```

As the [EJS documentation](http://ejs.co/) states, the `<% %>` tags are for control-flow, no output code; whereas the `<%= %>` tags output and interpolate the value into the HTML template.

For example, the `if` statement below uses `<% %>` tags because the statement doesn't need to be outputted into the HTML. Then inside of the condition, the variable is outputted and interpolated into the HTML template by using the `<%= %>` tags: `<%= currentMenu %>`.

```
<% if (currentMenu === 'dashboard') { %>
  <span><%= currentMenu %></span>
<% } %>

```
