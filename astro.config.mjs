// @ts-check
import { defineConfig } from "astro/config";
import plantuml from "astro-plantuml";
import mermaid from "astro-mermaid";
import d2 from "astro-d2";
import starlight from "@astrojs/starlight";
import starlightGitHubAlerts from "starlight-github-alerts";
import starlightSiteGraph from "starlight-site-graph";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  site: "https://christinetham.github.io/starlight",
  base: "/starlight",
  integrations: [
    plantuml(),
    mermaid(),
    d2(),
    starlight({
      title: "Starlight Template",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ChristineTham/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: [
        "./src/styles/custom.css",
        "@fontsource/noto-sans-mono/400.css",
        "@fontsource/noto-sans-mono/600.css",
        "@fontsource/noto-sans/400.css",
        "@fontsource/noto-sans/600.css",
      ],
      logo: {
        src: "./src/assets/rosely.svg",
      },
      plugins: [
        starlightGitHubAlerts(),
        starlightSiteGraph(),
        starlightImageZoom(),
      ],
      // defaultLocale: "root",
      // locales: {
      //   root: {
      //     label: "English",
      //     lang: "en",
      //   },
      //   pli: {
      //     label: "Pāḷi",
      //     lang: "pli",
      //   },
      // },
    }),
  ],
});
