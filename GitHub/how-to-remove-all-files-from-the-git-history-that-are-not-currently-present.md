---
title: How to remove all files from the git history that are not currently present?
date: 2023-08-22T23:36:12+07:00
updated: 2023-08-22T23:36:12+07:00
tags: [github, bash, cmd]
category: [programming]
---

<details>
  <summary>Summary</summary>

  I've seen several articles and questions about how to remove a _single_ file from all git history. Example: [How to remove/delete a large file from commit history in Git repository?](https://stackoverflow.com/questions/2100907/how-to-remove-delete-a-large-file-from-commit-history-in-git-repository)
  
  What I'd like to do is remove _all_ files that are not _currently present_ at the head of the master branch.
  
  My use case is that I'm splitting off a smaller repository (call it `small` ) from a monolithic repository (call it `monolith` ). I want to preserve the git history when creating `small` , but only the _relevant_ git history.
  
  First, I created a new repository `small` on GitHub. Then, on my laptop, I added it as a remote named `origin-small` to my local `monolith` repository, and pushed the current state of the master branch of `monolith` to `origin-small` .
  
  I then removed the remote `origin-small` from `monolith` , changed directories, and cloned `small` from GitHub. Voilà, I had a copy of my original repository, `monolith` , with its full history.
  
  But, there are loads of files in the history of `small` that are no longer relevant, and they are bloating the repo.
  
  What I'd like to do is:
  
  1.  Delete all of the unnecessary files from `small` .
  2.  Run a command to clear the whole git history of the files that I just deleted.
  
  Is there a way to do this with a single command? Or do I need to run `git filter-branch` once for every file/directory that I want to remove?
</details>

I ended up using `git-filter-repo` . **WARNING: This approach is NOT able to update tags on the remote, if there are any.**

1.  Install `git-filter-repo` .
    
                    `brew install git-filter-repo`
    
2.  Clone your desired repo, in mirror form.
    
                    `git clone --mirror <my-repo-url>`
    
3.  Enter the repo directory.
    
                    `cd <my-repo-name>`
    
4.  Analyze the repo to identify all files that are in the history, but no longer exist.
    
                    `git filter-repo --analyze`
    
5.  In the `analysis` output directory, there will be a file named `path-deleted-sizes.txt` that contains a list all files that were committed at some point, and were later deleted, but still exist in the git history.
    
    Create a new file that lacks the headers and other columns.
    
                    `tail +3 ./filter-repo/analysis/path-deleted-sizes.txt \     | tr -s ' ' \     | cut -d ' ' -f 5- \     > ./filter-repo/analysis/path-deleted.txt`
    
6.  Clean the git history of all files that no longer exist. This will also clean dirty commits, remove empty commits, and recompress everything for you.
    
                    `git filter-repo --invert-paths --paths-from-file ./filter-repo/analysis/path-deleted.txt`
    
7.  Clean up the `./filter-repo` directory, or you won't be able to push your changes.
    
                    `rm -rf ./filter-repo`
    
8.  Force-push all refs to the origin. It will force-push, even though the command doesn't indicate it. Also, it will update _all_ branches on the remote, which is convenient. If you have branch protection enabled on some branches in GitHub/Bitbucket/etc., then you will need to allow force-pushes. You can always re-run this command if you find that some refs could not be force-pushed.
    
                    `git push --force-with-lease`
