import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AtlasWorld",
  description: "AtlasWorld Mini-Game server",

  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr'
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Team', link: '/team'}
    ],

    sidebar: [

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AtlasWorldMC/' },
      { icon: 'discord', link: ''}
    ],

    footer: {
      copyright: '2022-2025 AtlasWorld - All Rights Reserved.',
      message: 'Neither endorsed nor affiliated with <a href="https://minecraft.net/">Mojang</a> or <a href="https://microsoft.com/">Microsoft</a>.'
    }
  },
})
