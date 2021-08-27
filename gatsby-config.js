module.exports = {
  siteMetadata: {
    siteUrl: "https://profile.amayadori.cloud",
    title: "Amayadori Personal Profile",
    description: "Living in the Japanese countryside as a nomad front end dev. As nerdy as it can get.",
    image: "/images/frog.png",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Amayadori Personal Profile",
        short_name: "Amayadori Profile",
        start_url: "/",
        icon: "src/images/icon.png", 
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "works",
        path: `${__dirname}/works`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              sizeByPixelDensity: true,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },
  ],
};
