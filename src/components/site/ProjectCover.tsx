import { projectName, type Project } from "@/data/portfolio";

export function ProjectCover({ project, wide = false }: { project: Project; wide?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.cover} ${
        wide ? "aspect-[4/3] sm:aspect-[16/9]" : "aspect-[4/3]"
      } transition-transform duration-500 group-hover:-translate-y-1`}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`Screenshot of ${projectName(project)}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
      )}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" />
      <div className="absolute inset-x-6 bottom-5 flex items-end justify-between gap-4 text-white">
        <p className="font-display text-2xl font-semibold sm:text-3xl">{projectName(project)}</p>
        <span className="shrink-0 rounded-full bg-black/40 px-2.5 py-1 text-xs backdrop-blur">
          {project.year}
        </span>
      </div>
    </div>
  );
}
