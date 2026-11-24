import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { EmailReveal } from "@/components/site/EmailReveal";
import { ProjectImage, ProjectVideo } from "@/components/site/ProjectMedia";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Alzi` : "Case study — Alzi";
    const desc = p?.blurb ?? "Case study by Alzi";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl">Couldn't load this case study</h1>
      <p className="mt-2 text-ink-soft">{error.message}</p>
      <button
        onClick={reset}
        className="mt-6 rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground"
      >
        Try again
      </button>
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="font-hand text-3xl text-marker">hmm —</p>
      <h1 className="mt-2 font-display text-4xl">Case study not found</h1>
      <Link to="/works" className="mt-6 inline-block underline">
        Back to all works
      </Link>
    </div>
  ),
  component: WorkDetail,
});

function WorkDetail() {
  const { project } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-3xl px-6 pb-12">
      <Link to="/works" className="text-sm text-ink-soft hover:text-ink">
        ← All works
      </Link>

      <header className="mt-6">
        <p className="font-hand text-2xl text-marker">{project.year}</p>
        <h1 className="mt-2 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {project.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft">
          <span>
            <span className="text-ink">Role</span> · {project.role}
          </span>
          <span>
            <span className="text-ink">Tags</span> · {project.tags.join(", ")}
          </span>
        </div>
      </header>

      <figure className="mt-10">
        <div
          className={`relative aspect-[16/9] overflow-hidden rounded-3xl bg-gradient-to-br ${project.cover}`}
        >
          {project.video ? (
            <ProjectVideo project={project} />
          ) : (
            <ProjectImage project={project} eager />
          )}
        </div>
        {project.video && (
          <figcaption className="mt-3 text-sm text-ink-soft">
            {project.video.caption}{" "}
            <a
              href={`https://youtu.be/${project.video.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-ink"
            >
              Watch on YouTube ↗
            </a>
          </figcaption>
        )}
      </figure>

      <p className="mt-10 text-xl leading-relaxed text-ink">{project.blurb}</p>

      <Section title="The problem">
        <p>{project.problem}</p>
      </Section>

      <Section title="Process">
        <ol className="space-y-4">
          {project.process.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-hand text-2xl leading-none text-marker">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-ink">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Outcome">
        <p>{project.outcome}</p>
      </Section>

      {(project.link || project.github) && (
        <div className="mt-12 flex flex-wrap gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Visit live site ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-ink transition hover:bg-accent"
            >
              Source on GitHub ↗
            </a>
          )}
        </div>
      )}

      <div className="mt-16 rounded-3xl border border-border bg-card p-8 text-center">
        <p className="font-hand text-2xl text-marker">want to talk shop?</p>
        <p className="mt-2 font-display text-2xl">Let's build something next.</p>
        <EmailReveal
          label="Email me"
          className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
        />
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-soft">
        {title}
      </h2>
      <div className="mt-4 text-lg leading-relaxed text-ink">{children}</div>
    </section>
  );
}
