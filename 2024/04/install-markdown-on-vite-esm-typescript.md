---
title: Install markdown engine on vite ESM typescript
description: How to install markdown renderer engine on vite ESM typescript
date: 2024-04-05T16:30:51+07:00
thumbnail: https://github.com/dimaslanjaka/source-posts/assets/12471057/fb798a73-27aa-4e74-b063-f72fb66e2596
---

![v60msjomdl51lq1fd48r](https://github.com/dimaslanjaka/source-posts/assets/12471057/fb798a73-27aa-4e74-b063-f72fb66e2596)

## Install

```bash
yarn add -D vite-plugin-markdown @babel/preset-react
```

## Setup babel config

create `.babelrc.js`

```js
const presets = ['@babel/env', '@babel/react', '@babel/preset-typescript'];
const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [__dirname, './src'],
      extensions: ['.jsx', '.js', '.ts', '.tsx', '.json']
    }
  ]
];

module.exports.config = { cacheDirectory: './tmp/babel', presets, plugins };

/**
 *
 * @param {import('@babel/core').ConfigAPI} api
 * @returns {import('@babel/core').TransformOptions}
 */
module.exports = function (api) {
  api.cache(true);

  return { presets, plugins };
};
```
