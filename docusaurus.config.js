// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
//const lightCodeTheme = require("prism-react-renderer/themes/nightOwl");
//const darkCodeTheme = require("prism-react-renderer/themes/palenight");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hyperfy Docs',
  tagline: "The web based metaverse available on every device",
  url: "https://docs.hyperfy.io", 
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hyperfy-io', // Usually your GitHub org/user name.
  projectName: 'hyperfy', // Usually your repo name.

  scripts: [                                                                                                                                                  
    {                                                                                                                                                         
      src: "https://plausible.io/js/plausible.js",                                                                                                            
      defer: true,                                                                                                                                            
      "data-domain": "docs.hyperfy.io",                                                                                                                       
    },                                                                                                                                                        
  ],

  staticDirectories: ['static'],

  //plugins: [["@cmfcmf/docusaurus-search-local", { indexBlog: false }]],                                                                                       
  plugins: [require.resolve('docusaurus-lunr-search')],
  // plugins: [                                                                                                                                               
  //   ["@cmfcmf/docusaurus-search-local", { indexBlog: false }],                                                                                             
  //   [                                                                                                                                                      
  //     "@docusaurus/plugin-content-docs",                                                                                                                   
  //     {                                                                                                                                                    
  //       id: "sdk",                                                                                                                                         
  //       path: "sdk",                                                                                                                                       
  //       routeBasePath: "sdk",                                                                                                                              
  //       sidebarPath: require.resolve("./sidebars/sdk-sidebar.js"),                                                                                         
  //       editUrl: "https://github.com/hyperfy-io/hyperfy-docs/tree/main/",                                                                                  
  //     },                                                                                                                                                   
  //   ],                                                                                                                                                     
  // ],


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
          routeBasePath: "/",
          sidebarPath: './sidebars.js',
	  sidebarCollapsed: false,
	  showLastUpdateTime: true,
	  showLastUpdateAuthor: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/hyperfy-io/hyperfy-docs/tree/main/",
        },
        blog: false,
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
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
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
            type: 'docSidebar',
            sidebarId: 'guides',
            position: 'left',
            label: 'Guides',
          },
          {
            href: 'https://twitter.com/hyperfy_io',
            label: 'Twitter',
            position: 'right',
          },
          {
            href: 'https://discord.gg/Wec4HKnfbP',
            label: 'Discord',
            position: 'right',
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
		href: 'https://etherscan.io/address/0xf53b18570db14c1e7dbc7dc74538c48d042f1332',
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
        theme: prismThemes.nightOwl,
        darkTheme: prismThemes.palenight,
      },
    }),
};

export default config;
