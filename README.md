# Mobile Engineering Patterns

A book on how Android, iOS, React Native, Flutter and Kotlin Multiplatform (KMP / Compose Multiplatform) solve the same mobile problems. Each chapter takes one problem, explains why mobile makes it hard, describes a stack-neutral pattern and then shows the implementation in every stack side by side.

Read it at **https://fahim-choudhury.github.io/mobile-engineering-patterns/**.

It is written for engineers who know one mobile stack well and need to read, review or design code in another. The content baseline is November 2026.

## Contents

- **Start here**: how to read the book and the chapter roadmap.
- **Toolkits**: install, project layout, default libraries, daily workflow and release steps for each stack.
- **Level 0, foundations**: runtime anatomy, declarative UI, app lifecycle and process death, concurrency.
- **Level 1, core app patterns**: state management, navigation and deep links, networking, persistence and offline-first, dependency injection, background work and push, localization and accessibility.
- **Level 2, shipping and operating**: releases, old app versions, feature flags, observability, performance and app size, testing, security and privacy, in-app purchases.
- **Level 3, architecture at scale and cross-platform**: cross-platform strategy, many teams on one app, native interop, server-driven UI, on-device AI.

The full chapter list is in [`src/content/docs/start-here/roadmap.md`](src/content/docs/start-here/roadmap.md).

## Run it locally

The site is built with [Astro Starlight](https://starlight.astro.build/). You need Node.js 22.

```sh
npm ci
npm run dev      # local server with hot reload
npm run build    # static site in dist/
npm run preview  # serve the built site
```

Diagrams are inline `d2` code blocks rendered at build time by [astro-d2](https://astro-d2.vercel.app/) through WebAssembly, so you don't need the `d2` binary.

## Project layout

```
src/content/docs/   chapters, one directory per level
src/components/     BrainPower, NoDumbQuestions and Exercise components
src/styles/         custom.css on top of Starlight's theme
plugins/            base-links.mjs, which prefixes the Pages base path to content links
public/d2/          rendered diagram SVGs
```

Write internal links root-relative, for example `/core-patterns/navigation/`. The build adds the `/mobile-engineering-patterns` base path for GitHub Pages.

## Deployment

`.github/workflows/deploy.yml` builds the site on every push and pull request. Pushes to `main` deploy to GitHub Pages.

## License

Copyright 2026 Fahim Masud Choudhury. Licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You can share and adapt the book, commercially too, as long as you credit the author and link to the license. The full text is in [`LICENSE`](LICENSE).
