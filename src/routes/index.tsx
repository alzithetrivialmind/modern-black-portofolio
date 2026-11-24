import { createFileRoute, Link } from "@tanstack/react-router";
import { Annotation, Arrow } from "@/components/site/Annotation";
import { ProjectCard } from "@/components/site/ProjectCard";
import { capabilities, projects } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alzi — Full-stack maker, ERP consultant & IT manager" },
      {
        name: "description",
        content:
          "Alzi builds industrial software, ERPNext systems and independent products from Batam, Indonesia. Director of Digisentral Solusi and maker of SnapCuller.",
      },
      { property: "og:title", content: "Alzi — Full-stack maker, ERP consultant & IT manager" },
      {
        property: "og:description",
        content:
          "Industrial software, ERPNext systems and independent products. Director of Digisentral Solusi and maker of SnapCuller.",
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
      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-8 sm:pt-14">
        <div className="fade-up">
          <Annotation className="mb-5 inline-block -rotate-2">Hi, I'm Alzi ✦</Annotation>
          <h1 className="font-display text-[2.1rem] font-semibold leading-[1] tracking-tight text-ink sm:text-6xl lg:text-[84px]">
            I build the systems
            <br />
            <span className="text-ink-soft">a shipyard runs on,</span>
            <br />
            and ship my own products.
          </h1>

          <div className="relative">
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              I'm a full-stack maker, ERP consultant and IT manager in Batam, Indonesia. I connect
              software to real operations, from load cells and ERPNext to networks. I also direct{" "}
              <a
                href="https://digisentralsolusi.id/"
                target="_blank"
                rel="noreferrer"
                className="text-ink underline decoration-marker decoration-2 underline-offset-4"
              >
                Digisentral Solusi
              </a>{" "}
              and make{" "}
              <a
                href="https://www.snapculler.com"
                target="_blank"
                rel="noreferrer"
                className="text-ink underline decoration-marker decoration-2 underline-offset-4"
              >
                SnapCuller
              </a>
              .
            </p>

            {/* Margin note, only where there is room for it */}
            <div className="pointer-events-none absolute right-6 top-6 hidden rotate-3 lg:block">
              <Annotation className="block">
                over 5 years in IT,
                <br />
                most of it in a shipyard
              </Annotation>
              <Arrow className="ml-6 mt-1" rotate={30} />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-marker" />
            Available for new projects
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              See selected work →
            </Link>
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-ink transition hover:bg-accent"
            >
              What I can do
            </Link>
          </div>
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

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} wide={i === 0} />
          ))}
        </div>
      </section>

      {/* Capabilities preview */}
      <section className="mx-auto max-w-6xl px-6 pt-28">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            What I can take on
          </h2>
          <Link
            to="/skills"
            className="text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline"
          >
            See skills in detail →
          </Link>
        </div>
        <ul className="grid border-t border-border sm:grid-cols-2 sm:gap-x-12">
          {capabilities.map((c) => (
            <li key={c.title} className="border-b border-border py-6">
              <h3 className="font-display text-xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-1.5 text-ink-soft">{c.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
