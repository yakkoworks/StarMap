// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'YakkoWorks - StarMap',
			favicon: '/favicon.ico',
			// defaultLocale: 'ja',
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			logo: {
				src: './src/assets/dotlaboratory.png',
				replacesTitle: true,
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: '3D Modeling    🧊',
					items: [{ autogenerate: { directory: '3dmodeling' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
