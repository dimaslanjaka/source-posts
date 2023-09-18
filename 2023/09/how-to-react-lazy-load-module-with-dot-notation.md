---
title: How to lazy loading JSX react module with dots notation
description: "React lazy loading module with dot notation such as subclass or non default export"
date: 2023-09-18T13:18:02+07:00
categories: [programming]
tags: [react, javascript, typescript]
---

How to React lazy loading module with dot notation such as subclass or non default export ?

## Code Example

```tsx
// import { Nav, Navbar } from 'rsuite'; // <-- this is original import without lazy loading
// then below is turn them into react lazy loading
const Nav = React.lazy(() => import('rsuite/esm/Nav'));
const NavItem = React.lazy(() =>
  import('rsuite/esm/Nav').then(module => ({
    default: module.default.Item,
  })),
);
const NavMenu = React.lazy(() =>
  import('rsuite/esm/Nav').then(module => ({
    default: module.default.Menu,
  })),
);
```
