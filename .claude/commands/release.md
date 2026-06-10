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

---
**CHECKPOINT — Bump confirmation**
What is about to happen: nothing yet — confirming the version before any changes are made.

Show the user:
- Current version: `{current}` (from `package.json`)
- Target version: `[{x.y.z}]` (from CHANGELOG top entry)
- Bump level: **patch / minor / major**

Show the bump guide so they can sanity-check:

| Bump | Use when |
|---|---|
| `patch` | Bug fixes; new props with defaults; showcase/preview-only changes; scripts, CLAUDE.md, or skills updates — consumer code unchanged |
| `minor` | New components, hooks, providers, or utils; new optional props without defaults; new gallery pages; additive template changes — no consumer migration needed |
| `major` | Removing/renaming exports or props; breaking prop type changes; template restructuring that breaks consumer customizations — consumer must act after upgrading |

If the derived bump is **major**, verify the CHANGELOG entry contains a **Breaking** note explaining what consumers must do. Stop if it is missing.

Ask: "Does this bump level look right? Approve to continue, or fix the version in the CHANGELOG entry first and re-run /release."

If the user wants a different level, stop — they must edit the CHANGELOG version, then re-run /release. Do not proceed with a different bump than what the CHANGELOG says.

---

**Step 4.5 — Preview BACKLOG stamp**

Read `BACKLOG.md`. Find every `[✓]` item in the Unreleased section.

If Unreleased has no `[✓]` items, skip this checkpoint and go to Step 5.

---
**CHECKPOINT CP-R1 — BACKLOG stamp preview**
What is about to happen: the following items will be stamped with the release version, marked `[x]`, and moved to the Completed section.

List every `[✓]` item that will be changed, showing exactly how each line will look after stamping:
```
[x] **Category** — description — v{x.y.z}
```

Ask: "Do these items correctly represent what is shipping in this release? Approve to stamp them, or tell me what to correct."

Wait for approval. After approval, apply the edits to `BACKLOG.md`:
- Change each `[✓]` to `[x]` and append ` — v{x.y.z}`
- Move each stamped line to the top of the Completed section

Do **not** commit this change — the release script runs `git add .` before its own commit, so the BACKLOG edit is swept into the `"chore: release vX.Y.Z"` commit automatically.

---

**Step 5 — Release script**

---
**CHECKPOINT CP-R2 — Release script preview**
What is about to happen: the release script will make the following irreversible changes.

Show the user exactly what the script will do:
- Bump `package.json` version to `{x.y.z}`
- Update `ascendra.json` (version + current commit hash + deps snapshot)
- Regenerate `docs/ui-reference.md` and `docs/showcase-reference.md`
- Validate version markers match
- Create commit: `chore: release v{x.y.z}`
- Create tag: `v{x.y.z}`

The command that will run:
```bash
printf "{x.y.z}\n" | npm run release
```

Ask: "Ready to cut the release? This will create the commit and tag. Approve to run."

Wait for approval. Do not run the script until approved.

---

After approval, run `printf "{x.y.z}\n" | npm run release`.

**Step 6 — Push**

---
**CHECKPOINT — Push confirmation**
What is about to happen: the release commit and tag will be pushed to the remote — this is public and cannot be easily undone.

Show the command:
```bash
git push && git push --tags
```

Ask: "Ready to push `v{x.y.z}` to the remote? Approve to push."

Wait for approval. Do not push until approved.

---

After approval, run `git push && git push --tags`.

**Step 7 — Confirm**

Report the new version and tag. Done.
