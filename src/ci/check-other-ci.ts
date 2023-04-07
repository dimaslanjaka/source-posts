// curl -u dimaslanjaka:env.ACCESS_TOKEN https://api.github.com/repos/dimaslanjaka/static-blog-generator-hexo/commits/master/check-runs -H 'Accept: application/vnd.github.antiope-preview+json'

import { Octokit } from '@octokit/core';

const octokit = new Octokit({ auth: process.env.ACCESS_TOKEN });
octokit
  .request('GET /repos/dimaslanjaka/static-blog-generator-hexo/commits/master/check-runs', {
    owner: 'dimaslanjaka',
    repo: 'static-blog-generator-hexo',
    // run_id: 'RUN_ID',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  .then((response) => {
    console.log(response);
  });
