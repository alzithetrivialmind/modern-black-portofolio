import { createFileRoute, Link } from "@tanstack/react-router";
import { Annotation, Arrow } from "@/components/site/Annotation";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alzi — IT Developer & Consultant" },
      {
        name: "description",
        content:
          "Personal portfolio of Alzi — IT Developer & Consultant shipping enterprise solutions and secure products.",
      },
      { property: "og:title", content: "Alzi — IT Developer & Consultant" },
      {
        property: "og:description",
        content:
          "Master of Management & Computer Science — now shipping enterprise systems and secure code. Founder of DigiSentral.",
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
        <div className="pointer-events-none absolute -left-24 -top-14 hidden -rotate-12 sm:block">
          <Annotation>Hey there! I am an<br />IT Developer ✦</Annotation>
          <Arrow className="ml-24 mt-2" rotate={160} />
        </div>

        <div className="fade-up">
          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-[88px]">
            IT Developer,
            <br />
            <span className="text-ink-soft">Building Systems —</span>
            <br />
            shipping secure solutions.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            I'm Alzi. I work at the intersection of business logic and secure code, with modern
            workflows that turn complex problems into reliable systems.
            Currently leading at <span className="text-ink underline decoration-marker decoration-2 underline-offset-4">DigiSentral</span>.
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs font-medium text-ink-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-marker opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-marker"></span>
            </span>
            Open for consulting projects · 2025
          </div>

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
          </div>
        </div>

        {/* Annotation floating right-center */}
        <div className="pointer-events-none absolute -right-20 top-[45%] hidden -translate-y-1/2 rotate-6 sm:block">
          <Arrow rotate={-25} />
          <Annotation className="-mt-1 block">
            Recently automated
            <br />
            shipyard ERP from zero
          </Annotation>
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
