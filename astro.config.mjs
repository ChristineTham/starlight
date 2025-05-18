// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rehypeMermaid from "rehype-mermaid";
import remarkPlantUML from "@akebifiky/remark-simple-plantuml";

// https://astro.build/config
export default defineConfig({
  site: "https://christinetham.github.io/starlight",
  base: "/starlight",
  integrations: [
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
        "@fontsource/noto-sans/400.css",
        "@fontsource/noto-sans/600.css",
      ],
      logo: {
        src: "./src/assets/rosely.svg",
      },
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
  markdown: {
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["plantuml", "mermaid", "math"],
    },
    remarkPlugins: [remarkPlantUML],
    rehypePlugins: [rehypeMermaid],
  },
});
