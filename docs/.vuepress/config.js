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

    navbar: [
      '/',
      '/change-log',
      '/community',
      {
        "text": "Documentation",
        "link": "https://pyswip.readthedocs.io/en/stable/",
        "target": "_blank",
      },
      {
        "text": "Source",
        "link": "https://github.com/yuce/pyswip/",
        "target": "_blank",
      }
    ],

  }),

  plugins: [
      sitemapPlugin({
        hostname: 'https://pyswip.org',
      })
  ],

  bundler: viteBundler(),
})
