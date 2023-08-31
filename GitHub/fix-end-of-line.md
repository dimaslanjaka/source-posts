---
title: fix end of line on github repository
date: 2023-08-31T10:06:28+07:00
categories:
  - programming
  - bash
  - github
tags: [github]
updated: 2023-08-31T10:09:38+07:00
---

## force end of line using LF
For repos (Git repositories) that were checked out after those global settings were set, everything will be checked out as whatever it is in the repo -- hopefully `LF` (`\n`).\
Any `CRLF` will be converted to just `LF` on check-in (commit).

With an existing repo that you have already checked out -- that has the correct line endings in the repo but not your working copy -- you can run the following commands to fix it:
```bash
git config --global core.eol lf
git config --global core.autocrlf input
git rm -rf --cached .
git reset --hard HEAD
```

`git rm -rf --cached .` will delete (`rm`) recursively (`-r`) without prompt (`-f`), all files except those that you have edited (`--cached`), from the current directory (`.`). The `reset` then returns all those files to a state where they have their true line endings (matching what's in the repo).

If you need to fix the line endings of files in a repo, I recommend grabbing an editor that will let you do that in bulk like IntelliJ or Sublime Text, but I'm sure any good one will likely support this.

### Put a `.gitattributes` file in the root of your git repository having following contents:

```
* text=auto eol=lf
```

Commit the `.gitattributes`

### Optional tweaks for all IDE

You can also add an [`.editorconfig`](http://EditorConfig.org) in the root of your repository to ensure that modern tooling creates new files with the desired line endings.

```
# EditorConfig is awesome: http://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true

```
