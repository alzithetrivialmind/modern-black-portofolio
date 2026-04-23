import { createFileRoute } from "@tanstack/react-router";
import { Annotation } from "@/components/site/Annotation";
import { timeline, tools } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Akhil Krishnan" },
      {
        name: "description",
        content:
          "12+ years designing software. Bio, timeline and the tools Akhil Krishnan ships with.",
      },
      { property: "og:title", content: "About — Akhil Krishnan" },
      {
        property: "og:description",
        content: "Bio, timeline and toolbox of a Design Builder.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-12">
      <p className="font-hand text-2xl text-marker">/about</p>
      <h1 className="mt-2 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
        Designer who codes,
        <br />
        builder who designs.
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink">
        <p>
          I've been designing software for over a decade — across consumer, fintech,
          messaging, security and developer tools. Somewhere around year seven I got tired
          of throwing static frames over the wall and started learning to ship them
          myself. That changed the work.
        </p>
        <p>
          Today I call myself a <Annotation className="text-3xl">Design Builder</Annotation>.
          It means I design and build the same thing — usually in the same week. AI tools
          shrunk the distance between "I have an idea" and "the team is using it" to
          almost nothing, and that's where I want to live.
        </p>
        <p>
          Outside work I write at length about design and software, take long walks
          without a phone, and keep a running list of tiny side projects nobody asked for.
        </p>
      </div>

      {/* Timeline */}
      <h2 className="mt-20 font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-soft">
        Timeline
      </h2>
      <ol className="mt-6 space-y-5 border-l border-border pl-6">
        {timeline.map((t) => (
          <li key={t.year} className="relative">
            <span className="absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-marker" />
            <p className="font-hand text-xl text-marker">{t.year}</p>
            <p className="mt-1 text-ink">{t.what}</p>
          </li>
        ))}
      </ol>

      {/* Tools */}
      <h2 className="mt-20 font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-soft">
        Tools I reach for
      </h2>
      <ul className="mt-5 flex flex-wrap gap-2">
        {tools.map((t) => (
          <li
            key={t}
            className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-ink"
          >
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}
