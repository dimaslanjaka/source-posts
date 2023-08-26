import Bluebird from 'bluebird';
import * as glob from 'glob';
import parse from 'hexo-post-parser';
import moment from 'moment-timezone';
import { fs, path } from 'sbg-utility';
import { fileURLToPath } from 'url';
import yaml from 'yaml';
import * as config from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scrape = glob.glob('**/*.md', {
  cwd: config.postsDir,
  absolute: true,
  ignore: ['**/node_modules/**', '**/License*', '**/readme*']
});

Bluebird.all(scrape).each(async (file) => {
  try {
    const post = await parse.parsePost(fs.readFileSync(file, 'utf-8'), {
      sourceFile: file,
      fix: true,
      config: yaml.parse(fs.readFileSync(path.join(__dirname, '_config.yml'), 'utf-8'))
    });

    // indicator to save
    let save;
    let updateDate;

    if (post.metadata) {
      // move property category to categories
      if ('category' in post.metadata === true && 'categories' in post.metadata === false) {
        post.metadata.categories = post.metadata.category;
        delete post.metadata.category;
      }

      // lowercase taxonomy
      if (post.metadata.categories) {
        // set update date when all label is not lowercase
        if (!post.metadata.categories.every(isLowercase)) {
          updateDate = true;
          console.log(post.metadata.categories);
          // do lowercasing
          post.metadata.categories = lowercaseTaxonomy(post.metadata.categories);
          console.log('transformed', post.metadata.categories);
          save = true;
        }
      }
      if (post.metadata.tags) {
        // set update date when all label is not lowercase
        if (!post.metadata.tags.every(isLowercase)) updateDate = true;
        // do lowercasing
        post.metadata.tags = lowercaseTaxonomy(post.metadata.tags);
        save = true;
      }

      // set default label uncategorized
      if (!post.metadata.categories || post.metadata.categories?.filter((str) => str.trim().length > 0).length === 0) {
        post.metadata.categories = ['uncategorized'];
        //updateDate = true;
      }

      // transform custom tags
      const mapTags: { [key: string]: string } = {
        js: 'javascript',
        ts: 'typescript'
      };
      if ('tags' in post.metadata) {
        let tags = post.metadata.tags || [];
        const isMapKeyFound = tags.some((ai) => Object.keys(mapTags).includes(ai));
        if (isMapKeyFound) {
          save = true;
          // set update date
          updateDate = true;
          for (const key in mapTags) {
            if (Object.prototype.hasOwnProperty.call(mapTags, key)) {
              const replaceTo = mapTags[key];
              tags = tags.map((str) => {
                if (key === str) {
                  return replaceTo;
                }
                return str;
              });
            }
          }
        }
      }

      // remove unused/duplicate meta
      if (post.metadata.excerpt && post.metadata.description) delete post.metadata.excerpt;
      if (post.metadata.subtitle && post.metadata.description) delete post.metadata.subtitle;
      if (post.metadata.id) delete post.metadata.id;
      if (post.metadata.uuid) delete post.metadata.uuid;
      // remove empty photos
      if (Array.isArray(post.metadata.photos) && post.metadata.photos.length === 0) {
        delete post.metadata.photos;
      }
    }

    if (save && post.metadata) {
      if (updateDate) post.metadata.updated = moment(new Date()).tz('Asia/Jakarta').format();
      //const build = parse.buildPost(post);
      //fs.writeFileSync(file, build);
    }
  } catch (e: any) {
    console.log('fail parse', file, e.message);
  }
});

/**
 *
 * @param arr
 */
function lowercaseTaxonomy(arr: string[]) {
  return arr.map((str) => str.toLowerCase());
}

/**
 * validate if string is lowercase
 * @param character
 * @returns
 */
function isLowercase(character: string) {
  return character == character.toLowerCase();
}
