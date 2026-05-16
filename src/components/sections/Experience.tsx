import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-surface-container-low px-8 py-32 md:px-16"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16">
          <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-secondary">
            Work History
          </span>
          <h2 className="font-headline-md">Experience</h2>
        </div>
        <div className="space-y-12">
          {experience.map((entry) => (
            <article
              key={entry.id}
              className="grid grid-cols-1 gap-6 border-b border-outline-variant/20 pb-12 last:border-0 md:grid-cols-12"
            >
              <div className="md:col-span-4">
                <p className="font-mono text-[12px] text-outline">
                  {entry.period}
                </p>
                <h3 className="mt-2 font-headline-md text-[1.5rem]">
                  {entry.role}
                </h3>
                <p className="mt-1 font-mono text-[13px] text-secondary">
                  {entry.company}
                </p>
              </div>
              <ul className="space-y-3 font-body-md text-on-surface-variant md:col-span-7 md:col-start-6">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="font-mono text-primary">&gt;</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
