// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hyperfy Docs',
  tagline: 'Hyperfy Documentation',
  favicon: 'favicon.ico',

  staticDirectories: ['static'],

  // Set the production url of your site here
  url: 'https://madjin.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/hyperfy-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'madjin', // Usually your GitHub org/user name.
  projectName: 'hyperfy-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
	  sidebarCollapsed: false,
	  showLastUpdateTime: true,
	  showLastUpdateAuthor: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/madjin/hyperfy-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/madjin/hyperfy-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
	sidebar: { hideable: true},
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/hyperfy.jpg',
      navbar: {
        title: 'Hyperfy Docs',
        logo: {
          alt: 'Hyperfy',
          src: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'developers',
            position: 'left',
            label: 'Developers',
          },
          {
            href: 'https://github.com/hyperfy-io/hyperfy-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Opensea',
		href: 'https://opensea.io/collection/hyperfy',
              },
              {
                label: 'Etherscan',
		href: 'https://opensea.io/collection/hyperfy',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Wec4HKnfbP',
              },
              {
                label: 'Twitter/X',
                href: 'https://twitter.com/hyperfy_io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Hyperfy.io',
                href: 'https://hyperfy.io',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hyperfy-io',
              },
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} Hyperfy. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
