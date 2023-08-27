// curl -u dimaslanjaka:env.ACCESS_TOKEN https://api.github.com/repos/dimaslanjaka/static-blog-generator-hexo/commits/master/check-runs -H 'Accept: application/vnd.github.antiope-preview+json'

import { Octokit } from '@octokit/core';

const octokit = new Octokit({ auth: process.env.ACCESS_TOKEN });
const req = octokit.request;
const basePerm = '/repos/dimaslanjaka/static-blog-generator-hexo';

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
  const allCompleted = runs.filter(({ name }) => name === 'build-site').every((o) => o.status === 'completed');
  if (!allCompleted) {
    console.log('existing CI is running, aborting current CI');
    // abort current process
    process.exit(1);
  } else {
    console.log('no CI running, continue current CI');
  }
  // process.exit(allCompleted ? 0 : 1);
});
