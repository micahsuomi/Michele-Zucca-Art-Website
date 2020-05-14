//generates the single blog post
//we will use the API generator onCreateNode, which allowes us to do something when the new markdown node is created

const path = require('path');

 
 module.exports.createPages = async ( {graphql, actions }) => {
  const {createPage} = actions;
  //1. get path to template
  const helsinkiFirstBatchTemplate = path.resolve('./src/templates/helsinkifirstbatch/index.js')
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
  const helsinkiFirstBatch = resHelsinkiFirstBatch.data.allContentfulHelsinkiFirstBatch.edges;
  helsinkiFirstBatch.forEach((edge, index) => {
      createPage({
          //the component in the object is the path to the component
          component: helsinkiFirstBatchTemplate,
          path: `/helsinkifirstbatch/${edge.node.slug}`,
          context: {
              //slug in this case is like an id
              slug: edge.node.slug,
              index: index,
              previous: index === 0 ? null : helsinkiFirstBatch[index - 1].node,
              next: index === helsinkiFirstBatch.length -1 ? null : helsinkiFirstBatch[index + 1].node
          }
      })
  })
  const helsinkiSecondBatchTemplate = path.resolve('./src/templates/helsinkisecondbatch/index.js')
  const resHelsinkiSecondBatch = await graphql(`
  query {
    allContentfulHelsinkiSecondBatch {
        edges {
          node {
            slug  
            
            
          }
        }
      }
    }
  `)
  const helsinkiSecondBatch = resHelsinkiSecondBatch.data.allContentfulHelsinkiSecondBatch.edges
  helsinkiSecondBatch.forEach((edge, index) => {
      createPage({
          //the component in the object is the path to the component
          component: helsinkiSecondBatchTemplate,
          path: `/helsinkisecondbatch/${edge.node.slug}`,
          context: {
              //slug in this case is like an id
              slug: edge.node.slug,
              index: index,
              previous: index === 0 ? null : helsinkiSecondBatch[index - 1].node,
              next: index === helsinkiSecondBatch.length -1 ? null : helsinkiSecondBatch[index + 1].node
          }
      })
  })

  const theLordAndTheNewCreaturesTemplate = path.resolve('./src/templates/thelordandthenewcreatures/index.js')
  const resTheLordAndTheNewCreatures = await graphql(`
  query {
    allContentfulTheLordAndTheNewCreatures {
        edges {
          node {
            slug  
            
            
          }
        }
      }
    }
  `)
  
  const theLordAndNewCreatures = resTheLordAndTheNewCreatures.data.allContentfulTheLordAndTheNewCreatures.edges;
  theLordAndNewCreatures.forEach((edge, index) => {
      createPage({
          //the component in the object is the path to the component
          component: theLordAndTheNewCreaturesTemplate,
          path: `/thelordandthenewcreatures/${edge.node.slug}`,
          context: {
              //slug in this case is like an id
              slug: edge.node.slug,
              index: index,
              previous: index === 0 ? null : theLordAndNewCreatures[index - 1].node,
              next: index === theLordAndNewCreatures.length -1 ? null : theLordAndNewCreatures[index + 1].node
          }
      })
  })

  const abstractsTemplate = path.resolve('./src/templates/abstracts/index.js')
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
  const abstracts = resAbstracts.data.allContentfulAbstracts.edges
  abstracts.forEach((edge, index) => {
      createPage({
          //the component in the object is the path to the component
          component: abstractsTemplate,
          path: `/abstracts/${edge.node.slug}`,
          context: {
              //slug in this case is like an id
              slug: edge.node.slug,
              index: index,
              previous: index === 0 ? null : abstracts[index - 1].node,
              next: index === abstracts.length -1 ? null : abstracts[index + 1].node

          }
      })
  })

  

    const digitalTemplate = path.resolve('./src/templates/digital/index.js')
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
      const digital = resDigital.data.allContentfulDigital.edges
      digital.forEach((edge, index) => {
          createPage({
              //the component in the object is the path to the component
              component: digitalTemplate,
              path: `/digital/${edge.node.slug}`,
              context: {
                  //slug in this case is like an id
                  slug: edge.node.slug,
                  index: index,
                  previous: index === 0 ? null : digital[index - 1].node,
                  next: index === digital.length -1 ? null : digital[index + 1].node
              }
          })
      })

      const allegoriesTemplate = path.resolve('./src/templates/allegories/index.js')
      const resAllegories = await graphql(`
      query {
        allContentfulAllegories {
          edges {
            node {
              slug
            }
          }
        }
      }
      `)
      const allegories = resAllegories.data.allContentfulAllegories.edges;
      allegories.forEach((edge, index) => {
          createPage({
              //the component in the object is the path to the component
              component: allegoriesTemplate,
              path: `/allegories/${edge.node.slug}`,
              context: {
                  //slug in this case is like an id
                  slug: edge.node.slug,
                  index: index,
                  previous: index === 0 ? null : allegories[index - 1].node,
                  next: index === allegories.length -1 ? null : allegories[index + 1].node
              }
          })
      })


      const playingWithTheLightsOfSydneyTemplate = path.resolve('./src/templates/playingwiththelightsofsydney/index.js')
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
      const lightsSydney = resLights.data.allContentfulPlayingWithTheLightsOfSydney.edges;
      lightsSydney.forEach((edge, index) => {
          createPage({
              //the component in the object is the path to the component
              component: playingWithTheLightsOfSydneyTemplate,
              path: `/playingwiththelightsofsydney/${edge.node.slug}`,
              context: {
                  //slug in this case is like an id
                  slug: edge.node.slug,
                  index: index,
                  previous: index === 0 ? null : lightsSydney[index - 1].node,
                  next: index === lightsSydney.length -1 ? null : lightsSydney[index + 1].node
              }
          })
      })

      const whileTravelingTemplate = path.resolve('./src/templates/whiletraveling/index.js')
      const resWhileTraveling = await graphql(`
      query {
        allContentfulWhileTraveling {
          edges {
            node {
              slug
            }
          }
        }
      }
      `)
      const whileTraveling = resWhileTraveling.data.allContentfulWhileTraveling.edges;
      whileTraveling.forEach((edge, index) => {
          createPage({
              //the component in the object is the path to the component
              component: whileTravelingTemplate,
              path: `/whiletraveling/${edge.node.slug}`,
              context: {
                  //slug in this case is like an id
                  slug: edge.node.slug,
                  index: index,
                  previous: index === 0 ? null : whileTraveling[index - 1].node,
                  next: index === whileTraveling.length -1 ? null : whileTraveling[index + 1].node
              }
          })
      })

    const blogTemplate = path.resolve('./src/templates/blog/index.js')
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


    
