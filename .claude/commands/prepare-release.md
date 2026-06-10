---
description: Draft the CHANGELOG entry and merge to main, ready for /release
---

**Step 1 — Detect branch and merge if needed**

Run `git status` and `git branch --show-current`.

- If the working tree is dirty, stop and tell the user to commit or stash first.
- If on a `feat/`, `fix/`, `chore/`, or `docs/` branch: confirm with the user that the work on this branch is complete, then squash-merge per the standard workflow:

```bash
git checkout main
git merge --squash {branch}
git commit -m "{type}: {summary}"   # conventional commit format matching the branch prefix
git branch -D {branch}
```

- If already on `main`, skip the merge.
- If on any other branch name, stop and ask the user how to proceed.

**Step 2 — Collect changes since last release**

Find the last release tag: `git describe --tags --abbrev=0`. Then review:

```bash
git log {tag}..HEAD --oneline
git diff {tag}..HEAD --stat
```

If there are no commits since the last tag, stop — nothing to release.

**Step 3 — Classify changes and propose the bump**

Apply the versioning rules:

| Bump | Use when |
|---|---|
| `patch` | Bug fixes; new props with defaults; showcase/preview-only changes; scripts, CLAUDE.md, or skills updates — consumer code unchanged |
| `minor` | New components, hooks, providers, or utils; new optional props without defaults; new gallery pages; additive template changes — no consumer migration needed |
| `major` | Removing/renaming exports or props; breaking prop type changes; template restructuring that breaks consumer customizations — consumer must act after upgrading |

Tie-breaker: when in doubt, use the higher bump. Compute the proposed `x.y.z` from the current `package.json` version.

**Step 4 — Draft the CHANGELOG entry**

Write the entry in house format, inserted above the previous version entry (same position as existing entries — after the upgrade-instructions section):

```md
## [x.y.z] — short description

### Added
- ...

### Changed
- ...

### Fixed
- ...
```

Only include subsections that apply. For a **major** bump, a **Breaking** note explaining what consumers must do is mandatory.

**Step 5 — Update BACKLOG.md**

Move items covered by this release from `[~]` to `[✓]` in the **Unreleased** section.

**Step 6 — Review with the user**

Show the user: the proposed version + bump level, the drafted CHANGELOG entry, and the BACKLOG.md changes. Wait for approval and apply any edits they request. Do not commit before approval.

**Step 7 — Commit and hand off**

Commit on main:

```bash
git add CHANGELOG.md BACKLOG.md
git commit -m "docs: add CHANGELOG entry for vx.y.z"
```

Tell the user to run `/release` to cut the release.
