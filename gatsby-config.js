//this is a NodeJS file
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Michele Zucca',
    author: 'Michele Zucca',
    subtitle: 'Art, all About Art, Photography, Insights, Garbage, You Name It',
    siteUrl: `https://michelezucca-art.netlify.app/`,
    twitterHandle: '@michelezucca-arthata'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    
    `gatsby-transformer-pdf`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `Montserrat \:300,400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }

    }
  ]
}
