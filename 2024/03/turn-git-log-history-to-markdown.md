---
title: Turn git log history into markdown
date: 2024-03-16T02:18:05+07:00
tags: [github, bash]
categories: [programming]
---

```bash
#!/bin/bash

echo "writing github commit history"

git log --pretty=format:"%ad%n%h %s%n%b" --date=format:"%Y-%m-%d %H:%M:%S" | while IFS= read -r line; do
  trimmed_line="${line#"${line%%[![:space:]]*}"}"
  trimmed_line="${trimmed_line%"${trimmed_line##*[![:space:]]}"}"

  if [ -n "$trimmed_line" ]; then
    if [[ "$trimmed_line" =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}\ [0-9]{2}:[0-9]{2}:[0-9]{2}$ ]]; then
      echo -e "**$trimmed_line**\n"
    elif [ "$first_line" = true ]; then
      first_line=false
    else
      echo -e "  $trimmed_line\n"
    fi
  fi
done > release-repo/changelog-commit.md

# Wait for 3 seconds
sleep 3
```

the format markdown like

```markdown
**2024-03-07 18:41:29**

- 39d989ee chore: round double value

**2024-03-07 18:38:32**

- 0586bd98 chore: improve performance
```

above script also works with multiline commits, looks like below:

```log
**2024-03-07 18:37:53**

- 064c3b79 chore: update preparation activity UI

  improve performance stability
```
