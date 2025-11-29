import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
// 这段代码在Node.js中运行 - 不要在此处使用客户端代码（如浏览器API、JSX等）

// 多平台部署
const getBaseUrl = () => {
  // Vercel 自动化部署
  if(process.env.VERCEL) {
    return 'https://osc.technicalDocs.cn';
  }
  // 自有存储服务器部署
  if(process.env.NODE_ENV === 'production') {
    return 'http://172.19.15.18:3000'
  }
  // 默认部署
  return 'http://localhost:3000'
}

const config: Config = {
  title: '技术文档',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  // 未来特性flags，请参阅https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, 
    // Improve compatibility with the upcoming Docusaurus v4
    // 提前准备网站以适应即将到来的 Docusaurus 4 版本。
  },

  // Set the production url of your site here
  // 在这里设置站点的生产url。
  url: getBaseUrl(),

  // Set the /<baseUrl>/ pathname under which your site is served
  // 设置你的站点所在的/<baseUrl>/路径名。
  // For GitHub pages deployment, it is often '/<projectName>/'
  // 对于GitHub页面部署，通常是‘/<projectName>/’。
  baseUrl: '/',

  // GitHub pages deployment config.
  // GitHub页面部署配置。
  // If you aren't using GitHub pages, you don't need these.
  // 如果你不使用GitHub页面，你不需要这些。
  organizationName: 'TSGU-OSC', 
  // Usually your GitHub org/user name.
  // 通常是你的GitHub组织名/用户名。
  projectName: 'Tech-Docusaurus', 
  // Usually your repo name.
  // 通常是你的仓库名。

  // 关闭文档相关检查1
  onBrokenLinks: 'ignore',
  // 尽量避免文档中出现空、不完整或失效链接，调试时可适当使用。
  // onBrokenMarkdownLinks: 'ignore',
  onBrokenAnchors: 'ignore',
  onDuplicateRoutes: 'ignore',

  // 关闭文档相关检查2
  markdown: {
    mermaid: false, // 如果有的话
    format: 'md',   // 使用普通 Markdown 而不是 MDX
  },

  // Even if you don't use internationalization, you can use this field to set
  // 即使不使用国际化，你也可以使用这个字段来设置有用的元数据，如HTML语言。
  // useful metadata like html lang. For example, if your site is Chinese, you
  // 例如，如果您的网站是中文的，
  // may want to replace "en" with "zh-Hans".
  // 您就可能需要将“en”替换为“zh-Hans”。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // 请将此处更改为您的仓库。
          // Remove this to remove the "edit this page" links.
          // 删除下方链接以用于移除“编辑此页”链接。
          editUrl:
            'https://github.com/TSGU-OSC/Tech-Docusaurus/tree/master/docs',

          // // 关闭文档相关检查3
          // remarkPlugins: [], // 清空 remark 插件
          // rehypePlugins: [], // 清空 rehype 插件
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // 请将此处修改为您的仓库。
          // Remove this to remove the "edit this page" links.
          // 删除下方链接以用于移除“编辑此页”链接。
          editUrl:
            'https://github.com/TSGU-OSC/Tech-Docusaurus/tree/master/docs',
          // Useful options to enforce blogging best practices
          // 有助于强制执行博客最佳实践的有用选项
          

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
    // Replace it with your social card.
    // 替换为您的专属社交卡片。
    // image: 'img/docusaurus-social-card.jpg',
    // 格式：image: 'img/docusaurus-social-card.jpg',

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
        // 搜索框
        {
          type: 'search',
          position: 'right', 
        },

        // 导航栏GitHub图标按钮     
        {
          href: 'https://github.com/TSGU-OSC/Tech-Docusaurus',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        
        // 侧边栏：排序 + 命名调整
        {
          type: 'doc',
          docId: 'Basic-Knowledge/1Overview',
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
        
        // 博客
        // {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    sidebar: {
      // 收起侧边栏按钮
      hideable: true,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docusaurus 官方文档',
              href: 'https://docusaurus.io/zh-CN/docs'
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'OpenHarmony 开源鸿蒙',
              href: 'https://docs.openharmony.cn/pages/v6.0/zh-cn/OpenHarmony-Overview_zh.md'
            },
            {
              label: 'Ascend 昇腾',
              href: 'https://www.hiascend.com/zh/document'
            },
            {
              label: 'RISC-V 开发者社区',
              href: 'https://ruyisdk.cn/'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '社团官网',
              href: 'https://osc.tsguas.cn',
            }
          ],
        },
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
