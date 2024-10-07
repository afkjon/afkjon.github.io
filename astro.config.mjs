import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://afkjon.github.com',
	base: '/blog/',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'dark-plus',
			wrap: true
		}
	}
});