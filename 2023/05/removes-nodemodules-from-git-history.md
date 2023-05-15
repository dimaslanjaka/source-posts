---
title: removes node_modules from git history
date: 2023-05-16T05:35:19+07:00
updated: 2023-05-16T05:37:30+07:00
category: [programming, bash]
tags: [bash, snippet, script]
---

***WARNING**: git filter-branch is [no longer officially recommended](https://git-scm.com/docs/git-filter-branch#_warning). 

The official recommendation is to use [git-filter-repo](https://github.com/newren/git-filter-repo/).

see [André Anjos' answer for details](https://stackoverflow.com/questions/10067848/remove-folder-and-its-contents-from-git-githubs-history/61544937#61544937).

* * * * *

If you are here to copy-paste code:

This is an example which removes `node_modules` from history

```
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
