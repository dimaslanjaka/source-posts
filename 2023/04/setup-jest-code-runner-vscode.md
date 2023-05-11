---
title: How to setup jest typescript and code runner in vscode
date: 2023-04-19T13:41:48+07:00
updated: 2023-05-11T18:50:16+07:00
categories: [programming]
tags: [vscode, guide]
---

![thumbnail](https://user-images.githubusercontent.com/12471057/236297105-21e4c9ef-ea6d-407f-8603-76990ee80977.png)

## How to setup jest typescript with code runner in vscode
with this technique you can directly run test single file in vscode without typings manually in terminal, see below screenshot
![image](https://user-images.githubusercontent.com/12471057/232989254-54d05159-4379-46e1-827f-812419e721b9.png)

## Requirements
- install [vscode code-runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
- optional install [vscode prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Setup
step by step how to setup jest within vscode code runner

### create file `.vscode/settings.json`
create settings file and fill below configs.

```jsonc
{
  "emmet.includeLanguages": {
    "ejs": "html" // treat ejs as html
  },
  "terminal.integrated.env.linux": { // linux custom PATH environment variable
    "PATH": "${env:PATH}:${workspaceFolder}/node_modules/.bin:${workspaceFolder}/bin"
  },
  "terminal.integrated.env.windows": { // windows custom PATH environment variable
    "PATH": "${env:PATH};${workspaceFolder}\\node_modules\\.bin;${workspaceFolder}\\bin"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true, // let ESLint take formating and linting
    "source.organizeImports": true // auto remove unused imports
  },
  "[ts]": {
    "editor.formatOnSave": false // custom formating with default vscode formatter
  },
  "[scss]": {
    "editor.formatOnSave": true, // custom formating with default vscode formatter
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.formatOnSave": true, // custom formating with default vscode formatter
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[ejs]": {
    "editor.formatOnSave": true // custom formating with default vscode formatter
  },
  "[json]": {
    "editor.formatOnSave": true, // custom formating with default vscode formatter
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "editor.formatOnSave": false, // default vscode formatter
  "git.enabled": true, // enable git
  "code-runner.clearPreviousOutput": true, // code runner clear console when run code
  "code-runner.saveFileBeforeRun": true, // code runner save current file before run
  "code-runner.saveAllFilesBeforeRun": true, // code runner save all files before run
  "code-runner.runInTerminal": true, // code runner run in terminal
  "files.exclude": {
    "**/node_modules": true,
    "**/vendor": true
  },
  "code-runner.respectShebang": true, // code runner follow executor maps
  "code-runner.executorMapByGlob": { // code runner executor map by glob
    "*.test.ts": "yarn test -- $fileNameWithoutExt"
  },
  "eslint.codeActionsOnSave.mode": "all" // code runner save all files before run
}
```

### install dependencies

```bash
npm install -D jest ts-jest jest-config jest-mock @jest/expect @jest/environment @jest/types @jest/globals
# or
yarn add -D jest ts-jest jest-config jest-mock @jest/expect @jest/environment @jest/types @jest/globals
```

### create `jest.config.ts` in root project
create config for jest in root of project, fill and configure below codes as you wish:
```typescript
import type { Config } from 'jest';
import { defaults } from 'jest-config';
import { join } from 'path';

/**
 * @type {import('jest').Config}
 * @see {@link https://jestjs.io/docs/configuration}
 * * how to run single test {@link https://stackoverflow.com/questions/28725955/how-do-i-test-a-single-file-using-jest}
 */
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
  verbose: false,
  cache: true,
  cacheDirectory: join(__dirname, 'tmp/jest'),
  collectCoverageFrom: ['src/*.{js,ts}', '!**/node_modules/**', '!**/vendor/**', '!**/test/**', '!**/*.test.{js,ts}'],
  roots: [`<rootDir>/test`],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/tmp/', '/test/'],

  testMatch: [`**/__tests__/**/*.+(ts|tsx|js)`, `**/?(*.)+(spec|test).+(ts|tsx|js)`, `**/test/*.test.ts`],

  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      // required due to custom location of tsconfig.json configuration file
      // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig
      { tsconfig: './tsconfig.jest.json' }
    ]
  },

  detectLeaks: true,
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8'

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],
};

export default config;
```

### create `tsconfig.jest.json`
create typescript config for jest in root of project folder, change typescript config for jest below as you wish:
```jsonc
{
  // custom schema (non-vscode environment)
  "$schema": "https://json.schemastore.org/tsconfig",
  // extends other typescript config file
  "extends": "./tsconfig.json",
  "compilerOptions": {
    // make dump output to temp folder
    "outDir": "tmp/jest",
    /* Visit https://aka.ms/tsconfig.json to read more about this file */
    /* Language and Environment */
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,

    /* Modules */
    "module": "commonjs" /* Specify what module code is generated. */,
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

    /* Type Checking */
    "strict": false /* Enable all strict type-checking */,
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  }
}
```

### step to test 
create sample test inside `test` folder

#### create `test/math-operator.test.ts`
create sample math operator test for jest, below is sample test:
```typescript
import { beforeEach, describe, expect, it, jest } from '@jest/globals';

const mathOperations = {
   sum: function(a,b) {
       return a + b;
   },
   
   diff: function(a,b) {
       return a - b;
   },
   product: function(a,b) {
       return a * b
   }
}

describe("Calculator tests", () => {
 jest.setTimeout(60000); // sample set timeout globally
 test('adding 1 + 2 should return 3', () => {
   expect(mathOperations.sum(1, 2)).toBe(3);
 });
})
```

to run above file, just **right click** choose **run**. Sample result below:
![image](https://user-images.githubusercontent.com/12471057/232991721-ca4f34c9-49ed-4ee7-877b-3418907fe684.png)

## Conclusion
thats all how to setup jest typescript in vscode. above steps 100 percent tested in year 2023.
