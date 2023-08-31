import { Octokit } from '@octokit/rest';
import dotenv from 'dotenv';
import { fs, jsonStringifyWithCircularRefs, path } from 'sbg-utility';
import { sourcePostsRoot } from '../../config';

const envFile = path.join(sourcePostsRoot, '.env');
if (fs.existsSync(envFile)) dotenv.config({ override: true, path: envFile });

const octokit = new Octokit({
  auth: process.env.ACCESS_TOKEN,
  timeZone: 'Asia/Jakarta',
  baseUrl: 'https://api.github.com'
});
octokit.rest.actions
  .createWorkflowDispatch({
    owner: 'dimaslanjaka',
    repo: 'static-blog-generator-hexo',
    workflow_id: 'build-site.yml',
    ref: 'master'
  })
  .catch((e) => {
    if (process.env.NODE_ENV !== 'development') {
      // production log
      let str = jsonStringifyWithCircularRefs(e);
      if (process.env.ACCESS_TOKEN && process.env.ACCESS_TOKEN.trim().length > 0) {
        str = str.replace(new RegExp(process.env.ACCESS_TOKEN.trim()), 'GITHUB_TOKEN');
      }
      str = str.replace(/workspaces\/source-posts\//gim, '');

      console.log(JSON.parse(str));
    } else {
      console.error(e);
    }
  });
