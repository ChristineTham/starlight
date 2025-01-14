// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: "https://tipitaka-md.github.io",
  integrations: [
    starlight({
      title: "Tipitaka",
      social: {
        github: "https://github.com/ChristineTham/starlight",
      },
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
	  defaultLocale: 'root',
      locales: {
        root: {
          label: 'Pāḷi',
          lang: 'pli',
        },
        'en': {
          label: 'English',
          lang: 'en',
        },
      },
    }),
  ],
});
