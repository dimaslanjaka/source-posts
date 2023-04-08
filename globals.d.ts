import { postMap, postMeta } from 'hexo-post-parser';

export interface extMeta extends postMeta {
  adsense: boolean;
}
export interface extPost extends postMap {
  metadata: extMeta;
}
