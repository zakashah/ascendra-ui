---
description: Pre-flight checks and release script runner
---

**Step 1 — Verify branch**

Run `git branch --show-current`. If the result is not `main`, stop immediately and tell the user:

> Releases must be made from main. You are currently on `{branch}`. Switch to main, merge your branch, then re-run /release.

Do not proceed if not on main.

**Step 2 — Check working tree**

Run `git status`. If not clean, stop and tell the user what to commit first.

**Step 3 — Derive version from CHANGELOG**

The CHANGELOG is the source of truth for the new version.

1. Read the first `## [x.y.z]` heading in `CHANGELOG.md` — this is the target version.
2. Read the current version from `package.json`.
3. Validate the target is **exactly one legal semver bump** above current:
   - patch: `x.y.(z+1)` · minor: `x.(y+1).0` · major: `(x+1).0.0`

If the top entry equals the current version, stop: there is no new entry — tell the user to run `/prepare-release` (or add an entry manually). If the target skips levels (e.g. 1.2.0 → 1.4.0) or is lower than current, stop and tell the user to fix the CHANGELOG entry.

**Step 4 — Confirm bump**

Tell the user the derived version and which bump level it implies, e.g.:

> CHANGELOG top entry is `[1.2.1]` — a **patch** bump from 1.2.0. Proceed?

Show this guide so they can sanity-check the level:

| Bump | Use when |
|---|---|
| `patch` | Bug fixes; new props with defaults; showcase/preview-only changes; scripts, CLAUDE.md, or skills updates — consumer code unchanged |
| `minor` | New components, hooks, providers, or utils; new optional props without defaults; new gallery pages; additive template changes — no consumer migration needed |
| `major` | Removing/renaming exports or props; breaking prop type changes; template restructuring that breaks consumer customizations — consumer must act after upgrading |

If the user wanted a different level, stop — they must fix the version in the CHANGELOG entry first, then re-run /release. Do not pass a different bump than what the CHANGELOG says.

If the derived bump is **major**, verify the CHANGELOG entry contains a **Breaking** note explaining what consumers must do. Stop if it is missing.

**Step 4.5 — Stamp BACKLOG**

Read `BACKLOG.md`. Find every `[✓]` item in the Unreleased section.

For each one: change `[✓]` to `[x]` and append ` — v{x.y.z}` to its description. Then move the line to the top of the Completed section (above the previous most-recent entry).

If Unreleased has no `[✓]` items, skip this step.

Do **not** commit this change. The release script runs `git add .` before its own commit, so the BACKLOG edit is automatically swept into the `"chore: release vX.Y.Z"` commit — the version stamp and the version bump land in the same commit.

**Step 5 — Run release**

Run `printf "{x.y.z}\n" | npm run release` — pass the exact version derived in Step 3, not a bump type. The script accepts explicit `x.y.z` and this guarantees it releases the same version the CHANGELOG documents.

**Step 6 — Push**

Ask the user to confirm before running: `git push && git push --tags`

**Step 7 — Confirm**

Report the new version and tag. Done.
