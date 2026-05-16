import { profile } from "@/data/profile";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1440px] border-t border-outline-variant/30 px-8 py-32 md:px-16"
    >
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="mb-4 block font-mono text-[11px] uppercase tracking-widest text-secondary">
            System Info
          </span>
          <h2 className="font-headline-md">{profile.aboutTitle}</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="font-body-lg mb-8 leading-relaxed text-on-surface-variant">
            I am a recent graduate dedicated to mastering the architecture of
            the invisible. Currently actively pursuing my{" "}
            <strong>CCNA Certification</strong>, I focus on the intersection of
            robust network infrastructure and elegant creative storytelling.
          </p>
          <div className="grid grid-cols-2 gap-8 font-mono text-[13px]">
            <div className="space-y-2">
              <div className="text-secondary opacity-70">// EDUCATION</div>
              <div>{profile.educationSummary}</div>
              <div className="text-outline">{profile.educationYear}</div>
            </div>
            <div className="space-y-2">
              <div className="text-secondary opacity-70">// STATUS</div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-ping rounded-full bg-primary" />
                {profile.ccnaStatusLabel}
              </div>
              <div className="text-outline">{profile.ccnaDetail}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
