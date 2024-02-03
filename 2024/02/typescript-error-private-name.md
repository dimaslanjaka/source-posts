---
title: Exported variable has or is using name from external module
date: 2024-02-04T02:04:52+07:00
categories: [programming]
tags: [typescript]
---

fix errors of:

- [Exported variable 'yourVariable' has or is using name 'TypeName' from external module "module/path" but cannot be named. ts(4023)](https://stackoverflow.com/questions/61456979/solve-react-typescript-error-export-variable-is-using-name-from-external-modul/77933352#77933352)

just declare the type, for example:

in external lib has code like below:

```ts
interface privateProperty {
  name: string;
}
export const config = {
  propName: {} as privateProperty
}
```

in your code

```ts
// this config['propName'] contains non-exported type/interface
import { config } from 'external-lib';

// declare new type from private property
type Y = config['propName']; // or typeof config['propName']
// declare new type that extends Y
export interface X extends Y {}
// apply interface X which contains Private Type Name
export const yourVariable = {} as X;
```

done. now the problem fixed

result 

before 
[![error][1]][1]

after
[![success][2]][2]


  [1]: https://i.stack.imgur.com/6zwQS.png
  [2]: https://i.stack.imgur.com/uVeAs.png
