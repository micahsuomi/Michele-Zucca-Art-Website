//generates the single blog post
//we will use the API generator onCreateNode, which allowes us to do something when the new markdown node is created

const path = require('path');

 
 module.exports.createPages = async ( {graphql, actions }) => {
  const {createPage} = actions;
  //1. get path to template
  const helsinkiFirstBatchTemplate = path.resolve('./src/templates/helsinkifirstbatch.js')
  const resHelsinkiFirstBatch = await graphql(`
  query {
    allContentfulHelsinkiFirstBatch {
        edges {
          node {
            slug  
            
            
          }
        }
      }
    }
  `)
  resHelsinkiFirstBatch.data.allContentfulHelsinkiFirstBatch.edges.forEach((edge) => {
      createPage({
          //the component in the object is the path to the component
          component: helsinkiFirstBatchTemplate,
          path: `/helsinkifirstbatch/${edge.node.slug}`,
          context: {
              //slug in this case is like an id
              slug: edge.node.slug
          }
      })
  })

  const abstractsTemplate = path.resolve('./src/templates/abstracts.js')
  const resAbstracts = await graphql(`
  query {
    allContentfulAbstracts {
        edges {
          node {
            slug  
            
            
          }
        }
      }
    }
  `)
  resAbstracts.data.allContentfulAbstracts.edges.forEach((edge) => {
      createPage({
          //the component in the object is the path to the component
          component: abstractsTemplate,
          path: `/abstracts/${edge.node.slug}`,
          context: {
              //slug in this case is like an id
              slug: edge.node.slug
          }
      })
  })

  

    const digitalTemplate = path.resolve('./src/templates/digital.js')
      const resDigital = await graphql(`
      query {
        allContentfulDigital {
            edges {
              node {
                slug  
                
                
              }
            }
          }
        }
      `)
      resDigital.data.allContentfulDigital.edges.forEach((edge) => {
          createPage({
              //the component in the object is the path to the component
              component: digitalTemplate,
              path: `/digital/${edge.node.slug}`,
              context: {
                  //slug in this case is like an id
                  slug: edge.node.slug
              }
          })
      })

      const playingWithTheLightsOfSydneyTemplate = path.resolve('./src/templates/playingwiththelightsofsydney.js')
      const resLights = await graphql(`
      query {
        allContentfulPlayingWithTheLightsOfSydney {
          edges {
            node {
              slug
            }
          }
        }
      }
      `)
      resLights.data.allContentfulPlayingWithTheLightsOfSydney.edges.forEach((edge) => {
          createPage({
              //the component in the object is the path to the component
              component: playingWithTheLightsOfSydneyTemplate,
              path: `/playingwiththelightsofsydney/${edge.node.slug}`,
              context: {
                  //slug in this case is like an id
                  slug: edge.node.slug
              }
          })
      })

      const blogTemplate = path.resolve('./src/templates/blog.js')
    const resBlog = await graphql(`
    query {
      allContentfulBlogPost {
          edges {
            node {
                slug
              
            }
          }
        }
      }
    `)


    resBlog.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            //the component in the object is the path to the component
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                //slug in this case is like an id
                slug: edge.node.slug,
                url: `/blog/${edge.node.slug}`
            }
        })
    })


}


    
