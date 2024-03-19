// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwl");
const darkCodeTheme = require("prism-react-renderer/themes/palenight");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hyperfy Docs",
  tagline: "The web based metaverse available on every device",
  url: "https://docs.hyperfy.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "hyperfy-io", // Usually your GitHub org/user name.
  projectName: "hyperfy", // Usually your repo name.

  scripts: [
    {
      src: "https://plausible.io/js/plausible.js",
      defer: true,
      "data-domain": "docs.hyperfy.io",
    },
  ],

  plugins: [
    ["@cmfcmf/docusaurus-search-local", { indexBlog: false }],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-2',
        async sidebarItemsGenerator({
          isCategoryIndex: defaultCategoryIndexMatcher, // The default matcher implementation, given below
          defaultSidebarItemsGenerator,
          ...args
        }) {
          return defaultSidebarItemsGenerator({
            isCategoryIndex() {
              // No doc will be automatically picked as category index
              return false;
            },
            ...args
          });
        },
      },
    ],
  ],
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

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Serve the docs at the site's root
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars/sidebar.js"),
          editUrl: "https://github.com/hyperfy-io/hyperfy-docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        // disableSwitch: true,
      },
      navbar: {
        title: "Hyperfy",
        logo: {
          alt: "Hyperfy Logo",
          src: "img/logo-light.svg",
          srcDark: "img/logo-dark.svg",
        },
        items: [
          // {
          //   to: "sdk/overview",
          //   label: "SDK",
          // },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
