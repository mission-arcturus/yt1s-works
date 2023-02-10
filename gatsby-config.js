module.exports = {
  siteMetadata: {
    title: `YT1s.works`,
    description: `Youtube Video Downloader`,
    author: `yt`,
    siteUrl: `https://yt1s.works/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `de`, `es`, `fr`, `hi`, `id`, `it`, `ja`, `ko`, `my`, `ms`, `tl-PH`, `pt`, `ru`, `th`, `tr`, `vi`, `zh-cn`, `zh-tw`, `ar`, `bn`],
        defaultLanguage: `en`,
        redirect: false,
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`
      }
    },
    'gatsby-plugin-sitemap'
  ],
};
