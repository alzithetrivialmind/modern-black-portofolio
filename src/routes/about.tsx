import { createFileRoute } from "@tanstack/react-router";
import { Annotation } from "@/components/site/Annotation";
import { timeline, tools } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alzi" },
      {
        name: "description",
        content:
          "IT Developer & Consultant specializing in ERP systems, Cybersecurity, and full-stack development. Bio and timeline.",
      },
      { property: "og:title", content: "About — Alzi" },
      {
        property: "og:description",
        content: "Bio, timeline and toolbox of an IT Developer and Consultant.",
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
        IT Developer,
        <br />
        Strategist & Consultant.
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink">
        <p>
          I've been building and securing enterprise infrastructure for over 5 years — across shipyards,
          consultancies, and academic institutions. My work lives at the intersection of business automation
          and technical reliability.
        </p>
        <p>
          I specialize in <Annotation className="text-3xl">ERPNext & IT Strategy</Annotation>.
          I help organizations bridge the gap between fragmented legacy processes and modern, data-driven
          orchestration. Whether it's hardening a shipyard network or migrating multi-year financial data,
          I focus on solutions that are secure, scalable, and human-centric.
        </p>
        <p>
          Currently, I lead <span className="text-ink font-semibold">DigiSentral Solusi</span>, where I consult for businesses
          ready to level up their digital operations.
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
        Toolkit
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
