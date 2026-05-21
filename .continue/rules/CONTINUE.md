# Networks & Narratives - Project Guide

## Project Overview
**Networks & Narratives** is a professional portfolio website designed for a networking aspirant and CCNA candidate. It features a unique "Nocturnal Earth" design system and includes specialized components like a Networking Dashboard and CCNA progress tracking.

- **Key Technologies:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.
- **Architecture:** Component-based architecture with a clear separation between UI components (`src/components`) and content data (`src/data`).
- **Design System:** "Nocturnal Earth" - a dark-themed, data-rich aesthetic focusing on system infrastructure and networking motifs.

## Getting Started
### Prerequisites
- **Node.js 20.x** (Check `.nvmrc`)
- **npm** (comes with Node.js)

### Installation
```bash
nvm use          # Ensure correct Node version
npm install      # Install dependencies
```

### Basic Usage
- **Development Mode:** `npm run dev` - starts the development server at `http://localhost:3000`.
- **Production Build:** `npm run build` followed by `npm run start`.
- **Linting:** `npm run lint` to run ESLint checks.

## Project Structure
- `src/app/`: Next.js App Router pages and global styles.
  - `page.tsx`: The main landing page assembling all sections.
  - `layout.tsx`: Root layout with font configurations and metadata.
- `src/components/`:
  - `layout/`: Global UI elements like Nav and Footer.
  - `sections/`: Individual content blocks (Hero, About, NetworkingDashboard, etc.).
  - `ui/`: Reusable low-level components (MaterialIcon, TopologyPanel).
- `src/data/`: **Centralized content store**. Modify these files to update site content without touching React code.
- `src/types/`: TypeScript definitions for data structures and components.
- `public/`: Static assets like images and the resume PDF.

## Development Workflow
### Updating Content
To update the portfolio content, edit the corresponding file in `src/data/`:
- `profile.ts`: Basic info, bio, and social links.
- `projects.ts`: Featured projects and lab work.
- `experience.ts` & `education.ts`: Career and academic history.
- `ccnaProgress.ts`: Updates for the networking terminal UI.

### Coding Standards
- **TypeScript:** Use strict typing for all new components and data structures.
- **Styling:** Use Tailwind CSS 4 utility classes. Prefer CSS variables defined in `globals.css` for theme colors (e.g., `bg-surface`, `text-on-surface`).
- **Components:** Functional components with descriptive names. Place shared logic in hooks or utility functions if needed.

### Contribution Guidelines
- Work on feature branches.
- Follow the naming convention: `feature/description` or `fix/description`.
- Submit a Pull Request for review before merging into `main`.

## Key Concepts
### Nocturnal Earth Design System
The site uses a specific color palette and typography:
- **Fonts:** EB Garamond (Serif), Hanken Grotesk (Sans), JetBrains Mono (Monospace).
- **Themes:** Primarily dark mode (`dark` class on `<html>`).

### Topology & Networking UI
The `NetworkingDashboard` and `TopologyPanel` are central to the "Narrative". They use custom-built UI components to simulate network monitoring and infrastructure status.

## Common Tasks
### Adding a New Project
1. Open `src/data/projects.ts`.
2. Add a new object to the array.
3. Ensure `featured: true` if you want it displayed on the main page.
4. Add relevant tags (e.g., "Cisco", "Python", "Cloud").

### Updating CCNA Progress
1. Open `src/data/ccnaProgress.ts`.
2. Update the progress values or add new milestones to the terminal output simulation.

## Troubleshooting
- **Node Version Mismatch:** If you see errors related to Next.js 16, ensure you are using Node 20 as specified in `.nvmrc`.
- **Tailwind v4 Issues:** Ensure you are using the new `@tailwindcss/postcss` plugin if you are modifying the build pipeline.

## References
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/v4-beta)
- [Project DESIGN.md](./DESIGN.md) - Deep dive into design tokens.
- [Project PHASES.md](./PHASES.md) - Roadmap and current progress.
