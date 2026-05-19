import { skills } from "@/data/skills";
import type { SkillLevel } from "@/types/content";

const levelWidth: Record<SkillLevel, string> = {
  full: "w-full",
  strong: "w-3/4",
  intermediate: "w-2/3",
  learning: "w-1/2",
};

export function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-[1440px] px-8 py-32 md:px-16">
      <div className="mb-16 text-center">
        <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-secondary">
          Toolkit & Proficiency
        </span>
        <h2 className="font-headline-md">Technical Stack</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="group flex flex-col items-center border border-outline-variant/20 bg-surface-container p-6 transition-all hover:border-primary/50"
          >
            <div className="mb-4 font-mono text-[11px] text-primary opacity-50">
              {skill.code}
            </div>
            <div className="font-mono text-[14px] font-medium">
              {skill.label}
            </div>
            <div className="mt-4 h-0.5 w-full overflow-hidden bg-surface-container-high">
              <div
                className={`h-full bg-primary/40 transition-all duration-700 group-hover:bg-primary ${levelWidth[skill.level]}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
