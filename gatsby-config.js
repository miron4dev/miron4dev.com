module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `miron4dev`,
        short_name: `miron4dev`,
        start_url: `/`,
        background_color: `#070707`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `static/logo.png`,
      },
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
