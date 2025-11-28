import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
// 这段代码在Node.js中运行 - 不要在此处使用客户端代码（如浏览器API、JSX等）

const config: Config = {
  title: '技术文档',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  // 请参阅https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // 关闭文档相关检查1
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  onBrokenAnchors: 'ignore',
  onDuplicateRoutes: 'ignore',

  // 关闭文档相关检查2
  markdown: {
    mermaid: false, // 如果有的话
    format: 'md',   // 使用普通 Markdown 而不是 MDX
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TSGU-OSC/Tech-Docusaurus',

          // 关闭文档相关检查3
          remarkPlugins: [], // 清空 remark 插件
          rehypePlugins: [], // 清空 rehype 插件
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TSGU-OSC/Tech-Docusaurus',
          // Useful options to enforce blogging best practices

          // 关闭文档相关检查4
          onInlineTags: 'ignore',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '技术文档',
      logo: {
        alt: 'TSGU-OSC Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Basic-Knowledge/Overview',
          position: 'left',
          label: '基础知识',
        },
        {
          type: 'doc',
          docId: 'Front-End/NodeJsMarkdown',
          position: 'left',
          label: '前端',
        },
        {
          type: 'doc',
          docId: 'Back-End/C/C',
          position: 'left',
          label: '后端',
        },
        {
          type: 'doc',
          docId: 'AI/Stable_Diffusion',
          position: 'left',
          label: 'AI',
        },
        {
          type: 'doc',
          docId: 'Operation-and-Maintenance/Shell', 
          position: 'left',
          label: '运维',
        },
        {
          type: 'doc',
          docId: 'Hacking/README',
          position: 'left',
          label: 'Hacking'
        },
        {
          type: 'doc',
          docId: 'Machine-Learning/README',
          position: 'left',
          label: '机器学习'
        },
        {
          type: 'doc',
          docId: 'Quantum-Computing/README',
          position: 'left',
          label: '量子计算'
        },
        {
          type: 'doc',
          docId: 'Other/How_to_Play_Minecraft_server',
          position: 'left',
          label: '其他',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/TSGU-OSC/Tech-Docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // 暂时不需要底部宣传字段
        
        // {
        //   title: 'Docs',
        //   items: [
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
