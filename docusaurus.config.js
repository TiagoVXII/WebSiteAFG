// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flas4hPT Test Website',
  tagline: 'Welcome!',
  favicon: 'img/favicon.ico',
  
  

  // Set the production url of your site here
  url: 'https://websiteafg.pages.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
           'https://github.com/TiagoVXII/flas4hptestzone/tree/main',
           showLastUpdateAuthor: true,
           showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TiagoVXII/websiteafg/tree/main',
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
      algolia: {
        // The application ID provided by Algolia
        appId: 'OPKIB1U20Z',
  
        // Public API key: it is safe to commit it
        apiKey: 'faf9c8b25e4d2b47059c438920162612',
  
        indexName: 'Flas4hPT Tests',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      announcementBar: {
        id: 'warning',
        content:
          'This website is used for Flas4hPT tests. It will be completely removed from Afeganistão Website hands in ROBLOX. ',
        backgroundColor: '#0047AB',
        textColor: '#FFFFFF',
        isCloseable: false,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Flas4hPT Test Website',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon-32x32.png',
        },
        
        items: [
          {
            type: 'doc',
            docId: 'Intro',
            position: 'left',
            label: 'Test Zone',
          },
          {
            href: 'https://github.com/TiagoVXII/flas4hptestzone',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Test Zone',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'N/A',
                href: 'N/A',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/5aqZzygJmn',
              },
              {
                label: 'N/A',
                href: 'N/A',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Test Zone',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/TiagoVXII/flas4hptestzone',
              },
            ],
          },
        ],
      
        copyright: `Copyright © ${new Date().getFullYear()} Flas4hPT Test Zone, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
    }),
};

module.exports = config;


