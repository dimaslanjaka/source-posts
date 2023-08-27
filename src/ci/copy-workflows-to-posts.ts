import { fs, path } from 'sbg-utility';
import { sourcePostsRoot } from '../../config';

const src = path.join(sourcePostsRoot, '.github');
const dest = path.join(sourcePostsRoot, 'posts/.github');
fs.copySync(src, dest, { overwrite: true });
