module.exports = {
  trailingSlash: `always`,
  siteMetadata: {
    title: `YT1s.works`,
    description: `Youtube Video Downloader`,
    author: `yt`,
    siteUrl: `https://yt1s.works`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `de`, `es`, `fr`, `hi`, `id`, `it`, `ja`, `ko`, `my`, `ms`, `tl-ph`, `pt`, `ru`, `th`, `tr`, `vi`, `zh-cn`, `zh-tw`, `ar`, `bn`],
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `none`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yt1s`,
        short_name: `yt1s`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index/`, `/youtube-to-mp3/`, `/youtube-to-mp3/*`],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-257217301-1",
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/',
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        ErrorDocument: `
          ErrorDocument 401 /error_pages/401.html
          ErrorDocument 404 /error_pages/404.html
          ErrorDocument 500 /error_pages/500.html
        `,
        redirect: [
          'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
          {
            from: 'https://yt1s.works/en/',
            to: 'https://yt1s.works/',
          },
          {
            from: 'https://yt1s.works/en/youtube-to-mp4/',
            to: 'https://yt1s.works/',
          },
        ],
        custom: `
            # This is a custom rule!
            # This is a another custom rule!
        `,
      },
    },
  ],
};
