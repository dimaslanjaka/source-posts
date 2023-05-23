---
title: Asynchronous serial iteration over an array collection
date: 2023-05-24T05:16:52+07:00
updated: 2023-05-24T05:35:31+07:00
categories: [programming, javascript, typescript]
tags: [script, snippet]
---

Node.js design patterns:
Asynchronous serial iteration over a collection using callbacks.

This is an example of a very common Node.js design pattern.
Serial asynchronous iteration over collections (arrays) using callbacks.

If you want to learn more about common (and not-so-common) Node.js design patterns, check this out.
Book Node.js design patterns by Mario Casciaro and Luciano Mammino modified by L3n4r0x support for typescript. [source](https://gist.github.com/lmammino/ac91a7bde88c0f6c6962268d67e3ffbe)

## Features
- iterate without callback (auto detect callback is called or not)
- support asynchronous or synchronous callback function
- typescript generic type supported

## Javascript Asynchronous serial iteration over an array collection

```javascript
"use strict";
/**
 * A callback based function that allows to iterate over a collection
 * and perform asynchronous actions on every element. The processing is
 * done is series, so an element is started only when the previous one
 * has been completed. In case of error the whole processing is interrupted
 * early and the error is propagated to the finalCallback to let the caller
 * decide how to handle it.
 *
 *
 * @param collection - The generic array of elements to iterate over
 * @param iteratorCallback - The callback based function that will
 *        be used to process the current element.
 *        It receives the current element as first paramenter and a callback
 *        as second parameter. The callback needs to be invoked to indicate
 *        the end of the asynchronous processing. It can be called passing an
 *        error as first parameter to propagate an error)
 * @param finalCallback - A function that is called when all the
 *        items have been processed or when an error occurred. If an error
 *        occurred the function will be invoked with a single argument
 *        representing the error.
 */
const iterateSeries = (collection, iteratorCallback, finalCallback) => {
    const stoppingPoint = collection.length;
    function iterate(index) {
        // console.log('it', index);
        if (index === stoppingPoint) {
            // console.log('final');
            return finalCallback();
        }
        else {
            const current = collection[index];
            let called = false;
            const done = function (err) {
                called = true;
                if (err) {
                    return finalCallback(err);
                }
                return iterate(index + 1);
            };
            if (iteratorCallback instanceof Promise) {
                iteratorCallback(current, done).then(done);
            }
            else {
                iteratorCallback(current, done);
            }
            if (!called)
                done();
        }
    }
    iterate(0);
};
```

## Typescript Asynchronous serial iteration over an array collection
```typescript
/**
 * A callback based function that allows to iterate over a collection
 * and perform asynchronous actions on every element. The processing is
 * done is series, so an element is started only when the previous one
 * has been completed. In case of error the whole processing is interrupted
 * early and the error is propagated to the finalCallback to let the caller
 * decide how to handle it.
 *
 *
 * @param collection - The generic array of elements to iterate over
 * @param iteratorCallback - The callback based function that will
 *        be used to process the current element.
 *        It receives the current element as first paramenter and a callback
 *        as second parameter. The callback needs to be invoked to indicate
 *        the end of the asynchronous processing. It can be called passing an
 *        error as first parameter to propagate an error)
 * @param finalCallback - A function that is called when all the
 *        items have been processed or when an error occurred. If an error
 *        occurred the function will be invoked with a single argument
 *        representing the error.
 */
const iterateSeries = <T extends any[]>(
  collection: T,
  iteratorCallback:
    | ((currentElement: T[number], done: (...args: any[]) => any) => any)
    | ((currentElement: T[number], done: (...args: any[]) => any) => Promise<any>),
  finalCallback: (err?: Error) => any | Promise<any>
) => {
  const stoppingPoint = collection.length;

  function iterate(index: number) {
    // console.log('it', index);
    if (index === stoppingPoint) {
      // console.log('final');
      return finalCallback();
    } else {
      const current = collection[index];
      let called = false;
      const done = function (err?: Error | undefined) {
        called = true;
        if (err) {
          return finalCallback(err);
        }

        return iterate(index + 1);
      };
      if (iteratorCallback instanceof Promise) {
        iteratorCallback(current, done).then(done);
      } else {
        iteratorCallback(current, done);
      }
      if (!called) done();
    }
  }

  iterate(0);
};
```

## Usage Asynchronous serial iteration over an array collection

```js
const deployInfo = [
  {
    name: 'root',
    dest: path.join(__dirname, '.deploy_git'),
    url: 'https://github.com/dimaslanjaka/dimaslanjaka.github.io',
    ref: 'master'
  },
  {
    name: 'docs',
    dest: path.join(__dirname, '.deploy_git/docs'),
    url: 'https://github.com/dimaslanjaka/docs',
    ref: 'master'
  },
  {
    name: 'chimeraland',
    dest: path.join(__dirname, '.deploy_git/chimeraland'),
    url: 'https://github.com/dimaslanjaka/chimeraland',
    ref: 'gh-pages'
  },
  {
    name: 'page',
    dest: path.join(__dirname, '.deploy_git/page'),
    url: 'https://github.com/dimaslanjaka/page',
    ref: 'gh-pages'
  }
];

iterateSeries(
  deployInfo,
  function (info) {
    console.log(`writing ${info.dest}`);
  },
  function (err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  }
);
```

- [typescript playground](https://www.typescriptlang.org/play?noImplicitThis=false&target=2&jsx=1&module=1&allowSyntheticDefaultImports=true#code/JYWwDg9gTgLgBGAhjAFnAZlCI4HImq4DcAUCQPQBUlJclcAgnAMaIA2bARoswNZzcAzgFMAJhgCuAO2YxgEKXFTI47NhADugpRDjAYwqMmFwIAN0OqWEDsNnypteoiniwh9NByJBATxkoWFIQEto8cgraCnDCFlC+MWzCIMJSMAB0cAAqKCZgWMzCgoLAUgDmeoJOcKIKJsDaIlDARQA0cIK6LonJqfANHTCIsGKmUmwJGrmKqHlQsfKhY8LVKD4CwqnW4EkGopkAkoqsIqboMVBYUEq5cFM2cxCFxaUVA6UGlxJge9XCwxNVK4biZDFdKggsEgysZxDBdLMMKV2ABhNTcPg6OC7EEsNSGaqiOzAIlwFCaLFrVxJPQZJz0uhwAACSCMOGYNiS9miAFpsrcyqlDMBmKpLogEhBzsIkik0tp4bTDMZTHFqizhogcPplfCoGiOBj+HyciZWIaePwhKN0NJuTM1vANMAONU4O6PRs4KFRor8k8igrbswJJc+j05XTGZ6PQd4PNCsALEGzaH5mkI+H1uhgFBBPBWVq+pYXOJEHiLXw3THVI07Ao3JqUp9MqaK1xLXApJtRArdJx6lIzBBeL7dKVRCLjNWY4jUuIpbifP5mIEFCFtP7niVyod4KxFAP26MkC9ykCZ56wdBa0i8wWm8JPlj-dCVd1r1AAJTqws4HNSKi6KdnyTC2jIEQOioAzmkk4hTFsaggpeHo6iA2hrBYGxbFugajDeCGKB+lw3k8IZhvscAHOcxFXCh7pkWmvq3OB9p3C6bBeqUw6jvB+hoOWO5lDSwxlBIkb0XA8z5EUfSvLin7pE45AkByUj5kqRgGAAysKRRwAAvHAAA8WQxAAHgYrhhFIvgANoALoAHwABS0NYtj2gAXNkrTuTqWnQAaHZ8F57nugAPnALkueR6YwAAorKfQ+VkdlSOJA5QA57S1N2PkuekRWiYIPkuPZDlfoZTlAr4VUGTV5U-p6UUxXFfRJb0aSpelmWGDlNR1AVRXpCVZW2Y59WNbZU1wAAClgIANMIAAywCjsZ5VOV+fnugBQGVrwBVggA-D5CUkd+1W1XAUULdgy1rRtW0kLNADe7lqRp+YQGAYCvHNEAfIZHlcpB6RJOUqCkO5rGQZpxguROwjmT5GUgFlVUfZ65DkNY6kPBDEBlC5uD6Lg7TI+ZX6kJ6wDnEjrgo4ZBlGT9f0A0DaRY+FHq4-jnRJETJO4PtbC4DTvPuvMMChooYvBUaLmS56AC+iSnNjMZffuTEZkZHKeZBdlUw5tMxjisGjEZ6DsCI5uejrg3diDcMONFp3nZdt3ekzAFiDzNbulb4hGTAUASMIDsxvTHuXIHQfS0+ctIoBbCK5aLlgirQeq2QicyynAWI1TcAANRwAAjDnavR+6sdI58yBBcBmKlPmLiFIu91LSICc1sXeoZ3wsV6zAuV1F+6SzFILl5cINceurMqa1LqFN0Pre8KPYZpBP3aL+6ecDwzACEIdVfPyvR8fcB5-5G-CC5AAMkuqzD-OhIggodFqYBJFUJ2RJ-4QF8EcTwIM7LuS1u6QCKQfK4CwBAGAFNeZEnzD5AgKB0gACsuYuQAPoEMnFAOBwh2i4HSMA9QvgCFlHJjtXmoY2AIJQDAGAYBSq43oagCQnB0gchAOQScIAfBsBcDgxAvBEDCNAGIiRUjEDpB4SgPh6R5CoM9PMdACDRH5kMLgdyqtdpwBgV2IsCDajMEEJoj06CYCYOQNgvBpRCHENzGQihVDhAgNoTw4RTwbGMM9Mw1h7DOFeW4fxNRgjZF6PEVISR0iAnWNsUnHReA9GfEMUfExZiyEINXKAZUCTRBpJqEUBxCAnG4PwUQkhni8DeN8XQ-Q5AikpCMKUiWJj3ShLwGwjhXDyAqJidgOJ8jEmKPaSgYpXTSzlO0QgsoKAeTQiKDku+eTeYFLwOs8p9jHGoFqa4+pHiixeOoaA1pMByD7OCR6fpuBBkRKibw-hsSRGTKSTI-ZvSpLCAybgFZazv4bKMSQM2ZBB7CF0s0Iobl3RXLAVITwJi3bREZp4fuAtCbqBJgAAw0M0OQ54AAkb1SieG8fmVWBKc7GNhnaeGWd46mN5g3bO7KaxfUJp+Vl3466QgDMUdIKN9AuWrjfCFNMgA)
- [javascript playground](https://runkit.com/dimaslanjaka/646d3f320498700008757364)

## Live Playground

{% npmrunkit id:async_iterator %}
const path_1 = require("path")
/**
 * A callback based function that allows to iterate over a collection
 * and perform asynchronous actions on every element. The processing is
 * done is series, so an element is started only when the previous one
 * has been completed. In case of error the whole processing is interrupted
 * early and the error is propagated to the finalCallback to let the caller
 * decide how to handle it.
 *
 *
 * @param collection - The generic array of elements to iterate over
 * @param iteratorCallback - The callback based function that will
 *        be used to process the current element.
 *        It receives the current element as first paramenter and a callback
 *        as second parameter. The callback needs to be invoked to indicate
 *        the end of the asynchronous processing. It can be called passing an
 *        error as first parameter to propagate an error)
 * @param finalCallback - A function that is called when all the
 *        items have been processed or when an error occurred. If an error
 *        occurred the function will be invoked with a single argument
 *        representing the error.
 */
const iterateSeries = (collection, iteratorCallback, finalCallback) => {
    const stoppingPoint = collection.length;
    function iterate(index) {
        // console.log('it', index);
        if (index === stoppingPoint) {
            // console.log('final');
            return finalCallback();
        }
        else {
            const current = collection[index];
            let called = false;
            const done = function (err) {
                called = true;
                if (err) {
                    return finalCallback(err);
                }
                return iterate(index + 1);
            };
            if (iteratorCallback instanceof Promise) {
                iteratorCallback(current, done).then(done);
            }
            else {
                iteratorCallback(current, done);
            }
            if (!called)
                done();
        }
    }
    iterate(0);
};
// usage samples
const deployInfo = [
    {
        name: 'root',
        dest: path_1.join(__dirname, '.deploy_git'),
        url: 'https://github.com/dimaslanjaka/dimaslanjaka.github.io',
        ref: 'master'
    },
    {
        name: 'docs',
        dest: path_1.join(__dirname, '.deploy_git/docs'),
        url: 'https://github.com/dimaslanjaka/docs',
        ref: 'master'
    },
    {
        name: 'chimeraland',
        dest: path_1.join(__dirname, '.deploy_git/chimeraland'),
        url: 'https://github.com/dimaslanjaka/chimeraland',
        ref: 'gh-pages'
    },
    {
        name: 'page',
        dest: path_1.join(__dirname, '.deploy_git/page'),
        url: 'https://github.com/dimaslanjaka/page',
        ref: 'gh-pages'
    }
];
iterateSeries(deployInfo, function (info) {
    console.log(`writing ${info.dest}`);
}, function (err) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});
{% endnpmrunkit %}

