---
title: Fix The inferred type of 'X' cannot be named without a reference
description: How to fix The inferred type of 'X' cannot be named without a reference to 'path'. This is likely not portable. A type annotation is necessary.
date: 2024-02-17T10:03:26+07:00
tags: [typescript]
categories: [programming]
---

If you're experiencing a TypeScript mistake related to module determination or sort induction. 
_The blunder message recommends that the sort of 'X' cannot be named without a reference to 'path/from/node_modules', and it may not be convenient._

To resolve this issue, you'll have to be give a type annotation for 'X' or adjust your module determination settings. 
Here are a few of methods you'll be able take:

For example I will resolve these error

```log
The inferred type of 'loadSavedCredentialsIfExist' cannot be named without a reference to 'googleapis-common/node_modules/google-auth-library/build/src/auth/googleauth'. This is likely not portable. A type annotation is necessary.ts(2742)
```
![image](https://github.com/dimaslanjaka/source-posts/assets/12471057/01783fa3-de3d-4b37-9ed1-c51238b10164)

with the problem codes is

```typescript
import { Auth, google } from 'googleapis';

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return
 */
export function loadSavedCredentialsIfExist() {
  try {
    const content = fs.readFileSync(TOKEN_PATH).toString();
    const credentials = JSON.parse(content);
    // const uri = 'https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=' + credentials.accestoken;
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}
```

## Type Annotation

Provide a type annotation for 'loadSavedCredentialsIfExist'. For example:

```
const loadSavedCredentialsIfExist: import('googleapis-common/node_modules/google-auth-library/build/src/auth/googleauth').JSONClient = function () {
  try {
    const content = fs.readFileSync(TOKEN_PATH).toString();
    const credentials = JSON.parse(content);
    // const uri = 'https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=' + credentials.accestoken;
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}
```
