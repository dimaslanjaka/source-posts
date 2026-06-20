---
title: Force Google Account Selection in OAuth 2.0
description: Learn how to enforce Google account selection in OAuth 2.0 using login_hint for a seamless multi-account login experience.
slug: google-oauth-force-account-selection-login-hint
keywords:
  - google oauth account selection
  - login_hint parameter
  - prompt select_account
  - oauth forced login google
  - multiple google accounts authentication
  - google oauth redirect uri
  - authentication flow control
  - identity selection oauth 2.0
  - google sign in best practices
tags:
  - android
  - blogging
author: technical documentation
robots: index, follow
date: 2026-06-20T16:35:45Z
categories:
  - programming
  - education
updated: 2026-06-20T16:36:36Z
---

## Overview

Google OAuth 2.0 supports multiple account environments. This creates ambiguity in login flows when users are signed into several accounts. Developers can enforce deterministic account selection using query parameters in the authorization endpoint.

## Core Mechanism

Account selection behavior depends on two parameters:

### login_hint
This parameter suggests the target identity. Google prioritizes this email during account resolution.

Example:
```

login_hint=[username@gmail.com](mailto:username@gmail.com)

```

### prompt
This parameter controls user interaction behavior.

Common values:
- `consent`: forces consent screen display
- `select_account`: forces account chooser UI

## Combined Enforcement Strategy

To enforce explicit account selection, combine both parameters:

```

[https://accounts.google.com/o/oauth2/v2/auth](https://accounts.google.com/o/oauth2/v2/auth)?
client_id=YOUR_CLIENT_ID&
response_type=code&
redirect_uri=http%3A%2F%2Flocalhost%3A20128%2Fcallback&
scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&
state=RANDOM_STATE&
access_type=offline&
prompt=select_account&
login_hint=[username@gmail.com](mailto:username@gmail.com)

```

## Behavior Outcome

This configuration produces:

- Forced account chooser display
- Pre-filled account suggestion via login_hint
- Reduced silent session reuse
- Predictable identity resolution in multi-login environments

## Implementation Considerations

- Use login_hint only when user identity is known
- Avoid overusing prompt=consent in repeated flows
- Ensure redirect_uri is strictly registered
- Maintain secure state parameter generation

## Conclusion

Account selection enforcement in Google OAuth improves authentication determinism in multi-account scenarios. The combination of login_hint and prompt=select_account provides controlled identity routing suitable for production authentication systems.