import { createFileRoute } from "@tanstack/react-router";
import { timeline, tools } from "@/data/portfolio";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Alzi" },
      {
        name: "description",
        content: "One-page resume of Alzi, IT Developer & Consultant.",
      },
      { property: "og:title", content: "Resume — Alzi" },
      {
        property: "og:description",
        content: "One-page resume of an IT Developer & Consultant with a Master's degree in Management.",
      },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-hand text-2xl text-marker">/resume</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Alzi
          </h1>
          <p className="mt-1 text-ink-soft">
            IT Developer & Consultant · Batam, Indonesia · alzi@example.com
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Print Resume
        </button>
      </div>

      <div className="mt-12 space-y-12 text-ink">
        <Block title="Summary">
          <p>
            IT Developer & Consultant specializing in ERPNext implementation, 
            Cybersecurity hardening, and enterprise network infrastructure. 
            Focused on bridging the gap between complex business logic and reliable, secure systems.
          </p>
        </Block>

        <Block title="Experience">
          <ol className="space-y-5">
            {timeline.map((t) => (
              <li key={t.year} className="grid gap-1 sm:grid-cols-[10rem_1fr]">
                <span className="font-hand text-lg text-marker">{t.year}</span>
                <span>{t.what}</span>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="Toolkit">
          <p className="text-ink-soft">{tools.join(" · ")}</p>
        </Block>

        <Block title="Education">
          <div className="space-y-4">
            <div className="grid gap-1 sm:grid-cols-[10rem_1fr]">
              <span className="font-hand text-lg text-marker">2023 — 2025</span>
              <span>Master of Management. Universitas Internasional Batam. GPA 3.92</span>
            </div>
            <div className="grid gap-1 sm:grid-cols-[10rem_1fr]">
              <span className="font-hand text-lg text-marker">2019 — 2023</span>
              <span>Bachelor of Computer Science. Universitas Internasional Batam. GPA 3.90</span>
            </div>
          </div>
        </Block>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
        {title}
      </h2>
      <div className="mt-3 text-lg leading-relaxed">{children}</div>
    </div>
  );
}
