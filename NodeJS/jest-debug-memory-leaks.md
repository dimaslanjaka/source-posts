---
title: debug memory leaks with jest
date: 2023-05-27T17:04:21+07:00
updated: 2023-05-27T17:23:34+07:00
tags: [jest, js]
categories: [programming, javascript, typescript]
---

<details>
  <summary>based on <a href="https://stackoverflow.com/a/73420288/6404439">stackoverflow</a></summary>

  You can try to use --logHeapUsage\
  From [documentation](https://jestjs.io/docs/cli):

  > Logs the heap usage after every test. Useful to debug memory leaks. Use together with --runInBand and --expose-gc in node.

  You can try exposing the garbage collector with --expose-gc and adding

  ```
  afterAll(() => {
    global.gc && global.gc()
  })

  ```

  Another option is `jest -w 1` to avoid these memory issues.

  > --maxWorkers\
  > Alias: -w. Specifies the maximum number of workers the worker-pool will spawn for running tests. In single run mode, this defaults to the number of the cores available on your machine minus one for the main thread. In watch mode, this defaults to half of the available cores on your machine to ensure Jest is unobtrusive and does not grind your machine to a halt. It may be useful to adjust this in resource limited environments like CIs but the defaults should be adequate for most use-cases.\
  > For environments with variable CPUs available, you can use percentage based configuration: --maxWorkers=50%

  References:\
  [Cannot find memory leak in my Express.js Jest tests](https://stackoverflow.com/questions/72068051/cannot-find-memory-leak-in-my-express-js-jest-tests)\
  [My Jests tests are leaking memory, how can I fix this?](https://stackoverflow.com/questions/62885390/my-jests-tests-are-leaking-memory-how-can-i-fix-this)\
  [What are the steps to follow to debug memory leak in Jest?](https://stackoverflow.com/questions/53853125/what-are-the-steps-to-follow-to-debug-memory-leak-in-jest)\
  <https://chanind.github.io/javascript/2019/10/12/jest-tests-memory-leak.html>
</details>

## Step to dump memory leaks
> If you haven't installed `jest`, please read [https://www.webmanajemen.com/2023/04/setup-jest-code-runner-vscode.html](https://www.webmanajemen.com/2023/04/setup-jest-code-runner-vscode.html)

- create new test file
```ts
import { afterAll, describe, expect, it } from '@jest/globals';
import fs from 'fs';
import { join } from 'path';
import { testcfg } from './config';

describe('.gitignore test', () => {
  const ignoredFile = join(testcfg.cwd, 'file-ignore.txt');
  const ignoredFile2 = join(testcfg.cwd, 'file-ignore-another.txt');

  it('write', () => {
    fs.writeFileSync(ignoredFile, '');
    fs.writeFileSync(ignoredFile2, '');
    expect(fs.existsSync(ignoredFile)).toBeTruthy();
    expect(fs.existsSync(ignoredFile2)).toBeTruthy();
  }, 900000);

  afterAll(() => {
    if (global.gc) {
      global.gc();
    }
  });
});
```
- run using below command
```bash
node --expose-gc ./node_modules/jest-cli/bin/jest.js --logHeapUsage -- test-file-name
```
