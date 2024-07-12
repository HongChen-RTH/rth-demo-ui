import { DefaultTheme, defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { components } from '../components'
import minimist from 'minimist'

const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/foo' }
]

const sidebar: DefaultTheme.Sidebar = {
  '/guide': [
    {
      text: '指南',
      items: [
        { text: '组件库介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/quickstart' },
      ]
    }
  ],
  '/components': [{
    items: [
      ...components
    ]
  }]
}
const argv = minimist(process.argv.slice(2))
const build = argv.build || false

export default defineConfig({
  title: 'rth-admin-ui',
  lang: 'cn-ZH',
  base: build ? '/rth-demo-ui/' : '/',
  head: [['link', { rel: 'icon', href: process.env.NODE_ENV === 'production' && !process.env.BUILD_VERCEL ? "/rth-ui/logo.png" : '/logo.png' }]],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'rth-admin-ui',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    nav,
    sidebar
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})
