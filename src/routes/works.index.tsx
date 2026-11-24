import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/site/ProjectCard";
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

      <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} wide={i % 3 === 0} />
        ))}
      </div>
    </section>
  );
}
