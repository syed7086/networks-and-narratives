import Link from "next/link";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "#hero", label: "01. Home" },
  { href: "#about", label: "02. Profile" },
  { href: "#networking", label: "03. Systems" },
  { href: "#projects", label: "04. Projects" },
  { href: "#experience", label: "05. Experience" },
  { href: "#education", label: "06. Education" },
  { href: "#stack", label: "07. Stack" },
  { href: "#contact", label: "08. Contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/10 bg-surface/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-8 md:px-16">
        <Link
          href="#hero"
          className="font-headline-md flex items-center gap-2 tracking-tight text-on-surface"
        >
          <span className="font-mono text-sm text-primary opacity-50">
            &lt;/&gt;
          </span>
          {profile.displayName}
        </Link>
        <div className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant transition-colors hover:text-on-surface xl:text-[11px]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          className="font-mono shrink-0 border border-primary/30 px-4 py-2 text-[11px] uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary/10 md:px-6"
        >
          [Connect]
        </Link>
      </nav>
    </header>
  );
}
