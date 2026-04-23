import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Works — Akhil Krishnan" },
      {
        name: "description",
        content:
          "Selected case studies from Akhil Krishnan — Hevo Data, Clazar design system, MessagePlus, Simbian.ai and more.",
      },
      { property: "og:title", content: "Works — Akhil Krishnan" },
      {
        property: "og:description",
        content: "Case studies in product design, design systems and AI-first workflows.",
      },
    ],
  }),
  component: Works,
});

function Works() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <header className="max-w-3xl">
        <p className="font-hand text-2xl text-marker">/works</p>
        <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
          Things I designed,
          <br />
          <span className="text-ink-soft">and helped ship.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-soft">
          A loose-chronological slice. Each one taught me something I didn't know going in.
        </p>
      </header>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            to="/works/$slug"
            params={{ slug: p.slug }}
            className={`group block fade-up ${i % 3 === 0 ? "sm:col-span-2" : ""}`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.cover} ${
                i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
              } transition-transform duration-500 group-hover:-translate-y-1`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
              <div className="absolute inset-x-6 bottom-5 flex items-end justify-between text-white">
                <p className="font-display text-2xl font-semibold drop-shadow-sm sm:text-3xl">
                  {p.title.split("—")[0].trim()}
                </p>
                <span className="rounded-full bg-black/30 px-2.5 py-1 text-xs backdrop-blur">
                  {p.year}
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm">
              <p className="text-ink">{p.role}</p>
              <ul className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-card px-2.5 py-0.5 text-xs text-ink-soft"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-3 max-w-xl text-sm text-ink-soft">{p.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
