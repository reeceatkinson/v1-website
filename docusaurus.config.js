// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hi I am Reece Atkinson!',
  tagline: 'I am a frontend developer that focuses on the users experience. ',
  url: 'https://reeceatkinson.github.io/me',
  baseUrl: '/me/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.PNG',
  organizationName: 'reeceatkinson', // Usually your GitHub org/user name.
  projectName: 'me', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/reeceatkinson/me',
        },
        blog: {
          showReadingTime: true,
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
      navbar: {
        logo: {
          alt: 'R',
          src: 'img/reece.PNG',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'My Snippets',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/contact', label: 'Contact Me', position: 'left'},
          {
            href: 'https://github.com/reeceatkinson',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/users/reeceatkinson/projects/9',
            label: 'My Roadmap',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Reece Atkinson.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
