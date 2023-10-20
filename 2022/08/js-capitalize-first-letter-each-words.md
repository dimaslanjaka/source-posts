---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2022-08-26T08:44:00+0700
description: how to capitalize the first letter of any word mixed with symbols
  or non-alphabetic chars in JavaScript
lang: en
tags:
  - scripts
  - snippets
  - javascript
thumbnail: /2022/08/js-capitalize-first-letter-each-words/cover.png
title: JS Capitalize First Letter of Each Words Which Mixed With Symbols
type: post
updated: 2023-09-02T21:28:05.000Z
wordcount: 634

---

## How to Capitalize the First Letter of Each Word in JavaScript – a JS Capitalize Tutorial
This article shows how to capitalize the first letter of any word mixed with symbols or non-alphabetic chars in JavaScript. Then capitalize the first letter of every word in the sentence which concatenate or mixed with symbols.

## Snippet

```js
/**
 * capitalize string first letter of each word which mixed with symbols
 * @param {string} str
 * @param {string[]} moreSymbols add more symbols
 * @returns
 */
function capitalizer(str, moreSymbols) {
  let symbols = ["-", " "];
  if (Array.isArray(moreSymbols)) {
    // concatenate more symbols
    symbols = [...new Set(symbols.concat(moreSymbols))];
  }
  symbols.forEach((symbol) => {
    str = str
      .split(symbol)
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
      .join(symbol);
  });
  return str;
}
```

## Example

<!-- include js-capitalize-first-letter-each-words/content.html -->
<script src="js-capitalize-first-letter-each-words/script.js"></script>

## Code Playground
full code example at [https://codepen.io/dimaslanjaka/pen/wvmbxOG?editors=1010](codepen)

## Current Page Script

HTML

```html
<!-- include js-capitalize-first-letter-each-words/content.html -->
```

JS

```js
<!-- include js-capitalize-first-letter-each-words/script.js -->
```

## Conclusion

Congratulations, you learned something new today! In summary, in this article you learned how to:

- access characters from a string
- capitalize the first letter of a word
- split a string into an array of words
- Reconstruct words from an array to form a string
- Accomplish the same task using regular expressions