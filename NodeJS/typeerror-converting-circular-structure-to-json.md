---
title: TypeError: Converting circular structure to JSON
date: 2022-10-24T16:02:58+07:00
updated: 2022-10-24T16:02:58+07:00
category: ['Programming', 'JS']
tags: ['JS', 'JSON']
---

TypeError: Converting circular structure to JSON produce errors like below
```log
TypeError: Converting circular structure to JSON
    --> starting at object with constructor '_Document'
    |     property 'tags' -> object with constructor '_Query'
    |     property 'data' -> object with constructor 'Array'
    |     ...
    |     property 'data' -> object with constructor 'Array'
    --- index 0 closes the circle
    at JSON.stringify (<anonymous>)
    at /media/dimaslanjaka/DATA/Repositories/chimeraland/packages/hexo-generator-category/lib/generator.js:16:56
    at _Query.reduce (/media/dimaslanjaka/DATA/Repositories/chimeraland/node_modules/warehouse/lib/query.js:240:16)
    at Hexo.module.exports (/media/dimaslanjaka/DATA/Repositories/chimeraland/packages/hexo-generator-category/lib/generator.js:13:28)
    at Hexo.tryCatcher (/media/dimaslanjaka/DATA/Repositories/chimeraland/node_modules/bluebird/js/release/util.js:16:23)
    at Hexo.<anonymous> (/media/dimaslanjaka/DATA/Repositories/chimeraland/node_modules/bluebird/js/release/method.js:15:34)
    at /media/dimaslanjaka/DATA/Repositories/chimeraland/node_modules/hexo/lib/hexo/index.js:407:22
    at tryCatcher (/media/dimaslanjaka/DATA/Repositories/chimeraland/node_modules/bluebird/js/release/util.js:16:23)
    at MappingPromiseArray._promiseFulfilled (/media/dimaslanjaka/DATA/Repositories/chimeraland/node_modules/bluebird/js/release/map.js:68:38)
    at MappingPromiseArray.PromiseArray._iterate (/media/dimaslanjaka/DATA/Repositories/chimeraland/node_modules/bluebird/js/release/promise_array.js:115:31)
    at MappingPromiseArray.init (/media/dimaslanjaka/DATA/Repositories/chimeraland/node_modules/bluebird/js/release/promise_array.js:79:10)
    at MappingPromiseArray._asyncInit (/media/dimaslanjaka/DATA/Repositories/chimeraland/node_modules/bluebird/js/release/map.js:37:10)
    at _drainQueueStep (/media/dimaslanjaka/DATA/Repositories/chimeraland/node_modules/bluebird/js/release/async.js:97:12)
    at _drainQueue (/media/dimaslanjaka/DATA/Repositories/chimeraland/node_modules/bluebird/js/release/async.js:86:9)
    at Async._drainQueues (/media/dimaslanjaka/DATA/Repositories/chimeraland/node_modules/bluebird/js/release/async.js:102:5)
    at Immediate.Async.drainQueues [as _onImmediate] (/media/dimaslanjaka/DATA/Repositories/chimeraland/node_modules/bluebird/js/release/async.js:15:14)
    at processImmediate (node:internal/timers:466:21)
```

Fixed with custom JSON.stringify with circural ref.
write below codes to `json.js`
```js
'use strict';

JSON.stringifyWithCircularRefs = (function() {
  const refs = new Map();
  const parents = [];
  const path = ['this'];

  function clear() {
    refs.clear();
    parents.length = 0;
    path.length = 1;
  }

  function updateParents(key, value) {
    let idx = parents.length - 1;
    let prev = parents[idx];
    if (prev[key] === value || idx === 0) {
      path.push(key);
      parents.push(value);
    } else {
      while (idx-- >= 0) {
        prev = parents[idx];
        if (prev[key] === value) {
          idx += 2;
          parents.length = idx;
          path.length = idx;
          --idx;
          parents[idx] = value;
          path[idx] = key;
          break;
        }
      }
    }
  }

  function checkCircular(key, value) {
    if (value != null) {
      if (typeof value === 'object') {
        if (key) {
          updateParents(key, value);
        }

        const other = refs.get(value);
        if (other) {
          return '[Circular Reference]' + other;
        }
        refs.set(value, path.join('.'));

      }
    }
    return value;
  }

  return function stringifyWithCircularRefs(obj, space = 2) {
    try {
      parents.push(obj);
      return JSON.stringify(obj, checkCircular, space);
    } finally {
      clear();
    }
  };
}());
```

JSON.stringifyWithCircularRefs interface types
```typescript
interface JSON {
  /**
   * @see {@link https://stackoverflow.com/a/61962964/6404439}
   * @example
   * console.log(JSON.stringify({a:{a:{a:{a:[{a:{hello:"world"}}]}}}}))
   */
  stringifyWithCircularRefs: (obj: any, space?: number) => string;
}
```

usage `JSON.stringifyWithCircularRefs`
```js
require('./json');
const { writeFileSync } = require('fs');
const result = {}; // this object with circular ref
writeFileSync(join(__dirname, 'result.json'), JSON.stringifyWithCircularRefs(result));
```

full script at [https://github.com/dimaslanjaka/persistent-cache/blob/improve2/src/JSON.ts](https://github.com/dimaslanjaka/persistent-cache/blob/improve2/src/JSON.ts)
