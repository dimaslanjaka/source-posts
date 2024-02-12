import { buildPost, postMap } from 'hexo-post-parser';
import moment from 'moment-timezone';
import { path, writefile } from 'sbg-utility';
import slugGenerator from './slugGenerator';

const title = 'Learning Spring Boot for web development';
const slug = slugGenerator(title);
const createdDate = moment(new Date());
const baseDir = path.join(process.cwd(), 'posts/articleGenerator');
const permalink = '/' + path.join(createdDate.format('YYYY/MM'), slug);
const filePath = path.join(baseDir, permalink + '.md');
const post: postMap = {
  rawbody: '',
  metadata: {
    title,
    permalink: permalink + '.html'
  },
  body: ''
};
writefile(filePath, buildPost(post));
