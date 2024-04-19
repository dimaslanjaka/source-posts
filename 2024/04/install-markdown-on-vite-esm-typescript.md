---
title: Install markdown engine on vite ESM typescript
description: How to install markdown renderer engine on vite ESM typescript
date: 2024-04-05T16:30:51+07:00
thumbnail: https://github.com/dimaslanjaka/source-posts/assets/12471057/fb798a73-27aa-4e74-b063-f72fb66e2596
updated: 2024-04-19T23:41:38+07:00
categories: [programming]
tags: [typescript]
---

![Vite + Markdown](https://github.com/dimaslanjaka/source-posts/assets/12471057/fb798a73-27aa-4e74-b063-f72fb66e2596)



## Install

```bash
yarn add -D vite-plugin-markdown @babel/preset-react @babel/preset-typescript @babel/env babel-plugin-module-resolver
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

## Vite configuration

Configure Vite to handle TypeScript and ESM: Ensure your `vite.config.ts` (or `vite.config.js` if you're using JavaScript) is set up to handle TypeScript and ESM.

```ts
import * as mdp from 'vite-plugin-markdown';
const { plugin: mdPlugin, Mode } = mdp;
const config = {
  plugins: [mdPlugin({ mode: [Mode.HTML, Mode.MARKDOWN, Mode.TOC, Mode.REACT] })], // you can change react to Mode.VUE
}
export default defineConfig(config);
```

Here my full working `vite.config.ts` for reference

```ts
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { createRequire } from 'node:module';
import path from 'upath';
import { UserConfig, defineConfig } from 'vite';
import * as mdp from 'vite-plugin-markdown';

const { plugin: mdPlugin, Mode } = mdp;
dotenv.config({ override: true });

const require = createRequire(import.meta.url);

const config: UserConfig = {
  plugins: [react(), mdPlugin({ mode: [Mode.HTML, Mode.MARKDOWN, Mode.TOC, Mode.REACT] })],
  server: {
    port: 4000
  },
  resolve: {
    alias: {
      '*': path.resolve('.'),
      '@utils': path.resolve('./src/utils'),
      '@components': path.resolve('./src/components'),
      '@routes': path.resolve('./src/routes'),
      '@assets': path.resolve('./src/assets'),
      '@src': path.resolve('./src'),
      '@root': path.resolve('./'),
      '@post': path.resolve('./src/posts'),
      'react/jsx-dev-runtime': require.resolve('react/jsx-dev-runtime'),
      'react/jsx-runtime': require.resolve('react/jsx-runtime')
    }
  }
};

export default defineConfig(config);
```

## Conclusion

all done. you can refer to [this repository](https://github.com/hmsk/vite-plugin-markdown/tree/b7f3e0f789b35437f38d37ea61f8992927c897bf/examples) to view examples usage to render markdown
