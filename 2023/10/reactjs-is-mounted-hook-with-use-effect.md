---
title: ReactJS isMounted hook with useEffect
thumbnail: reactjs-is-mounted-hook-with-use-effect/thumbnail.png
date: 2023-10-17T05:34:57.370Z
updated: 2023-10-17T05:46:27.211Z
categories:
  - programming
tags:
  - javascript
  - react
---

## Basic errors

```log
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.
```

## Basic `React.useEffect`

understanding basic usage of `React.useEffect`

### call every changes

> Below codes will run on every render of your component, e.g. when state or props change.

```js
React.useEffect(() => {
  // component is mounted
  return () => {
    // component is being unmounted
  }
});
```

### call only once

> Below codes will run an effect and clean it up only once (on mount and unmount). This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.

```js
React.useEffect(() => {
  // component is mounted
  return () => {
    // component is being unmounted
  }
}, []); // run once on mount
```

## Basic `React.useRef`

> Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render.

## Storing `isMounted` with `React.useRef`

You'll `React.useEffect` to monitor when the component mounts or unmounts, and save that info in a `ref`

```js
const isMounted = React.useRef(false); // unmounted by default

React.useEffect(() => {
  isMounted.current = true; // mounted
  return () => {
    isMounted.current = false; // unmounted
  }
}, []); // run once on mount
```

Now anytime you need to know if our component is mounted, you can check `isMounted.current` to get the current value.