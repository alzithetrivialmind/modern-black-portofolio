import { Link } from "@tanstack/react-router";

const links = [
  { to: "/works", label: "Works" },
  { to: "/skills", label: "Skills" },
  { to: "/about", label: "About" },
] as const;

export function PillNav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-2 sm:px-4 print:hidden">
      <nav
        aria-label="Primary"
        className="nav-blur pointer-events-auto flex items-center gap-0.5 rounded-full border border-border/60 px-2 py-2 shadow-[0_8px_30px_-12px_rgb(0_0_0_/0.18)] sm:gap-1"
      >
        <Link
          to="/"
          className="rounded-full px-2 py-1.5 text-sm font-medium text-ink-soft transition hover:bg-accent sm:px-3"
        >
          /Alzi
        </Link>
        <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="rounded-full px-2 py-1.5 text-sm font-medium text-ink-soft transition hover:bg-accent hover:text-ink sm:px-3"
            activeProps={{ className: "bg-accent text-ink" }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          to="/resume"
          className="ml-1 rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:px-4"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
