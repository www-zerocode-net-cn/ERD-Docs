// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ERD Online',
  tagline: '开箱即用的数据库建模、产品版本管理软件.',
  url: 'https://gitee.com/MARTIN-88/erd-online',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zerocode',
  projectName: 'erd-docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://gitee.com/www-zerocode-net-cn/erd-docs/blob/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'hhttps://gitee.com/www-zerocode-net-cn/erd-docs/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      autoCollapseSidebarCategories: true,
      metadata: [{ name: 'keywords', content: 'erd, online, customization, documentation, blog' }],
      image: 'img/erd-online-full.png',
      navbar: {
        title: 'ERD Online',
        logo: {
          alt: 'ERD Online Logo',
          src: 'img/erd-online.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: '文档',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://www.zerocode.net.cn',
            label: '社区',
            position: 'right',
          },
          {
            href: 'https://gitee.com/MARTIN-88/erd-online',
            label: 'Gitee',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '开始使用',
                to: '/docs/getting-started',
              },
              {
                label: '高级应用',
                to: '/docs/advanced-usage',
              },
              // {
              //   label: '开发者',
              //   to: '/docs/development',
              // },
              {
                label: 'FAQ',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '社区论坛',
                href: 'https://www.zerocode.net.cn',
              },
              {
                label: '文档资料',
                href: 'https://gitee.com/www-zerocode-net-cn/erd-docs',
              },
            ],
          },
          {
            title: '零代社区',
            items: [
              {
                html: `
                    <img src="img/wechat-qr.jpg" alt="零代社区小程序" />
                `,
              },
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                html: `
                    <img src="img/concat-qr.jpg" alt="微信群" />
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://www.zerocode.net.cn">ERD Online</a> <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2021023488号-2</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'ABVX8ZWBDP',
        apiKey: '4c2684aaca381f6869f8f6659903128c',
        indexName: 'erdonline',
      },
    }),
};

module.exports = config;
