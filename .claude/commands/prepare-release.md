---
description: Draft the CHANGELOG entry and merge to main, ready for /release
---

**Step 1 — Detect branch**

Run `git status` and `git branch --show-current`.

- If the working tree is dirty, stop and tell the user to commit or stash first.
- If already on `main`, skip to Step 2.
- If on any other branch name that is not `feat/`, `fix/`, `chore/`, or `docs/`, stop and ask the user how to proceed.

If on a `feat/`, `fix/`, `chore/`, or `docs/` branch, present **CP-1** before doing anything.

---
**CHECKPOINT CP-1 — Squash-merge + branch delete**
What is about to happen: the branch will be squash-merged into main and then deleted.

Show the user:
- Branch being merged: `{branch}`
- Proposed squash-merge commit message: `{type}: {summary}` (conventional commit format matching the branch prefix — draft this from the branch name and its commits before showing)
- The exact commands that will run once approved:
  ```bash
  git checkout main
  git merge --squash {branch}
  git commit -m "{type}: {summary}"
  git branch -D {branch}
  ```
- Note: `git branch -D {branch}` is irreversible — the branch will be gone.

Ask: "Is the proposed commit message accurate? Approve or tell me what to change before I run these commands."

Wait for approval. Apply any commit message edits the user requests. Do not run any git commands until approved.

---

After approval, run the squash-merge commands.

**Step 2 — Collect changes since last release**

Find the last release tag: `git describe --tags --abbrev=0`. Then collect:

```bash
git log {tag}..HEAD --oneline
git diff {tag}..HEAD --stat
```

If there are no commits since the last tag, stop — nothing to release.

---
**CHECKPOINT CP-2 — Change summary review**
What is about to happen: nothing yet — this is a review before any decisions are made.

Show the user the full output of:
- `git log {tag}..HEAD --oneline`
- `git diff {tag}..HEAD --stat`

Ask: "These are all commits since the last release (`{tag}`). Are there any commits here that should NOT be included in this release, or anything missing?"

Wait for a response. If the user flags a problem, stop and help them resolve it. Otherwise continue.

---

**Step 3 — Classify changes and propose the bump**

Apply the versioning rules:

| Bump | Use when |
|---|---|
| `patch` | Bug fixes; new props with defaults; showcase/preview-only changes; scripts, CLAUDE.md, or skills updates — consumer code unchanged |
| `minor` | New components, hooks, providers, or utils; new optional props without defaults; new gallery pages; additive template changes — no consumer migration needed |
| `major` | Removing/renaming exports or props; breaking prop type changes; template restructuring that breaks consumer customizations — consumer must act after upgrading |

Tie-breaker: when in doubt, use the higher bump. Compute the proposed `x.y.z` from the current `package.json` version.

---
**CHECKPOINT CP-3 — Version bump approval**
What is about to happen: the CHANGELOG entry will be drafted using this version — changing it later means redrafting.

Show the user:
- Current version: `{current}` (from `package.json`)
- Proposed new version: `{x.y.z}`
- Bump level: **patch / minor / major**
- One-line reasoning: e.g. "patch — all changes are showcase/infra only, no new exports"

Ask: "Does this bump level look right? Approve or tell me the correct level before I draft the CHANGELOG."

Wait for approval. If the user corrects the bump, recompute `x.y.z` accordingly.

---

**Step 4 — Draft the CHANGELOG entry**

Write the entry in house format:

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

Do not insert the entry into the file yet.

---
**CHECKPOINT CP-4 — CHANGELOG draft approval**
What is about to happen: the CHANGELOG entry will be written to `CHANGELOG.md`.

Show the full drafted entry exactly as it will appear in the file.

Ask: "Does this accurately describe the release? Edit the wording or approve to continue to the BACKLOG step."

Wait for approval. Apply any edits the user requests before moving on.

---

**Step 5 — Propose BACKLOG.md changes**

Open `BACKLOG.md` and work through two sub-tasks:

**5a — Confirm tracked items**

List every `[~]` item currently in the Unreleased section. For each one, determine whether it is covered by the commits in this release. Propose marking covered items `[✓]`; leave unfinished ones as `[~]`.

If there are no `[~]` items, skip to 5b.

**5b — Add unplanned changes**

Compare the commits in `git log {tag}..HEAD --oneline` against the items now in Unreleased. Identify any commits not reflected by an existing BACKLOG item.

For each untracked commit, propose a new `[✓] **Category** — description` line using the appropriate Category label (`Component`, `Docs`, `Infra`, `Showcase`, `Consumer`).

Do not edit the file yet.

---
**CHECKPOINT CP-5 — BACKLOG changes approval**
What is about to happen: `BACKLOG.md` will be edited with the changes below.

Show the user the full proposed diff:
- `[~]` items being promoted to `[✓]` (list each by description)
- New `[✓]` items being added (list each with category + description)
- Items being left unchanged (list if any, so the user can see nothing was missed)

Ask: "Do these BACKLOG changes look right? Approve or tell me what to add, remove, or change."

Wait for approval. Apply any edits the user requests before writing the file.

---

After approval, write the changes to both `CHANGELOG.md` and `BACKLOG.md`.

**Step 6 — Commit**

---
**CHECKPOINT CP-6 — Commit preview**
What is about to happen: the following commands will run and create a commit on main.

Show the user exactly:
```bash
git add CHANGELOG.md BACKLOG.md
git commit -m "docs: add CHANGELOG entry for v{x.y.z}"
```

Ask: "Ready to commit? Approve to create the commit."

Wait for approval. Do not run the commit until approved.

---

After approval, run the commit. Then tell the user:

> Done. Run `/release` to cut the release.
