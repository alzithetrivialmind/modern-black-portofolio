import { Link } from "@tanstack/react-router";
import { ProjectImage } from "@/components/site/ProjectMedia";
import { projectName, type Project } from "@/data/portfolio";

export function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  return (
    <Link
      to="/works/$slug"
      params={{ slug: project.slug }}
      className={`group block ${wide ? "sm:col-span-2" : ""}`}
    >
      <div
        className={`relative overflow-hidden rounded-2xl sm:rounded-3xl ${project.cover} ${
          wide ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[16/10]"
        }`}
      >
        <ProjectImage project={project} />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink underline-offset-4 group-hover:underline">
          {projectName(project)}
        </h3>
        <span className="shrink-0 text-sm text-ink-soft">{project.year}</span>
      </div>
      <p className="mt-1.5 max-w-2xl text-ink-soft">{project.blurb}</p>
      <p className="mt-2 text-sm text-ink-soft">{project.tags.join(" · ")}</p>
    </Link>
  );
}
