---
title: Setup VSCode for typescript with css modules
description: Setup VSCode for typescript with css modules import support. You can be able import css,scss,less,stylus file as modular import in typescript+react+webpack project
date: 2023-09-16T05:59:55+07:00
tags: [react, typescript, javascript, vscode]
categories: [programming]
---

Setup VSCode for typescript with css modules import support. You can be able import css,scss,less,stylus file as modular import in typescript+react+webpack project.

This method also has the following functions and advantages:
- fix issues react bundle all things together.
  - style each React route independently
  - React.JS React-Router-Dom applying css on every routes

## Install typescript plugin

```bash
yarn add -D typescript-plugin-css-modules
```
or
```bash
npm install -D typescript-plugin-css-modules
```

## Change VSCode USER SETTINGS json

add these configuration to your user settings json

```jsonc
{
  // prompt using local project typescript version
  "typescript.enablePromptUseWorkspaceTsdk": true,
  // add plugin to vscode typescript server language
  "typescript.tsserver.pluginPaths": [
    "typescript-plugin-css-modules"
  ]
}
```

## Change VSCode PROJECT SETTINGS json

add these configuration to your project settings json

```jsonc
{
  // tell vscode to using local project typescript version
  "typescript.tsdk": "./node_modules/typescript/lib"
}
```

## Modify tsconfig.json

enable css modules plugin in project typescript configuration by editing `tsconfig.json`

```jsonc
{
  "compilerOptions": {
    // enable css modules plugin
    "plugins": [{ "name": "typescript-plugin-css-modules" }],
    "lib": [
      "DOM", // browser DOM support such as (window, document.*, etc)
      "ES2020" // enable modern ECMAScript prototype support
    ] 
  },
  "include": [
    "src", // include all typescript and javascript files
    "src/**/*.json", // json file import support
    "src/**/*.css", // css file import support
    "src/**/*.scss", // scss file import support
    "src/**/*.less" // less file import support
  ],
  "exclude": [
    "**/node_modules/**", // exclude node_modules folder from compilation
    "**/dist/**" // exclude dist folder
  ]
}
```

### Full example of `tsconfig.json`

Or use my typescript config then modify it according to your project structure

```jsonc
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "jsx": "react",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "outDir": "tmp/tsc",
    "checkJs": false,
    "composite": true,
    "allowJs": true,
    "resolveJsonModule": true,
    "downlevelIteration": true,
    "allowSyntheticDefaultImports": true,
    "skipDefaultLibCheck": true,
    "skipLibCheck": true,
    "strict": false,
    "lib": [
      "DOM",
      "ES2020"
    ],
    "typeRoots": [
      "./typings",
      "./node_modules/@types",
      "./node_modules/nodejs-package-types/typings"
    ],
    "types": [
      "rsuite"
    ],
    "plugins": [
      {
        "name": "typescript-plugin-css-modules"
      }
    ]
  },
  "include": [
    "src",
    "src/**/*.json",
    "src/**/*.css",
    "src/**/*.scss",
    "src/**/*.less",
    "typings"
  ],
  "exclude": [
    "**/node_modules/**",
    "./page/**/*",
    "**/dist/**"
  ]
}
```

## Create or modify `src/global.d.ts`

create or modify `src/global.d.ts` to apply css modules to typescriptreact project, by adding below declarations:

```jsonc
// typescript css modules

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export default classes;
}

// additional configs

declare global {
  interface Window {
    // custom global window properties
    [key: string]: any; // enable dynamic object support
    dataLayer: Record<string, any>[]; // google analytics
    opera: Record<string, any>;
    opr: Record<string, any>;
    safari: Record<string, any>;
    adsbygoogle: any; // google adsense
    clipboardData?: any; // safari clipboard
    google: import('@types/google.accounts'); // google new API GSI client
  }

  interface Event {
    // custom global event properties
    clipboardData?: any; // safari clipboard
  }
}
```

## Conclusion

Now reload window and your vscode now supported import css modules into typescript or javascript files (react or non-react).
To test create new file:

create the style `src/Layout.module.scss`

```scss
.myLayout {
 h1 { color: blue; background-color: white; }
}
```

create the component `src/Layout.tsx`

```typescript
import React from 'react';
import styles from './Layout.module.scss';

export function Layout() {
  return (
    <div className={styles.myLayout}><h1>Hello World</h1></div>
  );
}
```
