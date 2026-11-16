# Mobile Engineering Patterns

A book-style docs site (Astro Starlight) comparing how Android, iOS, React Native, Flutter and KMP/CMP solve common mobile problems. Audience: engineers who know one mobile stack well. Planned spin-off: YouTube comparison videos, one per chapter.

## Commands
- `npm run dev` / `npm run build` / `npm run preview`
- Diagrams are inline ```d2 code blocks, rendered at build time by astro-d2 through WebAssembly (no d2 binary needed). Output lands in `public/d2/`. `shadow` and other D2 keywords can't be used as node keys.
- Diagram readability: the content column is ~720px, so keep each diagram's natural width under ~900px (check the `viewBox` in `public/d2/`). Prefer `grid-rows`/`grid-columns` over long horizontal chains; set `grid-rows` before `grid-columns` for row-major fill. Font size 16 for nodes, 18 for container labels. D2 renders one light theme; `custom.css` inverts it in dark mode, so give filled nodes an explicit dark `font-color`.

## Web code (CSS, components, layout, client JS)
- Before writing or changing any HTML/CSS/client-side JS (components in `src/components/`, `src/styles/custom.css`, page layout), use the `modern-web-guidance` skill: `search` for the capability, `retrieve` the matching guides, follow them.
- Browser support: Baseline Widely available features are fine without fallbacks; anything newer needs the fallback the guide prescribes.
- Rules already applied here that new code must keep:
  - Colour from Starlight tokens (`--sl-color-*`). Text uses the `-high` variants for contrast; base hues only for borders and tints. Tints via `color-mix(in oklab, ...)`.
  - Box boundaries are real `border`s, not shadows or background images, so they survive Forced Colors Mode. Any `filter` on diagrams is disabled under `@media (forced-colors: active)`.
  - Theme switching keys off Starlight's `:root[data-theme]`, not `prefers-color-scheme`, so the site toggle wins.
  - Collapsible content (exercise answers) uses native `<details>`/`<summary>` so it stays findable with Find in page.
  - Pages must work at phone width: wide tables and code scroll in their own container, never the page.

## Content rules
- Chapters live in `src/content/docs/<level>/`. Planned order is in `start-here/roadmap.md`; link a chapter there when it's published and add its level directory to the sidebar in `astro.config.mjs`.
- Chapter shape: problem -> why mobile makes it hard -> stack-neutral pattern -> per-stack implementation (`<Tabs syncKey="stack">` with labels Android, iOS, React Native, Flutter, KMP / CMP) -> trade-offs and scale -> translation table -> exercise -> sources.
- Head First devices: `BrainPower`, `NoDumbQuestions` (dt/dd pairs), `Exercise` (answer in `slot="answer"`), `<Aside type="caution" title="Watch it!">`. At least one D2 diagram per chapter.
- Baseline is November 2026 (see `start-here/how-to-read.mdx`). Mention older tech only where readers will still meet it.
- Every factual claim about a framework links to official docs, release notes or a primary engineering post, with the version it applies to. Verify versions before writing; don't rely on memory.
- Other stacks (.NET MAUI, Capacitor, Lynx) only as short sidebars.
- Toolkit pages live in `src/content/docs/toolkits/`: an overview plus one page per stack, all with the same sections (install, create and run, project layout, default stack, daily workflow, dependencies, release, practices, sources). They are reference pages, so the chapter shape and Head First devices don't apply, but the sourcing and voice rules do. When a chapter changes a stack's default library, update the toolkit tables too.
- Voice: second person, plain, concrete examples. Follow the `the-writing-whip` skill: sentence-case headings, no Wh-word headings, no em dashes, no filler transitions, straight quotes.
- The Orosz book txt in the root is copyrighted reference material: gitignored, never quote it at length.
