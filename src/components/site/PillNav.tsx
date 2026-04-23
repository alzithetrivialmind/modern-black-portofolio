import { Link } from "@tanstack/react-router";

const links = [
  { to: "/works", label: "Works" },
  { to: "/about", label: "About" },
  { to: "/blogs", label: "Blogs" },
] as const;

export function PillNav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="nav-blur pointer-events-auto flex items-center gap-1 rounded-full border border-border/60 px-2 py-2 shadow-[0_8px_30px_-12px_rgb(0_0_0_/0.18)]"
      >
        <Link
          to="/"
          className="group flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-accent"
        >
          <span className="text-ink-soft">/Akhil</span>
          <span className="text-ink-soft/60">›</span>
          <span>Krishnan</span>
        </Link>
        <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
        <div className="hidden items-center gap-0.5 sm:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-ink-soft transition hover:bg-accent hover:text-ink"
              activeProps={{ className: "bg-accent text-ink" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/resume"
          className="ml-1 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
