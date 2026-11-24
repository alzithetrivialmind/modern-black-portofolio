import { createFileRoute, Link } from "@tanstack/react-router";
import { capabilities, projectName, projects } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Alzi" },
      {
        name: "description",
        content:
          "What Alzi does: software products, ERPNext, IoT integration, infrastructure, cybersecurity, AI and IT leadership.",
      },
      { property: "og:title", content: "Skills — Alzi" },
      {
        property: "og:description",
        content:
          "Software products, ERPNext, IoT, infrastructure, cybersecurity and IT leadership.",
      },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-12">
      <p className="font-hand text-2xl text-marker">/skills</p>
      <h1 className="mt-2 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
        From the server room
        <br />
        <span className="text-ink-soft">to the product launch.</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-ink-soft">
        I work across software, ERP, hardware and infrastructure. Where the work is public or
        documented here, I've linked it.
      </p>

      <ul className="mt-14 border-t border-border">
        {capabilities.map((c) => {
          const proof = projects.filter((p) => c.proof.includes(p.slug));
          return (
            <li
              key={c.title}
              className="grid gap-4 border-b border-border py-9 md:grid-cols-[18rem_1fr] md:gap-10"
            >
              <h2 className="font-display text-2xl font-semibold tracking-tight">{c.title}</h2>
              <div>
                <p className="text-lg leading-relaxed">{c.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.skills.join(" · ")}</p>
                {proof.length > 0 && (
                  <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                    {proof.map((p) => (
                      <Link
                        key={p.slug}
                        to="/works/$slug"
                        params={{ slug: p.slug }}
                        className="text-ink underline decoration-marker decoration-2 underline-offset-4 hover:text-ink-soft"
                      >
                        {projectName(p)}
                      </Link>
                    ))}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
