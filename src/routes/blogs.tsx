import { createFileRoute } from "@tanstack/react-router";
import { blogPosts } from "@/data/portfolio";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — Akhil Krishnan" },
      {
        name: "description",
        content:
          "Writing on design systems, AI-first workflows and shipping product as a designer.",
      },
      { property: "og:title", content: "Blogs — Akhil Krishnan" },
      {
        property: "og:description",
        content: "Notes on design, systems, and shipping.",
      },
    ],
  }),
  component: Blogs,
});

function Blogs() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-12">
      <p className="font-hand text-2xl text-marker">/blogs</p>
      <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
        Notes from the studio.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-ink-soft">
        Long-form thinking on design systems, AI-first workflows, and what it means to
        ship as a designer.
      </p>

      <ul className="mt-14 divide-y divide-border border-y border-border">
        {blogPosts.map((post) => (
          <li key={post.slug} className="group">
            <a
              href="#"
              className="flex flex-col gap-2 py-7 transition group-hover:bg-accent/40 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="w-32 shrink-0 text-sm text-ink-soft">{post.date}</span>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink underline-offset-4 group-hover:underline">
                  {post.title}
                </h2>
                <p className="mt-2 text-ink-soft">{post.excerpt}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-ink-soft/70">
                  {post.readTime} read
                </p>
              </div>
              <span className="text-ink-soft transition group-hover:translate-x-1">→</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
