---
title: Array JSX Join
webtitle: Snippet
date: 2022-11-03T09:39:01+07:00
updated: 2022-11-03T09:41:52+07:00
tags: ['Snippet', 'JS', 'TS']
categories: ['JS', 'TS']
---

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

## Usage Example
```javascript
jsxJoin([<div>first jsx snippet</div>, <div>second jsx snippet</div>, <div>third jsx snippet</div>])
```

[Source Idea](https://stackoverflow.com/a/51469655)
