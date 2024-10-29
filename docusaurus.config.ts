import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Cherry Studio',
  tagline: '支持多模型服务的 Windows/macOS GPT 客户端',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cherry-ai.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kangfenmao', // Usually your GitHub org/user name.
  projectName: 'cherry-studio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Cherry Studio',
      logo: {
        alt: 'Cherry Studio Logo',
        src: 'img/logo.png'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档'
        },
        { to: '/blog', label: '博客', position: 'left' },
        {
          href: 'https://github.com/kangfenmao/cherry-studio',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速上手',
              to: '/docs/intro'
            }
          ]
        },
        {
          title: '社区',
          items: [
            {
              label: '神器集',
              href: 'https://hao.logosc.cn/p/3748'
            },
            {
              label: 'AIBase',
              href: 'https://top.aibase.com/tool/cherry-studio'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/kangfenmao'
            }
          ]
        },
        {
          title: '更多',
          items: [
            {
              label: 'Blog',
              to: '/blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kangfenmao/cherry-studio'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cherry Studio, Inc. <a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2021031071号-3</a>`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
}

export default config
