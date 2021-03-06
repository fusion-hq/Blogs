const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Fusion",
    tagline: "Dinosaurs are cool",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: false,
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/blog/",
            routeBasePath: "/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "",
          logo: {
            alt: "My Site Logo",
            src: "img/fusion-logo-light.svg",
            srcDark: "img/fusion-logo.svg",
          },
          items: [
            // {
            //   type: 'doc',
            //   docId: 'intro',
            //   position: 'left',
            //   label: 'Tutorial',
            // },
            { to: "/blog", position: "left" },
            {
              href: "https://github.com/fusion-hq",
              label: "GitHub",
              position: "right",
            },
            {
              href: "https://discord.gg/9eqGTerh",
              label: "Discord",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tutorial",
                  to: "https://docs.fusionhq.co",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Discord",
                  href: "https://discord.gg/9eqGTerh",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/Fusion__HQ",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Docs",
                  to: "https://docs.fusionhq.co",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/fusion-hq",
                },
              ],
            },
          ],
          copyright: `Copyright ?? ${new Date().getFullYear()} Fusion`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
