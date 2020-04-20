//generates the single blog post
//we will use the API generator onCreateNode, which allowes us to do something when the new markdown node is created

const path = require('path');

/*
 module.exports.onCreateNode = ({ node, actions }) => {
     const {createNodeField} = actions;

     if(node.internal.type === 'MarkdownRemark') {
         const slug = path.basename(node.fileAbsolutePath, '.md')

         console.log('@@@@@@@@@@@@@', slug)
         createNodeField({
             node,
             name: 'slug',
             value: slug
         })

     }
 }*/

 
 module.exports.createPages = async ( {graphql, actions }) => {
  const {createPage} = actions;
  //1. get path to template
  const abstractsTemplate = path.resolve('./src/templates/abstracts.js')
  const res = await graphql(`
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
  console.log('this is the data',res.data)
  res.data.allContentfulAbstracts.edges.forEach((edge) => {
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
}



module.exports.createPages = async ( {graphql, actions }) => {
    const {createPage} = actions;
    //1. get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
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


    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            //the component in the object is the path to the component
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                //slug in this case is like an id
                slug: edge.node.slug
            }
        })
    })
  }

    
    module.exports.createPages = async ( {graphql, actions }) => {
      const {createPage} = actions;
      //1. get path to template
      const digitalTemplate = path.resolve('./src/templates/digital.js')
      const res = await graphql(`
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
      console.log('this is the data',res.data)
      res.data.allContentfulDigital.edges.forEach((edge) => {
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
    }
  

    //2. get markdown data
    //3. create new pages
