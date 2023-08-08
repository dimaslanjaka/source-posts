---
author: Dimas Lanjaka
categories:
  - programming
comments: true
cover: https://global-uploads.webflow.com/6100d0111a4ed76bc1b9fd54/62a1ac70484ab90ae870152b_github
  4.png
date: 2022-05-31
description: follow symlink of local cloned repository folder
excerpt: follow symlink of local cloned repository folder
id: 9972b519-bb9e-4888-8a21-be4c69ab1083
keywords:
  - github
  - symlink
lang: en
photos:
  - https://global-uploads.webflow.com/6100d0111a4ed76bc1b9fd54/62a1ac70484ab90ae870152b_github
    4.png
subtitle: follow symlink of local cloned repository folder
tags:
  - github
thumbnail: https://global-uploads.webflow.com/6100d0111a4ed76bc1b9fd54/62a1ac70484ab90ae870152b_github
  4.png
title: Force github follow symlinked folders
type: post
updated: 2023-08-08T14:44:18+07:00
wordcount: 718
---

To prevent re-clone repository from remote, using symlink folder strategy is more efficient.

```bash
git config core.symlinks true
```

(It may be wise to check for other non-default settings, especially if the SD-card repository was created by a different OS.)

As discussed in comments, the key element here was that the repository was originally created on a non-symlink-supporting file system, and then moved (copied manually) to a symlink-supporting file system. [The `git config` documentation](https://www.kernel.org/pub/software/scm/git/docs/git-config.html), down in the section describing `core.symlinks`, says:

> If false, symbolic links are checked out as small plain files that contain the link text. [git-update-index(1)](https://www.kernel.org/pub/software/scm/git/docs/git-update-index.html) and [git-add(1)](https://www.kernel.org/pub/software/scm/git/docs/git-add.html) will not change the recorded type to regular file. Useful on filesystems like FAT that do not support symbolic links.
>
> The default is true, except [git-clone(1)](https://www.kernel.org/pub/software/scm/git/docs/git-clone.html) or [git-init(1)](https://www.kernel.org/pub/software/scm/git/docs/git-init.html) will probe and set core.symlinks false if appropriate when the repository is created.

In general, it's a little bit safer to `git clone` a repository when moving it across logical or physical drives, since the new clone will probe the new file system's settings. Git is fairly good at autodetecting other changes (e.g., the index encodes the work-tree path) and most of these settings are OS-specific rather than file-system-specific. If you cross-boot different OSes (or run them under hypervisors) and share some media between then, though, these additional `core.*` settings may cause issues. See, e.g., `core.fileMode` and `core.protectNTFS`.
