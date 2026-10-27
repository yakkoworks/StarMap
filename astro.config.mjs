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
        // social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        pagination: false,
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel:  6,
        },
        components: {
            Head: './src/components/Head.astro',
            PageTitle: './src/components/PageTitle.astro',
        },
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
                            { autogenerate: { directory: '3dmodeling', collapsed: true} }
                        ],
                    },
                    {
                        label: '💻 Development ',
                        collapsed: true,
                        items: [
                            // {label:"YakkoWorks StarMap", slug:"development/astrostarlight" },
                            { autogenerate: { directory: 'development', collapsed: true } }
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