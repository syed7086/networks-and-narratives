# Portfolio phases

Track progress for **Networks & Narratives**. Phase 1 (app scaffold) is complete on `main`.

- **Issues:** https://github.com/syed7086/networks-and-narratives/issues  
- **Labels:** `phase-1` · `phase-2` · `phase-3`  
- **New issue:** use templates under `.github/ISSUE_TEMPLATE/`
- **Branches & PRs:** [CONTRIBUTING.md](./CONTRIBUTING.md) · [BRANCHES.md](./BRANCHES.md)

## Phase 1 — Infrastructure ✅

- [x] Next.js + Tailwind scaffold from Stitch export
- [x] Data-driven sections (`src/data/*`)
- [x] Production build verified (Node 20 via `.nvmrc`)
- [x] Push to GitHub — [syed7086/networks-and-narratives](https://github.com/syed7086/networks-and-narratives)
- [ ] Deploy on Vercel and smoke-test production URL

## Phase 2 — Content (hire-ready)

Edit data files only — no component changes required.

| File | What to update |
|------|----------------|
| `src/data/profile.ts` | Real email, bio, LinkedIn/GitHub URLs, CCNA status |
| `src/data/education.ts` | University name, dates, highlights |
| `src/data/experience.ts` | Real roles or remove sample entries |
| `src/data/projects.ts` | Real lab projects + working GitHub links |
| `src/data/skills.ts` | Interview-ready skills only |
| `src/data/ccnaProgress.ts` | Honest CCNA study progress |
| `public/assets/resume.pdf` | Add your resume PDF |

**Done when:** No placeholders (`Your University`, `hello@example.com`, bare `github.com/` URLs).

## Phase 3 — Features & polish

- [ ] Photography section (port from `code.html`)
- [ ] Blog section (port from `code.html`)
- [ ] Favicon + Open Graph image
- [ ] Contact form (e.g. Formspree) or verified mailto flow

## Reference

- `code.html` — original Stitch export
- `DESIGN.md` — design tokens
