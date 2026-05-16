# Contributing

All changes go through **feature branches** and **Pull Requests**. Do not commit directly to `main`.

## Workflow

1. Sync `main`: `git checkout main && git pull origin main`
2. Create a branch: `git checkout -b phase-2/education-data`
3. Make changes and commit on that branch
4. Push the branch: `git push -u origin phase-2/education-data`
5. Open a PR on GitHub (base: `main`)
6. Review the diff and **merge on GitHub** when ready
7. Locally: `git checkout main && git pull origin main`

## Branch naming

| Pattern | Example | Use for |
|---------|---------|---------|
| `phase-1/<name>` | `phase-1/vercel-deploy` | Infrastructure |
| `phase-2/<name>` | `phase-2/4-education-data` | Content (`src/data/*`) |
| `phase-3/<name>` | `phase-3/photography-section` | Features / components |

See [BRANCHES.md](./BRANCHES.md) for issue → branch mapping.

## Commit messages

Reference the GitHub issue so PRs link correctly:

```
content: update education with real university (closes #4)
```

Use `closes #N` in the PR description to auto-close the issue when merged.

## Pull requests

- One issue per branch per PR
- Base branch: `main`
- Fill in the PR template checklist
- Merge via GitHub UI (squash or merge commit — your choice)

## Node.js

Use Node 20: `nvm use` (see `.nvmrc`).

```bash
npm install
npm run dev    # local preview
npm run build  # verify before opening PR
```

## Phases

Track work in [PHASES.md](./PHASES.md) and [GitHub Issues](https://github.com/syed7086/networks-and-narratives/issues).
