---
author: Dimas Lanjaka
categories:
  - programming
  - github
comments: true
date: 2022-12-09T00:43:17+07:00
description: what is default username and email for github workflow actions?
excerpt: what is default username and email for github workflow actions?
lang: en
photos: []
subtitle: what is default username and email for github workflow actions?
tags:
  - github-workflows
  - snippet
  - yaml
  - github-actions
title: Default username and email for github workflow actions
type: post
updated: 2023-08-08T14:44:19+07:00
wordcount: 934
---

I think this would be a nice feature. It would also lead to a more consistent appearance of commits created by *GitHub Actions*. I'm currently wondering which email address and username I should use for the time being.

1.  The [README.md](https://github.com/actions/checkout/blob/main/README.md#push-a-commit-using-the-built-in-token "checkout/README.md -- Push a commit using the built-in token") suggests `github-actions <github-actions@github.com>`. However, this email is not recognized by the platform. GitHub displays the author of the commit with the generic icon and without a link.\
    [![grafik](https://user-images.githubusercontent.com/1288216/98618468-9b289680-2301-11eb-900a-71f37c9f0c44.png)](https://user-images.githubusercontent.com/1288216/98618468-9b289680-2301-11eb-900a-71f37c9f0c44.png)
    ```bash
    git config --global user.name "github-actions"
    git config --global user.email "github-actions@github.com"
    ```
2.  [A thread in the *GitHub Support Community*](https://github.community/t/github-actions-bot-email-address/17204 "GitHub Actions bot email address? - GitHub Actions - GitHub Support Community") suggests `github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>`. This seems to work nicely. The author of the commit has the same icon and name as GitHub Actions everywhere else. The link goes to <https://github.com/features/actions> as I would expect. I'm just wondering if there is any caveat since it is not promoted in the README.md.\
    [![grafik](https://user-images.githubusercontent.com/1288216/98619468-96fd7880-2303-11eb-8bca-d347948c15f4.png)](https://user-images.githubusercontent.com/1288216/98619468-96fd7880-2303-11eb-8bca-d347948c15f4.png)
    ```bash
    git config --global user.name "github-actions[bot]"
    git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"
    ```
3.  Most repositories I found seem to use `GitHub Action <action@github.com>`. I don't know where this is comming from. GitHub seems to link it to some user but clicking on the user opens a 404-page. The icon and name doesn't match what is usually shown for GitHub Actions.\
    [![grafik](https://user-images.githubusercontent.com/1288216/98620024-bb0d8980-2304-11eb-8aa6-c1b85091b470.png)](https://user-images.githubusercontent.com/1288216/98620024-bb0d8980-2304-11eb-8aa6-c1b85091b470.png)
    ```bash
    git config --global user.name "GitHub Action"
    git config --global user.email "action@github.com"
    ```

## Conclusion

If there is no caveat for the second option, I would suggest that the *checkout* action configures Git accordingly if none of both options is already set. (Alternatively, GitHub's runners could be updated to use this configuration.)

### Working Examples For Setup Github Actions Username And Email
- [dimaslanjaka/nodejs-package-types](https://github.com/dimaslanjaka/nodejs-package-types/blob/main/.github/workflows/build-release.yml)

source issues:

- [actions/checkout/issues/13#issuecomment-724415212](https://github.com/actions/checkout/issues/13#issuecomment-724415212)
