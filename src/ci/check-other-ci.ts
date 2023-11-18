// curl -u dimaslanjaka:env.ACCESS_TOKEN https://api.github.com/repos/dimaslanjaka/static-blog-generator-hexo/commits/master/check-runs -H 'Accept: application/vnd.github.antiope-preview+json'

import { Octokit } from '@octokit/rest';
import Bluebird from 'bluebird';

const octokit = new Octokit({ auth: process.env.ACCESS_TOKEN });

Bluebird.resolve(
  octokit.actions.listWorkflowRunsForRepo({
    owner: 'dimaslanjaka',
    baseUrl: 'https://api.github.com',
    repo: 'static-blog-generator-hexo',
    per_page: 1
  })
)
  .then((response) => {
    const { data } = response;
    return data.workflow_runs;
  })
  .each((o) => {
    if (o.status === 'in_progress') {
      // cancel workflow
      return octokit.actions.cancelWorkflowRun({
        owner: 'dimaslanjaka',
        repo: 'static-blog-generator-hexo',
        run_id: o.id
      });
    }
  })
  .catch((e) => {
    console.log(e);
  });
