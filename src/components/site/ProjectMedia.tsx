import { useState } from "react";
import { projectName, type Project } from "@/data/portfolio";

/** Fills its parent: photos and artwork edge to edge, app screens whole and centered. */
export function ProjectImage({ project, eager = false }: { project: Project; eager?: boolean }) {
  if (!project.image) return null;
  const img = {
    src: project.image.src,
    alt: project.image.alt,
    loading: eager ? ("eager" as const) : ("lazy" as const),
  };
  if (project.image.kind === "screen") {
    return (
      <div className="absolute inset-[6%] flex items-center justify-center">
        <img
          {...img}
          className="max-h-full max-w-full rounded-md shadow-[0_18px_40px_-16px_rgb(20_20_40_/0.45)] sm:rounded-xl"
        />
      </div>
    );
  }
  return (
    <img
      {...img}
      className={`absolute inset-0 h-full w-full object-cover ${project.image.position ?? ""}`}
    />
  );
}

/** Poster first; YouTube is only contacted after the visitor presses play. */
export function ProjectVideo({ project }: { project: Project }) {
  const [playing, setPlaying] = useState(false);
  if (!project.video) return null;

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${project.video.youtubeId}?autoplay=1&rel=0`}
        title={project.video.title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 h-full w-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${projectName(project)}`}
      className="group/play absolute inset-0 cursor-pointer"
    >
      <ProjectImage project={project} eager />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition group-hover/play:scale-105 group-hover/play:bg-black/85 sm:h-20 sm:w-20">
        <svg
          viewBox="0 0 24 24"
          className="ml-1 h-7 w-7 sm:h-9 sm:w-9"
          fill="currentColor"
          aria-hidden
        >
          <path d="M7 4.5v15l12-7.5z" />
        </svg>
      </span>
    </button>
  );
}
