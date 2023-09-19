---
title: Fix rollup eval warning
date: 2023-09-05T03:02:20+07:00
updated: 2023-09-05T03:08:09+07:00
tags: [javascript]
categories: [programming]
---

## Error summary
_freeGlobal appears to be imported at https://github.com/lodash/lodash/blob/master/.internal/nodeUtil.js#L1. It looks like lodash is a dependency of Bluebird (https://github.com/request/promise-core/blob/master/package.json#L36).

If I try to add lodash to the fuzzymatchingjs's dependencies directly, this require for freeGlobal is resolved and the JavaScript is usable in a browser context.

some looks error logs

```log
(!) Use of eval is strongly discouraged
https://rollupjs.org/troubleshooting/#avoiding-eval
node_modules/bluebird/js/browser/bluebird.js
```

## How to fix

- change orders of plugins
> Fixed by putting `rollup-commonjs` plugin just after `rollup-plugin-node-resolve` plugin and it is working like a charm! :)
>
> Or newer version
> putting `@rollup/plugin-commonjs` plugin just after `@rollup/plugin-node-resolve` plugin

## Conclusion
this warning easily fixed by change orders of plugin

full `rollup.config.js` working example:

```js
// bundle for browser and ESM module
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
const json = require('@rollup/plugin-json');
//const typescript = require('@rollup/plugin-typescript');
//const tsconfig = require('./tsconfig.build.json');
//const tsbase = require('./tsconfig.base.json');
const lib = require('./package.json');
const outputFileName = 'sbg-utility';
const name = 'sbg-utility';
const input = './dist/index.js';
const polyfill = require('rollup-plugin-polyfill-node');

/**
 *
 * @param {import('rollup').RollupOptions} config
 * @returns
 */
const buildConfig = (config) => {
  /*const tsOpt = Object.assign(tsbase, tsconfig, {
    compilerOptions: {
      module: 'esnext',
      lib: ['es2020', 'dom'],
      target: 'es5',
      allowSyntheticDefaultImports: true,
      skipLibCheck: true
    }
  });
  if (tsOpt.extends) delete tsOpt.extends;*/
  // plugins: [typescript(tsOpt)]
  const build = ({ minified }) => ({
    input,
    ...config,
    output: {
      ...config.output,
      file: `${config.output.file}.${minified ? 'min.js' : 'js'}`
    },
    plugins: [
      json(),
      polyfill(),
      commonjs(),
      resolve({ preferBuiltins: true, browser: true }),
      minified && terser(),
      ...(config.plugins || [])
    ]
  });

  return [build({ minified: false }), build({ minified: true })];
};

const defaults = async () => {
  const year = new Date().getFullYear();
  const banner = `// ${lib.name} v${lib.version} Copyright (c) ${year} ${lib.author}`;

  return [
    ...buildConfig({
      output: {
        file: `dist/browser/${outputFileName}`,
        name,
        format: 'umd',
        exports: 'default',
        banner
      }
    }),

    ...buildConfig({
      output: {
        file: `dist/esm/${outputFileName}`,
        format: 'esm',
        preferConst: true,
        exports: 'named',
        banner
      }
    })
  ];
};

module.exports = defaults;
```

then run this config using `rollup -c -m`

- [issue references](https://github.com/rollup/rollup-plugin-commonjs/issues/210)
