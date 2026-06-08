---
description: Pre-flight checks and release script runner
---

**Step 1 — Check working tree**

Run `git status`. If not clean, stop and tell the user what to commit first.

**Step 2 — Verify CHANGELOG**

Read `CHANGELOG.md`. Confirm there is a new `## [x.y.z]` entry at the very top. If not, stop and tell the user to add it.

**Step 3 — Bump type**

Ask: "patch / minor / major?"

**Step 4 — Run release**

Run `printf "{type}\n" | npm run release`

**Step 5 — Push**

Ask the user to confirm before running: `git push && git push --tags`

**Step 6 — Confirm**

Report the new version and tag. Done.
