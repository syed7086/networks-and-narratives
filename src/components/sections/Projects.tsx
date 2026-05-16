import Link from "next/link";
import { projects } from "@/data/projects";
import type { ProjectStatus } from "@/types/content";

const statusLabel: Record<ProjectStatus, string> = {
  complete: "COMPLETE",
  in_progress: "IN_PROGRESS",
  planned: "PLANNED",
};

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="mx-auto max-w-[1440px] border-t border-outline-variant/30 px-8 py-32 md:px-16"
    >
      <div className="mb-16">
        <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-secondary">
          Lab Archive
        </span>
        <h2 className="font-headline-md">Projects & Case Studies</h2>
      </div>

      {featured.length === 0 ? (
        <p className="font-mono text-on-surface-variant">
          system.idle() — no projects loaded. Add entries in src/data/projects.ts
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col border border-outline-variant/20 bg-surface-container p-6 transition-all hover:border-primary/50"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className="font-mono text-[11px] text-primary opacity-50">
                  {project.category.toUpperCase()}::{project.id}
                </span>
                <span className="border border-secondary/20 bg-secondary/10 px-2 py-0.5 font-mono text-[10px] text-secondary">
                  {statusLabel[project.status]}
                </span>
              </div>
              <h3 className="font-headline-md mb-3 text-[1.35rem]">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 font-body-md text-on-surface-variant">
                {project.summary}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[10px] uppercase tracking-wider text-outline"
                  >
                    [{tool}]
                  </span>
                ))}
              </div>
              <ul className="mb-6 space-y-2 font-mono text-[12px] text-on-surface-variant">
                {project.bullets.slice(0, 3).map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-primary">&gt;</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              {project.links.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-widest text-primary transition-colors hover:text-primary-fixed-dim"
                >
                  [View on GitHub]
                </Link>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
