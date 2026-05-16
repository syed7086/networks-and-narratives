# Issue → branch mapping

Use **one branch and one PR per issue**. Branch from latest `main` before starting.

| Issue | Title | Branch name | Primary files |
|-------|-------|-------------|---------------|
| #1 | Deploy to Vercel | `phase-1/vercel-deploy` | Vercel dashboard; optional docs |
| #2 | Profile data | `phase-2/profile-data` | `src/data/profile.ts` |
| #3 | Education data | `phase-2/3-education-data` | `src/data/education.ts` |
| #4 | Experience data | `phase-2/4-experience-data` | `src/data/experience.ts` |
| #5 | Projects data | `phase-2/projects-data` | `src/data/projects.ts` |
| #6 | Skills data | `phase-2/skills-data` | `src/data/skills.ts` |
| #7 | CCNA progress | `phase-2/ccna-progress-data` | `src/data/ccnaProgress.ts` |
| #8 | Resume PDF | `phase-2/resume-pdf` | `public/assets/resume.pdf` |
| #9 | Photography section | `phase-3/photography-section` | new component, `src/app/page.tsx` |
| #10 | Blog section | `phase-3/blog-section` | new component, `src/app/page.tsx` |
| #11 | Favicon & OG image | `phase-3/seo-favicon-og` | `src/app/layout.tsx`, `public/` |
| #12 | Contact flow | `phase-3/contact-flow` | `src/components/sections/Contact.tsx` |

## Quick start (example: issue #3)

```bash
git checkout main && git pull origin main
git checkout -b phase-2/education-data
# edit src/data/education.ts
git add src/data/education.ts
git commit -m "content: update education data (closes #3)"
git push -u origin phase-2/education-data
```

Then open a PR on GitHub and merge when satisfied.
