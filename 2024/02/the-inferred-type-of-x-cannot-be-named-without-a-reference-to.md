---
title: Fix The inferred type of 'X' cannot be named without a reference
description: How to fix The inferred type of 'X' cannot be named without a reference to 'path'. This is likely not portable. A type annotation is necessary.
date: 2024-02-17T10:03:26+07:00
tags: [typescript]
categories: [programming]
thumbnail: https://opengraph.githubassets.com/cb6062afbffe358485c799cae3d14f62e49207fe63b6ed7a7d7b3dbe598f1f63/reduxjs/redux-toolkit/issues/1806
---

If you're experiencing a TypeScript mistake related to module determination or sort induction. 
_The blunder message recommends that the sort of 'X' cannot be named without a reference to 'path/from/node_modules', and it may not be convenient._

To resolve this issue, you'll have to be give a type annotation for 'X' or adjust your module determination settings. 
Here are a few of methods you'll be able take:

## Sample problem

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

## Clean install

<details>
  <summary>Performing a clean introduce of Yarn can offer a few benefits</summary>
  
  1. **Guarantees a New Begin:
  ** Expelling any existing establishments and arrangements guarantees simply begin with a clean slate. This will be accommodating on the off chance that you've experienced issues or irregularities along with your past Yarn setup.
  
  2. **Settle Dependency Conflicts:
  ** A clean introduce makes a difference in settling potential reliance clashes or issues with obsolete bundles. It guarantees merely bring the most recent forms of Yarn and its dependencies.
  
  3. **Dodges Versioning Issues:
  ** Over time, you might have different forms of Yarn introduced on your framework. A clean introduce guarantees merely are working with the most recent steady form, diminishing the chance of versioning issues.
  
  4. **Makes strides Framework Soundness:
  ** Evacuating any leftovers of past establishments can contribute to a more steady and unsurprising environment. It makes a difference in avoiding unforeseen behavior caused by obsolete or clashing setups.
  
  5. **Improves Security:
  ** Remaining up-to-date with the most recent forms of bundle directors is vital for security. A clean introduce guarantees simply have the foremost later form of Yarn, which may incorporate security patches and advancements.
  
  6. **Tackles Establishment Issues:
  ** In the event that you've experienced troubles amid the establishment of Yarn or have issues related to lost conditions, a clean introduce can offer assistance resolve these issues.
  
  7. **Simplifies Troubleshooting:
  ** When looking for offer assistance or investigating issues with Yarn, beginning with a clean establishment gives a steady standard. It makes it simpler for others to help you, as they won't got to consider potential complications from past configurations.
  
  8. **Advances Best Practices:
  ** Intermittently performing clean installs could be a great hone to preserve a solid improvement environment. It guarantees that you're working with an optimized setup and diminishes the probability of experiencing unforeseen issues.
</details>

On Unix-based systems (Linux or macOS):

```bash
rm -rf node_modules
rm yarn.lock
rm package-lock.json
yarn cache clean
npm cache clean --force
```

On Windows (using Command Prompt):

```batch
rmdir /s /q node_modules
del yarn.lock
del package-lock.json
yarn cache clean
npm cache clean --force
```

then `yarn install` or `npm install` again

## Type Annotation

Provide a type annotation for 'loadSavedCredentialsIfExist'. For example:

```ts
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

## Boundary return type

Provide a boundary return type for 'loadSavedCredentialsIfExist'. For example:

```ts
/**
 * Reads previously authorized credentials from the save file.
 *
 * @return
 */
export function loadSavedCredentialsIfExist(): import('googleapis-common/node_modules/google-auth-library/build/src/auth/googleauth').JSONClient {
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
