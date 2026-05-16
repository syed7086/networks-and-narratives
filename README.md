# Networks & Narratives — Portfolio

Next.js portfolio migrated from the Google Stitch export, preserving the **Nocturnal Earth** design system.

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

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repository at [vercel.com](https://vercel.com).
3. Framework preset: **Next.js** (auto-detected).
4. Deploy — every push to `main` redeploys.

## Reference files

- `code.html` — original Stitch export
- `DESIGN.md` — design tokens and brand guidelines
