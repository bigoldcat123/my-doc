import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import nav from './navbar.mts'
import sidebar from './sidebar.mts'
import outline from './outline.mts'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dale Lowe",
  description: "A VitePress Site2",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: 'https://img95.699pic.com/photo/50046/5562.jpg_wh300.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav,
    //@ts-ignore
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bigoldcat123' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Dale Lowe'
    },
    editLink: {
      pattern: 'https://github.com/bigoldcat123/my-doc/edit/main/docs/:path'
    }
  },

  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHome\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/CustomHome.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
