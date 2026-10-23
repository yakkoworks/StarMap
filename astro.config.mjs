// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://yakkoworks.github.io',
	base: '/StarMap',
	integrations: [
		starlight({
			title: 'YakkoWorks - StarMap',
			favicon: '/favicon.ico',
			// defaultLocale: 'ja',
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			pagination: false,
			logo: {
				src: './src/assets/dotlaboratory.png',
				replacesTitle: true,
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: '🪐    StarMap ',
					items: [
						{
							label: '🧊    3D Modeling',
							items: [{ autogenerate: { directory: '3dmodeling' } }],
						},
						{
							label: '💻    Development ',
							items: [{ autogenerate: { directory: 'development' } }],
						},
					],
				},
				{
					label: '📝    Annotations ',
					items: [{ autogenerate: { directory: 'annotations' } }],
				},
			],
		}),
	],
});
