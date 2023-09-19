---
title: create interface class and function in typescript d.ts
date: 2023-09-07T08:46:43+07:00
updated: 2023-09-07T09:09:51+07:00
tags: [typescript]
categories: [programming]
---

## Summary
when you create an library which is can be function or class like below sample
```ts
import Client from "./client";

// The following two lines both achieve the same result.
const clas = new Client();
const fun = Client();
```

The `client` may be constructed via the new keyword or implicitly without as a function call. 
How you can express this in a types.d.ts file? 

## Conclusion

The conventional way something like this is done in TypeScript's own standard library (see [the typings for `Date`](https://github.com/microsoft/TypeScript/blob/ec77bff33226fb01f4e38b20e481f8c1fcd9e6c0/lib/lib.es5.d.ts#L729-L907) for example) is to declare two `interface`s; one for the instance type (with the intended `class` name) and another for the constructor type (usually the same name with `Constructor` appended to it). 
And then you declare the class constructor value as a `var` or `const`. 
If you want to give the constructor added functionality, such as being callable without `new`, you can do it inside the `XXXConstructor` interface. 
Like so: (Making a class and function interchangeable in Typescript types.d.ts library definition)

```ts
// this you class import, were assumed like this
interface Client {
  foo(): void;
}
// create new client constructor
interface ClientConstructor {
  new(): Client;
  (): Client;
}
// export them
declare const Client: ClientConstructor;
export default Client;
```

[Sample mock demo typescript playground](https://www.typescriptlang.org/play?module=1#code/PTAEGMBsEsFMDsAuA6RBnAUCUiAW01QBPAewFcJIBDNQ6AWwAcSAnRAGlAHdYXZQaaMvVgATUDADW-PAQzQkvAGZVw-AJIBhGAkSgA3hlCglJEgApkVqiwDmaAFwD4RAJROAbiWiiA3BgBfDAwlMnhwRGgSeFBtOCRzWUdQLR0kVwMjCGi0PVMSUABeUHNGPiVoAA8nXJYFWwzCgD4DbPg0EkhYZEgSW1Lyqs4AcnzhjKDjaCUSpIzDY2Mk5HyikzN-Y0nQPkQyFhiFxfysoKCsMHA+KkR+eFguSni9cBzEFjII1nlFFhU1WJpRCaN4fL4sTLGe5cczuFJxXSbEpw1LPfznbCwSrMNg4XCwegYLE4vT6QHPEHtd6fRCsUBBYmsPSiWAqMiQPQIpACQhc4GgmmsfwXUAAGVg6BwsFyoGgiBFDBJ5N0JhYJHooGGyGAUGew2F2CusBu-HoJHAklAaCoTC66whSVAjGoRFsarC4luuQwrypoHoRD5ayDNGVSEptUFLGFvplsepETEa2h-sDQNh-njYNuohWZnMACIAEZEUApvkF1wxt4QKiQLriYoBvnIIsKUTmfQBVwZn11ht5izF0uhcKV3xAA)
