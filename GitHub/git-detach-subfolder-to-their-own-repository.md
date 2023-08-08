---
author: Dimas Lanjaka
categories:
  - programming
  - bash
comments: true
cover: https://github.com/dimaslanjaka/source-posts/assets/12471057/aba30e58-526f-48c3-a2c5-fe7df582b8b2
date: 2023-05-30T01:02:45+07:00
description: git detach subfolder to their own repository If you create a new
  clone of a repository, you can split the folder into another repository
  without losing your Git history or changes. Open Git Bash.Change your current
  working directory to where you want to create the new repository. 3. Clone the
  rep
excerpt: git detach subfolder to their own repository If you create a new clone
  of a repository, you can split the folder into another repository without
  losing your Git history or changes. Open Git Bash.Change your current working
  directory to where you want to create the new repository. 3. Clone the rep
id: ecc22730-da3d-4888-8296-08c9d2ecdce5
lang: en
photos:
  - https://github.com/dimaslanjaka/source-posts/assets/12471057/aba30e58-526f-48c3-a2c5-fe7df582b8b2
subtitle: git detach subfolder to their own repository If you create a new clone
  of a repository, you can split the folder into another repository without
  losing your Git history or changes. Open Git Bash.Change your current working
  directory to where you want to create the new repository. 3. Clone the rep
tags:
  - github
  - bash
thumbnail: https://github.com/dimaslanjaka/source-posts/assets/12471057/aba30e58-526f-48c3-a2c5-fe7df582b8b2
title: git detach subfolder to their own repository
type: post
updated: 2023-08-08T14:44:19+07:00
wordcount: 959
---

If you create a new clone of a repository, you can split the folder into another repository without losing your Git history or changes.

1. Open Git Bash.

2. Change your current working directory to where you want to create the new repository. 3. Clone the repository including subfolders.

    ```
    $ git clone https://github.com/USERNAME/REPOSITORY-NAME
    ```

4. Change your current working directory to the cloned repository.

    ```
    $ cd REPOSITORY-NAME
    ```

Five. To filter subfolders from the rest of the files in the repository, use ['git-filter-repo'](https://github.com/newren/git-filter-repo), run git filter-repo with the following arguments:

- "Folder name":
A folder within a project in which to create another repository.

> **Up:** Windows users must use "/" to separate folders.

    ```
    $ git filter-repo --path FOLDER-NAME/
    # Filter the specified branch in your directory and remove empty commits
    > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
    > Ref 'refs/heads/BRANCH-NAME' was rewritten
    ```

Now the repository will only contain the files that were in the subfolders.

6. [Create a new repository] (https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) on GitHub.

7. At the top of your new repository, click the GitHub.com Quick Setup page.

3. Copy the remote repository URL.

![Screenshot of the "Quick Setup" header for the repository. Two overlapping square icons with an orange outline are highlighted next to the remote URL. ](https://docs.github.com/assets/cb-48149/images/help/repository/copy-remote-repository-url-quick-setup.png)

**Up:** See [About remote repositories] (https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories).

4. Add a new remote name using the URL you copied for your repository. For example, Origin or Upstream are two common choices.

    ```
    git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
    ```

5. Make sure the remote URL is added with the new repository name.

    ```
    $ git remote -v
    # Verify new remote URL
    > origin  https://github.com/USERNAME/NEW-REPOSITORY-NAME.git (fetch)
    > origin  https://github.com/USERNAME/NEW-REPOSITORY-NAME.git (push)
    ```

6. Push your changes to your new repository on GitHub.

    ```
    git push -u origin BRANCH-NAME
    ```

![thumbnail](https://github.com/dimaslanjaka/source-posts/assets/12471057/aba30e58-526f-48c3-a2c5-fe7df582b8b2)
