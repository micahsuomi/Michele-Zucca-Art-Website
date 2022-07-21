//this is a NodeJS file
const dotenv = require("dotenv").config()

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://michelezucca-art.netlify.app/",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  ENVIRONMENT_ID,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Michele Zucca",
    author: "Michele Zucca",
    description:
      "My personal art website featuring traditional paintings, photography, digital art and a blog.",
    subtitle: "Art, all About Art, Photography, Insights, Garbage, You Name It",
    keywords: [
      "michele zucca",
      "art",
      "photography",
      "paintings",
      "digital",
      "blog",
      "abstract art",
      "modern",
      "acrylics",
      "oils",
    ],
    siteUrl: `https://michelezucca-art.netlify.app/`,
    type: process.env.GATSBY_ACTIVE_ENV || "staging",
    twitterHandle: "@michelezucca-arthata",
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        environment: ENVIRONMENT_ID,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `Montserrat \:300,400,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    "gatsby-plugin-sharp",
    `gatsby-plugin-sitemap`,

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michele Zucca Art`,
        short_name: `Michele Zucca Art`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/imgs/logo-brightmike.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
