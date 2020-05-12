//this is a NodeJS file
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Michele Zucca Art Website',
    author: 'Michele Zucca',
    description: 'My personal art website featuring traditional paintings, photography, digital art and a blog.',
    subtitle: 'Art, all About Art, Photography, Insights, Garbage, You Name It',
    keywords: ['michele zucca', 'art', 'photography', 'paintings', 'digital', 'blog', 'abstract art', 'modern', 'acrylics', 'oils'],
    siteUrl: `https://michelezucca-art.netlify.app/`,
    twitterHandle: '@michelezucca-arthata'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://michelezucca-art.netlify.app/',
        sitemap: 'https://michelezucca-art.netlify.app/sitemap.xml',
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    }
  ],

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
