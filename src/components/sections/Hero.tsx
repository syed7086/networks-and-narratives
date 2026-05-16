import Link from "next/link";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-8 pt-20 md:px-16"
    >
      <div className="z-10 max-w-4xl text-center">
        <div className="mb-8 inline-block animate-pulse rounded border border-outline-variant/30 bg-surface-container-high px-4 py-2 font-mono text-[13px] text-primary/80">
          {profile.heroStatusLine}
        </div>
        <h1 className="font-display-lg mb-8 select-none">{profile.name}</h1>
        <p className="font-body-lg mx-auto mb-12 max-w-lg tracking-wide text-on-surface-variant italic">
          {profile.tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#networking"
            className="inline-block bg-primary px-10 py-4 font-mono text-[12px] uppercase tracking-[0.2em] text-on-primary transition-all duration-300 hover:brightness-110"
          >
            Execute Terminal
          </Link>
          <Link
            href={profile.resumePath}
            className="inline-block border border-outline-variant px-10 py-4 font-mono text-[12px] uppercase tracking-[0.2em] transition-all duration-300 hover:border-primary"
          >
            Download Resume
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px]" />
      </div>
    </section>
  );
}
