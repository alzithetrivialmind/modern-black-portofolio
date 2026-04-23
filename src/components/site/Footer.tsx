const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/itsalzi/" },
  { label: "GitHub", href: "https://github.com/alzithetrivialmind" },
  { label: "Email", href: "mailto:alzi@example.com" },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/70 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">
            Let's build something.
          </p>
          <p className="mt-2 max-w-sm text-sm text-ink-soft">
            Designed &amp; built by Alzi — {new Date().getFullYear()}. Always open to a
            good conversation.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-ink-soft underline-offset-4 transition hover:text-ink hover:underline"
              >
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
