/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    'getting-started',
    {
      type: 'category',
      label: '安装部署使用',
      link: {
        type: 'generated-index',
        description: 'ERD Online安装部署使用.',
        slug: '/advanced-usage',
      },
      items: [
        'advanced-usage/installation',
        'advanced-usage/command-line-interface',
        'advanced-usage/themes',
        'advanced-usage/extensions',
        // 'advanced-usage/custom-apps',
      ],
    },
    'faq',
    // {
    //   type: 'category',
    //   label: 'Development',
    //   link: {
    //     type: 'generated-index',
    //     description: "Let's learn about how to contribute to the Spicetify community!",
    //     slug: '/development',
    //   },
    //   items: [
    //     'development/compiling',
    //     'development/customization',
    //     'development/spotify-cli-flags',
    //     'development/custom-apps',
    //     'development/js-modules',
    //     {
    //       type: 'category',
    //       label: 'Spicetify Creator',
    //       link: {
    //         type: 'generated-index',
    //         description: 'The easy way to create extensions and custom apps!',
    //         slug: '/development/spicetify-creator',
    //       },
    //       items: [
    //         'development/spicetify-creator/the-basics',
    //         'development/spicetify-creator/create-extensions',
    //         'development/spicetify-creator/create-custom-apps',
    //         'development/spicetify-creator/building-and-testing',
    //       ],
    //     },
    //   ],
    // },

  ],
};

module.exports = sidebars;
