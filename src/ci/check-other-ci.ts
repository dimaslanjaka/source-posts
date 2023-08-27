// curl -u dimaslanjaka:env.ACCESS_TOKEN https://api.github.com/repos/dimaslanjaka/static-blog-generator-hexo/commits/master/check-runs -H 'Accept: application/vnd.github.antiope-preview+json'

import { Octokit } from '@octokit/rest';
import { gitCommandHelper } from 'git-command-helper';
import { sourcePostsRoot } from '../../config';

const octokit = new Octokit({ auth: process.env.ACCESS_TOKEN });
const req = octokit.request;
const basePerm = '/repos/dimaslanjaka/static-blog-generator-hexo';
const gh = new gitCommandHelper({
  cwd: sourcePostsRoot,
  remote: 'https://github.com/dimaslanjaka/source-posts.git'
});

req(`GET ${basePerm}/commits/master/check-runs`, {
  owner: 'dimaslanjaka',
  baseUrl: 'https://api.github.com',
  repo: 'static-blog-generator-hexo',
  // run_id: 'RUN_ID',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
}).then((response) => {
  const { data } = response;
  const runs: { id: string; name: string; status: 'completed' | 'in_progress' | 'queued' }[] = data.check_runs;
  const wf = runs.filter(({ name }) => name === 'build-site');

  /*
  const allCompleted = wf.every((o) => o.status === 'completed');
  if (!allCompleted) {
    console.log('existing CI is running, aborting current CI');
    // abort current process
    process.exit(1);
  } else {
    console.log('no CI running, continue current CI');
  }
  */
  // process.exit(allCompleted ? 0 : 1);

  return wf
    .filter((o) => o.status === 'in_progress')
    .map((o) => {
      if (o.status === 'in_progress') {
        // cancel workflows
        return octokit.actions.cancelWorkflowRun({
          owner: o.name,
          repo: 'static-blog-generator-hexo',
          run_id: parseInt(o.id)
        });
      }
    });
});
