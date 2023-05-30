---
title: removes node_modules from git history
date: 2023-05-16T05:35:19+07:00
updated: 2023-05-30T21:25:51+07:00
category: [programming, bash, github]
tags: [bash, snippet, script, github]
thumbnail: https://github.com/dimaslanjaka/source-posts/assets/12471057/40dd6736-8c54-4039-bce4-cbddd5984f82
---

<!-- https://stackoverflow.com/questions/10067848/remove-folder-and-its-contents-from-git-githubs-history/61544937#61544937 -->

<details>
  <summary>Deprecated Method</summary>
  
  ***WARNING**: git filter-branch is [no longer officially recommended](https://git-scm.com/docs/git-filter-branch#_warning). 

  The official recommendation is to use [git-filter-repo](https://github.com/newren/git-filter-repo/).

  see [André Anjos' answer for details](#Andre-Anjos’-answer)

  * * * * *

  If you are here to copy-paste code:

  This is an example which removes `node_modules` from history

  ```bash
  git filter-branch --tree-filter "rm -rf node_modules" --prune-empty HEAD
  git for-each-ref --format="%(refname)" refs/original/ | xargs -n 1 git update-ref -d
  echo node_modules/ >> .gitignore
  git add .gitignore
  git commit -m 'Removing node_modules from git history'
  git gc
  git push origin master --force

  ```

  **What git actually does:**

  The first line iterates through all references on the same tree (`--tree-filter`) as HEAD (your current branch), running the command `rm -rf node_modules`. This command deletes the node_modules folder (`-r`, without `-r`, `rm` won't delete folders), with no prompt given to the user (`-f`). The added `--prune-empty` deletes useless (not changing anything) commits recursively.

  The second line deletes the reference to that old branch.

  The rest of the commands are relatively straightforward.
</details>

## [André Anjos' answer](https://stackoverflow.com/posts/61544937/timeline) using `git-filter-repo`

> required [git-filter-repo](https://www.webmanajemen.com/2023/03/install-git-filter-repo.html)

It appears that the up-to-date answer to this is to **not** use `filter-branch` directly (at least git itself does not recommend it anymore), and defer that work to an external tool. In particular, [git-filter-repo](https://github.com/newren/git-filter-repo/) is currently recommended. The author of that tool [provides arguments](https://github.com/newren/git-filter-repo/#filter-branch) on why using `filter-branch` directly can lead to issues.

Most of the multi-line scripts above to remove `dir` from the history could be re-written as:

```bash
git-filter-repo --path node_modules --invert-paths --refs BRANCH_NAME
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME
git push --force-with-lease -u origin BRANCH_NAME
```

To remove recursively within all subfolders:

```bash
git-filter-repo --invert-paths --path-glob "**/node_modules" --refs BRANCH_NAME
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME
git push --force-with-lease -u origin BRANCH_NAME
```

The tool is more powerful than just that, apparently. You can apply filters by author, email, refname and more ([full manpage here](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)). Furthermore, it is **fast**. Installation is easy - it is [distributed in a variety of formats](https://github.com/newren/git-filter-repo/blob/master/INSTALL.md).

![thumbnail](https://github.com/dimaslanjaka/source-posts/assets/12471057/40dd6736-8c54-4039-bce4-cbddd5984f82)
