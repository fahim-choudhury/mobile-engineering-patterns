// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import d2 from 'astro-d2';

export default defineConfig({
	integrations: [
		// D2 diagrams are written inline as ```d2 code blocks and rendered at build time.
		// useD2js runs D2 through WebAssembly, so no d2 binary is needed.
		d2({
			sketch: true,
			layout: 'elk',
			pad: 40,
			inline: true,
			// One light theme; custom.css inverts it when Starlight is in dark mode,
			// so diagrams follow the site's theme toggle instead of the OS setting.
			theme: { dark: false },
			experimental: { useD2js: true },
		}),
		starlight({
			title: 'Mobile Engineering Patterns',
			description:
				'How Android, iOS, React Native, Flutter and Kotlin Multiplatform solve the same mobile problems.',
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Start here', items: [{ autogenerate: { directory: 'start-here' } }] },
				{ label: 'Level 0: Foundations', items: [{ autogenerate: { directory: 'foundations' } }] },
			],
		}),
	],
});
