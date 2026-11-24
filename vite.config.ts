// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// alzi.work is hosted on Netlify as a static site: every page is prerendered
// into dist/client, so no server runtime is needed.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: false,
      failOnError: true,
      // Skip files such as /resume.pdf and the duplicate /works/ route path.
      filter: ({ path }: { path: string }) =>
        path === "/" || !(path.includes(".") || path.endsWith("/")),
    },
  },
});
