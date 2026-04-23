import { createFileRoute } from "@tanstack/react-router";
import { timeline, tools } from "@/data/portfolio";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Akhil Krishnan" },
      {
        name: "description",
        content: "One-page resume of Akhil Krishnan, Design Builder.",
      },
      { property: "og:title", content: "Resume — Akhil Krishnan" },
      {
        property: "og:description",
        content: "One-page resume of a Design Builder with 11+ years of experience.",
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
            Akhil Krishnan
          </h1>
          <p className="mt-1 text-ink-soft">
            Design Builder · Bangalore, India · hello@akhilkrishnan.design
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Download PDF
        </button>
      </div>

      <div className="mt-12 space-y-12 text-ink">
        <Block title="Summary">
          <p>
            11+ years of product design across consumer, fintech, security and developer
            tools. Equally at home in Figma and a code editor. Lately: AI-first
            workflows, shipping production UI in days.
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

        <Block title="Toolbox">
          <p className="text-ink-soft">{tools.join(" · ")}</p>
        </Block>

        <Block title="Education">
          <div className="grid gap-1 sm:grid-cols-[10rem_1fr]">
            <span className="font-hand text-lg text-marker">2010 — 2014</span>
            <span>B.Des, Visual Communication. National Institute of Design.</span>
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
