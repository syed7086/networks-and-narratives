#!/usr/bin/env bash
# Create a feature branch for a GitHub issue. Usage: ./scripts/new-issue-branch.sh <issue-number>
set -euo pipefail

ISSUE="${1:-}"
if [[ -z "$ISSUE" ]]; then
  echo "Usage: $0 <issue-number>" >&2
  echo "See BRANCHES.md for issue → branch mapping." >&2
  exit 1
fi

declare -A BRANCHES=(
  [1]="phase-1/vercel-deploy"
  [2]="phase-2/profile-data"
  [3]="phase-2/3-education-data"
  [4]="phase-2/4-experience-data"
  [5]="phase-2/projects-data"
  [6]="phase-2/skills-data"
  [7]="phase-2/ccna-progress-data"
  [8]="phase-2/resume-pdf"
  [9]="phase-3/photography-section"
  [10]="phase-3/blog-section"
  [11]="phase-3/seo-favicon-og"
  [12]="phase-3/contact-flow"
)

BRANCH="${BRANCHES[$ISSUE]:-}"
if [[ -z "$BRANCH" ]]; then
  echo "Unknown issue #$ISSUE. Valid: 1-12. See BRANCHES.md." >&2
  exit 1
fi

git checkout main
git pull origin main
git checkout -b "$BRANCH"
echo "On branch: $BRANCH"
echo "Next: make changes, then:"
echo "  git add . && git commit -m \"your message (closes #$ISSUE)\""
echo "  git push -u origin $BRANCH"
echo "Open PR on GitHub: base main ← compare $BRANCH"
