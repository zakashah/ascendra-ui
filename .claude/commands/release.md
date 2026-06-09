---
description: Pre-flight checks and release script runner
---

**Step 1 — Verify branch**

Run `git branch --show-current`. If the result is not `main`, stop immediately and tell the user:

> Releases must be made from main. You are currently on `{branch}`. Switch to main, merge your branch, then re-run /release.

Do not proceed if not on main.

**Step 2 — Check working tree**

Run `git status`. If not clean, stop and tell the user what to commit first.

**Step 3 — Verify CHANGELOG**

Read `CHANGELOG.md`. Confirm there is a new `## [x.y.z]` entry at the very top. If not, stop and tell the user to add it.

**Step 4 — Choose bump type**

Ask: "patch / minor / major?" and show this guide:

| Bump | Use when |
|---|---|
| `patch` | Bug fixes; new props with defaults; showcase/preview-only changes; scripts, CLAUDE.md, or skills updates — consumer code unchanged |
| `minor` | New components, hooks, providers, or utils; new optional props without defaults; new gallery pages; additive template changes — no consumer migration needed |
| `major` | Removing/renaming exports or props; breaking prop type changes; template restructuring that breaks consumer customizations — consumer must act after upgrading |

Tie-breaker: when in doubt, use the higher bump. For any major release, confirm the CHANGELOG entry includes a **Breaking** note explaining what consumers must do.

**Step 5 — Run release**

Run `printf "{type}\n" | npm run release`

**Step 6 — Push**

Ask the user to confirm before running: `git push && git push --tags`

**Step 7 — Confirm**

Report the new version and tag. Done.
