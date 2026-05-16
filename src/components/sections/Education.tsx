import { education } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-[1440px] px-8 py-32 md:px-16"
    >
      <div className="mb-16">
        <span className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-secondary">
          Academic Record
        </span>
        <h2 className="font-headline-md">Education</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {education.map((entry) => (
          <article
            key={entry.id}
            className="border border-outline-variant/20 bg-surface-container p-8"
          >
            <p className="font-mono text-[12px] text-outline">{entry.period}</p>
            <h3 className="mt-3 font-headline-md text-[1.35rem]">
              {entry.degree}
            </h3>
            <p className="mt-1 font-mono text-[13px] text-secondary">
              {entry.school}
            </p>
            <ul className="mt-6 space-y-2 font-body-md text-on-surface-variant">
              {entry.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="font-mono text-primary">//</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
