#!/usr/bin/env python3
"""Create milestones and phase issues on GitHub. Run once after push."""
from __future__ import annotations

import json
import subprocess
import urllib.error
import urllib.request

REPO = "syed7086/networks-and-narratives"
API = f"https://api.github.com/repos/{REPO}"


def get_token() -> str:
    out = subprocess.run(
        ["git", "credential", "fill"],
        input="protocol=https\nhost=github.com\n\n",
        capture_output=True,
        text=True,
        check=True,
    ).stdout
    for line in out.splitlines():
        if line.startswith("password="):
            return line.split("=", 1)[1]
    raise RuntimeError("No GitHub token in git credential store")


def api(method: str, path: str, data: dict | None = None) -> dict:
    token = get_token()
    body = json.dumps(data).encode() if data else None
    req = urllib.request.Request(
        f"{API}{path}",
        data=body,
        method=method,
        headers={
            "Authorization": f"token {token}",
            "Accept": "application/vnd.github+json",
            "Content-Type": "application/json",
        },
    )
    with urllib.request.urlopen(req) as resp:
        return json.load(resp)


def existing_issue_titles() -> set[str]:
    titles: set[str] = set()
    page = 1
    while True:
        batch = api("GET", f"/issues?state=all&per_page=100&page={page}")
        if not batch:
            break
        for item in batch:
            if "pull_request" not in item:
                titles.add(item["title"])
        if len(batch) < 100:
            break
        page += 1
    return titles


def ensure_milestone(title: str, description: str) -> int:
    milestones = api("GET", "/milestones?state=all&per_page=100")
    for m in milestones:
        if m["title"] == title:
            return m["number"]
    created = api("POST", "/milestones", {"title": title, "description": description})
    return created["number"]


def create_issue(title: str, labels: list[str], body: str, milestone: int) -> None:
    api(
        "POST",
        "/issues",
        {"title": title, "body": body, "labels": labels, "milestone": milestone},
    )
    print(f"  created: {title}")


def main() -> None:
    m1 = ensure_milestone(
        "Phase 1 — Infrastructure",
        "Deploy and tooling. GitHub push is done; Vercel remains.",
    )
    m2 = ensure_milestone(
        "Phase 2 — Hire-ready content",
        "Data files and resume — edit src/data/* only.",
    )
    m3 = ensure_milestone(
        "Phase 3 — Features & polish",
        "Photography, blog, SEO, contact improvements.",
    )
    print(f"Milestones: Phase 1=#{m1}, Phase 2=#{m2}, Phase 3=#{m3}")

    existing = existing_issue_titles()
    issues = [
        (
            "Deploy to Vercel and verify production build",
            ["phase-1"],
            m1,
            """## Summary
Import the repo on Vercel and confirm the production deployment works.

## Steps
1. Go to https://vercel.com/new
2. Import `syed7086/networks-and-narratives`
3. Framework: Next.js (auto-detected)
4. Deploy and open the live URL

## Done when
- [ ] Site loads on `*.vercel.app` (or custom domain)
- [ ] Build succeeds on Vercel
- [ ] Main sections render (hero, projects, contact)
""",
        ),
        (
            "Replace placeholder profile data",
            ["phase-2"],
            m2,
            """## File
`src/data/profile.ts`

## Tasks
- [ ] Real email (replace `hello@example.com`)
- [ ] Real LinkedIn, GitHub, Instagram URLs
- [ ] Accurate bio, CCNA status, education summary
- [ ] Confirm `resumePath` points to uploaded PDF

## Done when
No placeholder links or example email remain.
""",
        ),
        (
            "Update education.ts with real university and dates",
            ["phase-2"],
            m2,
            """## File
`src/data/education.ts`

## Tasks
- [ ] Replace `Your University` with actual institution
- [ ] Correct period dates
- [ ] Accurate highlights

## Done when
Education section reflects your real academic history.
""",
        ),
        (
            "Update experience.ts with real roles",
            ["phase-2"],
            m2,
            """## File
`src/data/experience.ts`

## Tasks
- [ ] Replace sample roles with real work or volunteer experience
- [ ] Or remove entries you cannot substantiate

## Done when
Every experience entry is truthful and specific.
""",
        ),
        (
            "Add real networking lab projects with GitHub links",
            ["phase-2"],
            m2,
            """## File
`src/data/projects.ts`

## Tasks
- [ ] Replace example labs with your actual work
- [ ] Set real `github` URLs
- [ ] Set `featured: false` to hide projects

## Done when
Each featured project has a working link or honest no-repo state.
""",
        ),
        (
            "Align skills.ts with interview-ready stack",
            ["phase-2"],
            m2,
            """## File
`src/data/skills.ts`

## Tasks
- [ ] Keep only skills you can explain in an interview
- [ ] Remove tools you have not used hands-on

## Done when
Tech stack badges match your real competency level.
""",
        ),
        (
            "Update ccnaProgress.ts with current study progress",
            ["phase-2"],
            m2,
            """## File
`src/data/ccnaProgress.ts`

## Tasks
- [ ] Set honest progress percentages per topic
- [ ] Match terminal dashboard to actual CCNA prep

## Done when
Progress bars reflect reality.
""",
        ),
        (
            "Add resume.pdf to public/assets",
            ["phase-2"],
            m2,
            """## File
`public/assets/resume.pdf`

## Tasks
- [ ] Export resume as PDF
- [ ] Place at `public/assets/resume.pdf`
- [ ] Test resume CTA on the site

## Done when
Resume downloads correctly from the live site.
""",
        ),
        (
            "Port photography section from code.html",
            ["phase-3"],
            m3,
            """## Reference
`code.html` — `#photography` section

## Tasks
- [ ] Create React section component
- [ ] Add to page and nav
- [ ] Use your images in `public/assets/`

## Done when
Photography section matches Stitch design intent.
""",
        ),
        (
            "Port blog section from code.html",
            ["phase-3"],
            m3,
            """## Reference
`code.html` — `#blog` section

## Tasks
- [ ] Create blog section or minimal coming soon
- [ ] Wire nav link if section is live

## Done when
Nav does not link to missing anchors.
""",
        ),
        (
            "Add favicon and Open Graph image",
            ["phase-3"],
            m3,
            """## Files
`src/app/layout.tsx`, `public/`

## Tasks
- [ ] Add favicon / app icon
- [ ] Add openGraph.images in metadata
- [ ] Verify social link previews

## Done when
Browser tab and shares show correct branding.
""",
        ),
        (
            "Improve contact flow (mailto or Formspree)",
            ["phase-3"],
            m3,
            """## Files
`src/components/sections/Contact.tsx`, `src/data/profile.ts`

## Tasks
- [ ] Verify mailto with real email
- [ ] Optional: Formspree integration

## Done when
Visitors can reach you reliably.
""",
        ),
    ]

    for title, labels, milestone, body in issues:
        if title in existing:
            print(f"  skip (exists): {title}")
            continue
        create_issue(title, labels, body, milestone)

    print("Done.")


if __name__ == "__main__":
    main()
