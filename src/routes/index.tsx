import { createFileRoute, Link } from "@tanstack/react-router";
import { Annotation, Arrow } from "@/components/site/Annotation";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akhil Krishnan — Design Builder, 11 years deep" },
      {
        name: "description",
        content:
          "Personal portfolio of Akhil Krishnan — Design Builder shipping AI-first product design and design systems.",
      },
      { property: "og:title", content: "Akhil Krishnan — Design Builder" },
      {
        property: "og:description",
        content:
          "11+ years deep — now shipping what I design with AI-first workflows. Recently built the Clazar design system.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-12 sm:pt-20">
        {/* Annotation top-left */}
        <div className="pointer-events-none absolute left-4 top-2 hidden -rotate-6 sm:block">
          <Annotation>Hey there! I am a<br />Design Builder ✦</Annotation>
          <Arrow className="ml-16 mt-1" rotate={140} />
        </div>

        <div className="fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-marker" />
            Available for select projects · 2025
          </p>

          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-[88px]">
            Design Builder,
            <br />
            <span className="text-ink-soft">11 years deep —</span>
            <br />
            now shipping what I design.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            I'm Akhil. I work at the seam between design and code, with AI-first
            workflows that turn ideas into shipping product in days, not quarters.
            Currently building at <span className="text-ink underline decoration-marker decoration-2 underline-offset-4">Hevo Data</span>.
          </p>

          {/* Annotation bottom-right of hero */}
          <div className="relative mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              See selected work →
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-ink transition hover:bg-accent"
            >
              About me
            </Link>

            <div className="pointer-events-none ml-auto hidden -translate-y-2 rotate-3 sm:block">
              <Arrow rotate={-30} />
              <Annotation className="-mt-2 block">
                Recently built Clazar
                <br />
                design system from scratch
              </Annotation>
            </div>
          </div>
        </div>

        {/* Keep scrolling cue */}
        <div className="mt-24 flex items-center gap-3 text-ink-soft">
          <span className="h-px w-10 bg-ink-soft/40" />
          <span className="font-hand text-2xl text-marker">Keep scrolling</span>
          <span className="text-lg">↓</span>
        </div>
      </section>

      {/* Featured work preview */}
      <section className="mx-auto max-w-6xl px-6 pt-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-hand text-xl text-marker">a few things I made →</p>
            <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected work
            </h2>
          </div>
          <Link
            to="/works"
            className="hidden text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline sm:inline"
          >
            See all works →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              to="/works/$slug"
              params={{ slug: p.slug }}
              className={`group block ${i === 0 ? "sm:col-span-2" : ""}`}
            >
              <div
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.cover} ${
                  i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                } transition-transform duration-500 group-hover:-translate-y-1`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_50%)]" />
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between text-white/95">
                  <p className="font-display text-2xl font-semibold drop-shadow-sm sm:text-3xl">
                    {p.title.split("—")[0].trim()}
                  </p>
                  <span className="rounded-full bg-black/30 px-2.5 py-1 text-xs backdrop-blur">
                    {p.year}
                  </span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-ink">{p.role}</span>
                <span className="text-ink-soft">{p.tags.join(" · ")}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
