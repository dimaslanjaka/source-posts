---
title: Exported variable has or is using name from external module
description: How to fix exported variable using private type from external module
date: 2024-02-04T02:04:52+07:00
updated: 2024-10-08T18:29:26+07:00
categories: [programming]
tags: [typescript]
---

In `typescript`, when you have an exported variable that uses a private type from an external module, you may run into issues because private types are not accessible outside of their module.

answers for exported variable that uses a private type from an external module:

- [Exported variable 'yourVariable' has or is using name 'TypeName' from external module "module/path" but cannot be named. ts(4023)](https://stackoverflow.com/questions/61456979/solve-react-typescript-error-export-variable-is-using-name-from-external-modul/77933352#77933352)

- [TS4023: Exported Variable `<x>` has or is using name `<y>` from external module but cannot be named](https://stackoverflow.com/questions/43900035/ts4023-exported-variable-x-has-or-is-using-name-y-from-external-module-but)

- [Exported variable X has or is using name Y from external module Z but cannot be named](https://stackoverflow.com/questions/62538330/exported-variable-x-has-or-is-using-name-y-from-external-module-z-but-cannot-be)

- [Exported variable 'projectConfig' has or is using name 'Config' from external module site:stackoverflow.com](https://www.google.com/search?q=Exported+variable+%27projectConfig%27+has+or+is+using+name+%27Config%27+from+external+module+site:stackoverflow.com&client=firefox-b-d&sca_esv=5c40852b81bce253&sxsrf=ACQVn0_cbfoN2nZaFBculzZNSiBrQy0xKw:1706986272038&sa=X&ved=2ahUKEwig_oWz64-EAxXH4jgGHU4tD10QrQIoBHoECBMQBQ&biw=1366&bih=615&dpr=1)

To fix exported variable using private type from external module, you can consider a few approaches:

## Fix steps

just declare the type, for example:

in external lib has code like below:

```typescript
interface privateProperty {
  name: string;
}
export const config = {
  propName: {} as privateProperty
}
```

in your code

```typescript
// this config['propName'] contains non-exported type/interface
import { config } from 'external-lib';

// declare new type from private property
type Y = config['propName']; // or typeof config['propName']
// declare new type that extends Y
export interface X extends Y {}
// apply interface X which contains Private Type Name
export const yourVariable = {} as X;
```

## Conclusion

done. now the problem fixed

result

before

![error](https://i.stack.imgur.com/6zwQS.png)

after

![success](https://i.stack.imgur.com/uVeAs.png)


