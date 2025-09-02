# Starlight Template

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Deploy to GitHub Pages](https://github.com/ChristineTham/starlight/actions/workflows/deploy.yml/badge.svg)](https://github.com/ChristineTham/starlight/actions/workflows/deploy.yml)

Astro Starlight starter template for my projects.

Integrates the following plugins:

- [astro-mermaid](https://github.com/joesaby/astro-mermaid)
- [astro-plantuml](https://github.com/joesaby/astro-plantuml)
- [astro-d2](https://github.com/HiDeoo/astro-d2)
- [Starlight Github Alerts](https://github.com/HiDeoo/starlight-github-alerts)
- [Starlight Site Graph](https://github.com/Fevol/starlight-site-graph)
- [Starlight Image Zoom](https://github.com/HiDeoo/starlight-image-zoom)

Has the following customisations:

- Default font [Google Noto Sans](https://fonts.google.com/noto) via [Fontsource](https://fontsource.org/)
- Monospace font Google Noto Sans Mono
- Custom colours based on [Rosely](https://rosely.hellotham.com)
- Custom favicon

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`                 | Starts local dev server at `localhost:4321`      |
| `pnpm build`               | Build your production site to `./dist/`          |
| `pnpm preview`             | Preview your build locally, before deploying     |
| `pnpm refresh`             | Updates Starlight and dependencies               |
| `pnpm astro ...`           | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`     | Get help using the Astro CLI                     |
