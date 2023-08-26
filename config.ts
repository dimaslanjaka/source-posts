import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const postsDir = path.join(__dirname, 'posts');
export const sourcePostsRoot = __dirname;
