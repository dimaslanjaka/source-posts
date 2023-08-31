import path from 'path';
import * as url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const postsDir = path.join(__dirname, 'posts');
export const sourcePostsRoot = __dirname;
export const tmpDir = path.join(__dirname, 'tmp');
export function isDev() {
  return /dev/i.test(process.env.NODE_ENV || '');
}
