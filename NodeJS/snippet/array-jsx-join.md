---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2022-11-03T02:39:01.000Z
description: Array JSX Join Faq How to join array of JSXHow to array join of
  React Elements How to join array of JSX How to array join of React Elements
  JSX Array Join Javas
lang: en
tags:
  - snippet
  - javascript
  - typescript
thumbnail: /NodeJS/assets/pngwing.com.png
title: Array JSX Join
type: post
updated: 2023-09-02T21:09:42.819Z
webtitle: Snippet
wordcount: 536

---

## Faq
- How to join array of JSX
- How to array join of React Elements

## JSX Array Join Javascript Function
```javascript
function jsxJoin(array, separator) {
  return array.length > 0
    ? array.reduce((result, item) => (
        <>
          {result}
          {separator}
          {item}
        </>
      ))
    : null
}
```

## Array JSX Join Typescript Function
```typescript
function jsxJoin(array: JSX.Element[], separator: string | JSX.Element) {
  return array.length > 0
    ? array.reduce((result, item) => (
        <>
          {result}
          {separator}
          {item}
        </>
      ))
    : null
}
```

## Array JSX Join With Validation
```typescript
function array_jsx_join(
  arr: JSX.Element[],
  delimeter?: JSX.Element | string
): JSX.Element {
  if (!Array.isArray(arr) || arr.length === 0)
    return <>[array_jsx_join] empty array</>
  let delim: JSX.Element = <br>
  if (typeof delimeter === 'string') {
    delim = <span>{delimeter}</span>
  } else if (typeof delimeter !== 'undefined') {
    delim = delimeter
  }
  return arr.reduce((prev, curr) => (
    <>
      {prev}
      {delim}
      {curr}
    </>
  ))
}
```

## Usage Example
```javascript
jsxJoin([<div>first jsx snippet</div>, <div>second jsx snippet</div>, <div>third jsx snippet</div>])
```

[Source Idea](https://stackoverflow.com/a/51469655)