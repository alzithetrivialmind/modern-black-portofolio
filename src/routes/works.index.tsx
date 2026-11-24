import { createFileRoute, Link } from "@tanstack/react-router";
import { ProjectCover } from "@/components/site/ProjectCover";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/works/")({
  head: () => ({
    meta: [
      { title: "Works — Alzi" },
      {
        name: "description",
        content:
          "Work by Alzi: SnapCuller, the Bollard Pull Test app, ERPNext, CECS, Fingerspot Attendance Hub and more.",
      },
      { property: "og:title", content: "Works — Alzi" },
      {
        property: "og:description",
        content: "Independent products and software for shipyard operations.",
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
          Things I built,
          <br />
          <span className="text-ink-soft">and put to work.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-soft">
          Industrial software for a working shipyard, and products of my own.
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
            <ProjectCover project={p} wide={i % 3 === 0} />
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
