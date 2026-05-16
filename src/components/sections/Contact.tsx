import Link from "next/link";
import { profile } from "@/data/profile";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function Contact() {
  const mailto = `mailto:${profile.email}?subject=Portfolio%20Inquiry`;

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1440px] px-8 py-32 md:px-16"
    >
      <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
        <div>
          <span className="mb-4 block font-mono text-[11px] uppercase tracking-widest text-secondary">
            Request Access
          </span>
          <h2 className="font-headline-md mb-8 text-[clamp(2rem,5vw,3rem)]">
            Let&apos;s talk about the architecture of your next story.
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            {profile.contactBlurb}
          </p>
        </div>
        <div className="flex flex-col justify-end gap-8">
          <Link
            href={mailto}
            className="group flex items-center gap-4 font-mono text-[12px] uppercase tracking-widest text-primary transition-all hover:gap-6"
          >
            [Send Email]
            <MaterialIcon name="arrow_forward" className="text-[16px]" />
          </Link>
          <Link
            href={profile.resumePath}
            className="inline-block w-fit border border-outline-variant px-8 py-3 font-mono text-[12px] uppercase tracking-widest transition-colors hover:border-primary"
          >
            [Download Resume]
          </Link>
          <div className="flex gap-6 font-mono text-[11px] uppercase tracking-widest">
            <Link
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary"
            >
              LinkedIn
            </Link>
            <Link
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
