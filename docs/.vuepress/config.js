import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default defineUserConfig({
  lang: 'en-US',

  title: 'PySwip',
  description: 'Python-Prolog Interface',

  theme: defaultTheme({
    logo: '/images/pyswip_logo_sm_256colors.gif',

    navbar: ['/', '/get-started', '/community', '/change-log'],

  }),

  plugins: [
      sitemapPlugin({
        host: 'https://pyswip.org',
      })
  ],

  bundler: viteBundler(),
})
