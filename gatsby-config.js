module.exports = {
  siteMetadata: {
    title: `Evgeny Mironenko | Software Engineer`,
    siteUrl: `https://miron4dev.com`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fira Mono`,
            variants: [`400`, `500`]
          },
          {
            family: `Fira Sans`,
            variants: [`300`, `400`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `miron4dev`,
        short_name: `miron4dev`,
        start_url: `/`,
        background_color: `#070707`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `static/logo.png`
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://miron4dev.com",
        sitemap: "https://miron4dev.com/sitemap.xml",
        policy: [{ userAgent: "*" }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138655376-1"
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`
  ]
};
