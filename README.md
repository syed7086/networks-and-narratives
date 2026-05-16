# Networks & Narratives — Portfolio

Next.js portfolio migrated from the Google Stitch export, preserving the **Nocturnal Earth** design system.

## Requirements

- **Node.js 20** (see `.nvmrc`). Next.js 16 does not run on Node 12.

If `node -v` shows v12, use [nvm](https://github.com/nvm-sh/nvm) (already installed on this machine):

```bash
nvm use          # uses .nvmrc → Node 20
npm install
npm run dev
```

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit your content (no component changes)

| File | What it controls |
|------|------------------|
| `src/data/profile.ts` | Name, bio, links, email, resume path |
| `src/data/projects.ts` | Project cards on the landing page |
| `src/data/experience.ts` | Work experience section |
| `src/data/education.ts` | Education section |
| `src/data/skills.ts` | Technical stack badges |
| `src/data/ccnaProgress.ts` | CCNA terminal progress bars |

**Add a project:** append an object to `projects.ts` with `featured: true`.  
**Remove a project:** delete the object or set `featured: false`.

Place your resume at `public/assets/resume.pdf`.

## Phases & issues

See **[PHASES.md](./PHASES.md)** for the full checklist (Phase 1–3).

Open or track work on GitHub: [Issues](https://github.com/syed7086/networks-and-narratives/issues) · Labels: `phase-1`, `phase-2`, `phase-3`

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repository at [vercel.com](https://vercel.com).
3. Framework preset: **Next.js** (auto-detected).
4. Deploy — every push to `main` redeploys.

## Reference files

- `code.html` — original Stitch export
- `DESIGN.md` — design tokens and brand guidelines
