// Content links are written root-relative ("/core-patterns/navigation/") so they read the
// same in every chapter. On GitHub Pages the site is served under a base path, so this
// Sätteri hast plugin prefixes the base to root-relative hrefs in Markdown links and in
// raw <a> tags inside MDX.
import { defineHastPlugin } from 'satteri';

export default function baseLinks(base) {
	const prefix = base.replace(/\/$/, '');
	const fix = (href) =>
		prefix && typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && !href.startsWith(prefix + '/')
			? prefix + href
			: href;

	const visitJsx = {
		filter: ['a'],
		visit(node) {
			const attributes = node.attributes.map((attr) =>
				attr.type === 'mdxJsxAttribute' && attr.name === 'href' ? { ...attr, value: fix(attr.value) } : attr,
			);
			return { ...node, attributes };
		},
	};

	return defineHastPlugin({
		name: 'base-links',
		element: {
			filter: ['a'],
			visit(node, ctx) {
				const href = node.properties?.href;
				const fixed = fix(href);
				if (fixed !== href) ctx.setProperty(node, 'href', fixed);
			},
		},
		mdxJsxFlowElement: visitJsx,
		mdxJsxTextElement: visitJsx,
	});
}
