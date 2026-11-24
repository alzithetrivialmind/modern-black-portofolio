import { createFileRoute, Link } from "@tanstack/react-router";
import { EmailReveal } from "@/components/site/EmailReveal";
import { education, experience } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alzi" },
      {
        name: "description",
        content:
          "Alzi is a full-stack maker, ERP consultant and IT manager in Batam, Indonesia. Bio, experience and education.",
      },
      { property: "og:title", content: "About — Alzi" },
      {
        property: "og:description",
        content: "Bio, experience and education of a full-stack maker and ERP consultant.",
      },
    ],
  }),
  component: About,
});

const heading =
  "mt-20 font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-soft";

function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-12">
      <p className="font-hand text-2xl text-marker">/about</p>
      <div className="mt-2 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Utility over
          <br />
          everything.
        </h1>
        <img
          src="/profile.webp"
          alt="Alzi taking a mirror selfie"
          width={176}
          height={176}
          className="h-44 w-44 shrink-0 rounded-3xl object-cover"
        />
      </div>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink">
        <p>
          I'm a tech entrepreneur and full-stack maker with over 5 years in IT. At PT Palma Progress
          Shipyard I manage IT support, networks and security, lead the ERPNext implementation, and
          write industrial software, including an app that reads load cells live during tugboat
          bollard pull tests.
        </p>
        <p>
          I also direct <span className="font-semibold">Digisentral Solusi</span>, delivering
          networks, automation and tailored software for clients, and I build my own products. I
          took SnapCuller, a photo culler for photographers, from MVP to launch on Gumroad.
        </p>
        <p>
          I use AI to build, review and integrate faster rather than writing every line from
          scratch. My marketing master's shapes the rest: I use game theory and market psychology to
          design systems that fit how people behave, then document them so they last after handover.
        </p>
        <p>
          <Link
            to="/skills"
            className="underline decoration-marker decoration-2 underline-offset-4 hover:text-ink-soft"
          >
            See what I can take on
          </Link>{" "}
          or{" "}
          <EmailReveal
            label="send me an email"
            className="underline decoration-marker decoration-2 underline-offset-4 hover:text-ink-soft"
          />
          .
        </p>
      </div>

      <h2 className={heading}>Experience</h2>
      <ol className="mt-6 space-y-10 border-l border-border pl-6">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span className="absolute -left-[28px] top-2.5 h-2 w-2 rounded-full bg-marker" />
            <p className="font-hand text-xl text-marker">{job.period}</p>
            <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">{job.role}</h3>
            <a
              href={job.href}
              target="_blank"
              rel="noreferrer"
              className="text-ink-soft underline-offset-4 hover:underline"
            >
              {job.company} ↗
            </a>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink marker:text-ink-soft">
              {job.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h2 className={heading}>Education</h2>
      <ul className="mt-6 space-y-6">
        {education.map((e) => (
          <li key={e.degree} className="grid gap-1 sm:grid-cols-[9rem_1fr]">
            <span className="font-hand text-xl text-marker">{e.period}</span>
            <div>
              <p className="font-medium">{e.degree}</p>
              <p className="text-ink-soft">{e.school}</p>
              <p className="text-sm text-ink-soft">{e.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
