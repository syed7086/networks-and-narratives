import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-lowest py-12">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-8 px-8 md:flex-row md:gap-0 md:px-16">
        <div className="font-headline-md text-on-surface">{profile.displayName}</div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
          © {year} {profile.displayName}. {profile.footerBuild}
        </p>
        <div className="flex gap-8">
          <Link
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant transition-colors hover:text-primary"
          >
            LinkedIn
          </Link>
          <Link
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant transition-colors hover:text-primary"
          >
            GitHub
          </Link>
          <Link
            href={profile.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant transition-colors hover:text-primary"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
