import path from 'path';
import { fs } from 'sbg-utility';
import * as url from 'url';
import yaml from 'yaml';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config_yml = yaml.parse(fs.readFileSync(path.join(__dirname, '_config.yml'), 'utf-8'));
export const postsDir = path.join(__dirname, 'posts');
export const sourcePostsRoot = __dirname;
export const tmpDir = path.join(__dirname, 'tmp');
export const sourceDir = path.join(__dirname, 'source');
export function isDev() {
  return /dev/i.test(process.env.NODE_ENV || '');
}
/** @type {string[]} */
export const excludePatterns = config_yml.exclude;
