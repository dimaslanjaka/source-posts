---
title: How to create dynamic toast with flowbite-react
date: 2024-02-04T21:16:11+07:00
tags: [javascript, typescript]
categories: [programming]
updated: 2024-02-04T22:11:22+07:00
thumbnail: https://www.flowbite-react.com/images/components/toast-dark.svg
---

In this article you will learn of How to create toast with flowbite-react dynamically, see below screenshoots.

![Desktop](https://github.com/dimaslanjaka/source-posts/assets/12471057/ff040935-f69b-420b-b3c7-35f0ba6cc6ba)
![Mobile](https://github.com/dimaslanjaka/source-posts/assets/12471057/884b397e-dbda-4b54-8a0c-af2e386dc447)

Below is an example of how you can create a dynamic toast component in React using `flowbite-react`.

## Create flowbite toast element

save below codes with filename `FlowbiteToast.tsx` in folder `src/component`

```tsx
import { Toast } from 'flowbite-react';
import React from 'react';
import { HiFire } from 'react-icons/hi';

interface FlowbiteToastProps {
  [key: string]: any;
  /** show toast indicator */
  showToast: boolean;
  /** parent state handler to set `showToast` useful for dismissable toast */
  handler: (showToast: boolean) => any;
}

const FlowbiteToast: React.FC<FlowbiteToastProps> = ({ showToast, handler }) => {
  // show toast when indicator=true
  return (
    showToast && (
      <Toast className="absolute top-5 end-5 z-50 shadow">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
          <HiFire className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Update available</span>
          <div className="mb-2 text-sm font-normal">A new software version is available for download.</div>
        </div>
        <Toast.Toggle
          onDismiss={() => {
            // hide toast when X button clicked
            handler(false);
          }}
        />
      </Toast>
    )
  );
};

export default FlowbiteToast;
```

## Insert `<FlowbiteToast/>` in parent react element

for example we create `Login.tsx` and showing flowbite toast after executing `fetch` ajax.

```tsx
import React from 'react';
import FlowbiteToast from './component/FlowbiteToast';

export default function Login() {
  // declare parent toast state
  const [showToast, setShowToast] = React.useState(false);
  useEffect(() => {
    // execute fetch ajax
    fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: 7, str: 'Some string: &=&'})
      }).then(() => {
        // show toast
        setShowToast(true);
      });
  }, []);
  return (<main><FlowbiteToast showToast={showToast} handler={setShowToast} /></main>);
}
```

## Conclusion

Now your dynamic flowbite-react toast ready to modify. Here [My Own FLowbite React Dynamic Toast](https://github.com/dimaslanjaka/webpack-boilerplate/commit/d220c84525d3538186790d72a53df275d6472384)

Thanks for reading my article of:
- flowbite-react toast dynamic
