module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    `gatsby-plugin-sass`,
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
