import Bluebird from 'bluebird';
import fs from 'fs-extra';
import { buildPost, parsePost } from 'hexo-post-parser';
import i18next, { Resource } from 'i18next';
import { envNunjucks, path, writefile } from 'sbg-utility';
import yaml from 'yaml';

const sourceDir = path.join(process.cwd(), 'source');
const postDirs = fs.readdirSync(sourceDir).map((p) => path.join(sourceDir, p));
const posts = postDirs.map((p) => {
  const locales = {} as Resource;
  fs.readdirSync(path.join(p, 'locales'), { recursive: true }).forEach((f) => {
    const file = path.join(p, 'locales', f);
    const lang = path.basename(file, '.yml');
    const data = yaml.parse(fs.readFileSync(file, 'utf-8'));
    locales[lang] = {
      translation: data
    };
  });
  return {
    dir: p,
    post: path.join(p, 'post.md'),
    locales
  };
});
Bluebird.all(posts).each(async (o) => {
  const opt: Parameters<typeof i18next.init>[0] = {
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: false,
    resources: o.locales,
    saveMissing: false
  };
  const t = await i18next.init(opt);
  const langs = Object.keys(o.locales);
  for (let index = 0; index < langs.length; index++) {
    const lang = langs[index];
    i18next.changeLanguage(lang);
    const rawPost = fs.readFileSync(o.post, 'utf-8');
    const env = envNunjucks(undefined, { autoescape: false });
    const render = env.renderString(rawPost, { __: t });
    const parse = await parsePost(render, { sourceFile: o.post, fix: true });
    if (parse.metadata) {
      // assign language
      parse.metadata.lang = parse.metadata.language = lang;
      // add prefix language to permalink
      parse.metadata.permalink = lang + '/' + parse.metadata.permalink;
      if (parse.config?.post_dir) {
        let filename = parse.metadata.permalink;
        if (parse.metadata.permalink.endsWith('.html')) {
          filename = parse.metadata.permalink.replace('.html', '.md');
        } else if (parse.metadata.permalink.endsWith('/')) {
          filename = path.join(parse.metadata.permalink, 'index.md');
        }
        const saveTo = path.join(parse.config.post_dir, filename);
        const save = writefile(saveTo, buildPost(parse));
        console.log('written to', save.file);
      }
    }
  }
});
