import Promise from 'bluebird';
import * as glob from 'glob';
import * as util from 'sbg-utility';
import * as config from '../../config.js';

// to generate JSON object for JSTree

const src = Promise.resolve(
  glob.glob('**/*.md', {
    cwd: config.postsDir,
    ignore: ['node_modules/**', '**/license*', '**/readme.*'],
    posix: true
  })
);
const roots = {};
src.map((postPath) => {
  const splitSep = postPath.split('/');
  const mapSep = splitSep.map((str, i, arr) => {
    const isLast = i == arr.length - 1;
    const prevStr = arr[i - 1];
    const id = 'item' + str + i;
    const prevRoot = roots[prevStr];

    if (!roots[str] && !isLast) {
      roots[str] = {
        parent: prevRoot ? prevRoot.id : '#',
        id: 'item' + str + i,
        text: str
      };
    }

    if (!isLast) {
      if (!prevStr) {
        return { id, parent: '#', text: str };
      } else {
        return { id, parent: prevRoot, text: str };
      }
    }

    // { "id" : "ajson1", "parent" : "#", "text" : "Simple root node" }
    return { isLast, prev: arr[i - 1] };
  });
  util.writefile(util.path.join(process.cwd(), 'tmp/roots.json'), JSON.stringify(roots, null, 2));
});
