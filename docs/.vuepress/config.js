import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'PySwip',
  description: 'Python-Prolog Interface',

  theme: defaultTheme({
    logo: '/images/pyswip_logo_sm_256colors.gif',

    navbar: ['/', '/get-started', '/community', '/change-log'],
  }),

  bundler: viteBundler(),
})
