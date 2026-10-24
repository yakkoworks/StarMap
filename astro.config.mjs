// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    site: 'https://yakkoworks.github.io',
    base: '/StarMap',
    integrations: [starlight({
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
                label: '🪐 StarMap ',
                collapsed: false,
                items: [
                    {
                        label: '🧊 3D Modeling',
                        collapsed: true,
                        items: [
                            // { autogenerate: { directory: '3dmodeling', collapsed: true} }
                            {label:"🌞レイ", slug:"3dmodeling/1-0" }, 
                            {label:"🔭☄️Major Arcana No.17 The Star", slug:"3dmodeling/majorarcanano17thestar" }, 
                        ],
                    },
                    {
                        label: '💻 Development ',
                        collapsed: true,
                        items: [
                            {label:"YakkoWorks StarMap", slug:"development/astrostarlight" },
                            // { autogenerate: { directory: 'development', collapsed: true } }
                        ],
                    },
                ],
            },
            {
                label: '📝 Annotations ',
                link: 'annotations'
            },
        ],
		}), markdoc()],
});