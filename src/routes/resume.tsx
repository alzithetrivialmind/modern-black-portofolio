import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { EmailReveal } from "@/components/site/EmailReveal";
import {
  capabilities,
  education,
  experience,
  profile,
  projectName,
  projects,
} from "@/data/portfolio";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Alzi" },
      {
        name: "description",
        content: "Resume of Alzi, full-stack maker, ERP consultant and IT manager in Batam.",
      },
      { property: "og:title", content: "Resume — Alzi" },
      { property: "og:description", content: "Experience, skills, products and education." },
    ],
  }),
  component: Resume,
});

const products = projects.filter((p) => ["snapculler", "securebatch-qr"].includes(p.slug));
const row = "grid gap-x-6 gap-y-1 sm:grid-cols-[11rem_1fr]";

function Resume() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-12">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-hand text-2xl text-marker print:hidden">/resume</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-ink-soft">{profile.headline}</p>
          <p className="text-ink-soft">
            {profile.location} ·{" "}
            <EmailReveal
              label="Show email"
              className="underline underline-offset-4 hover:text-ink print:hidden"
            />
          </p>
        </div>
        <a
          href={profile.resumePdf}
          download="Alzi-Resume.pdf"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 print:hidden"
        >
          Download PDF
        </a>
      </div>

      <div className="mt-12 space-y-12 text-ink">
        <Block title="Summary">
          <p>
            Tech entrepreneur, director and full-stack maker with over 5 years in IT. Experienced in
            leading a digital agency, building industrial and IoT software, customizing ERPNext, and
            launching independent products, backed by hands-on infrastructure and security work.
          </p>
        </Block>

        <Block title="Experience">
          <ol className="space-y-9">
            {experience.map((job) => (
              <li key={job.company} className={row}>
                <span className="font-hand text-xl leading-7 text-marker">{job.period}</span>
                <div>
                  <h3 className="font-semibold leading-snug">{job.role}</h3>
                  <p className="text-base text-ink-soft">{job.company}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-base marker:text-ink-soft">
                    {job.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="Products">
          <ul className="space-y-5">
            {products.map((p) => (
              <li key={p.slug} className={row}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-semibold underline-offset-4 hover:underline"
                >
                  {projectName(p)}
                </a>
                <p className="text-base">{p.blurb}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Skills">
          <dl className="space-y-4">
            {capabilities.map((c) => (
              <div key={c.title} className={row}>
                <dt className="text-base font-semibold leading-snug">{c.title}</dt>
                <dd className="text-base text-ink-soft">{c.skills.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block title="Education">
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.degree} className={row}>
                <span className="font-hand text-xl leading-7 text-marker">{e.period}</span>
                <div>
                  <p className="font-semibold leading-snug">{e.degree}</p>
                  <p className="text-base text-ink-soft">
                    {e.school} · {e.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Block>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
        {title}
      </h2>
      <div className="mt-4 text-lg leading-relaxed">{children}</div>
    </div>
  );
}
