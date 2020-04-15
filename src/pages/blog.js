import React from 'react';
import Layout from '../components/Layout';
import {Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from '../components/Head';



const BlogPage = () => {
  const data = useStaticQuery(graphql `
  query {
    allContentfulBlogPost(
      sort: {
        fields: publishedDate,
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
  
        }
      }
    }
  }`)
  /*
  with markdown
    const data = useStaticQuery(graphql`
    
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              html
              excerpt
              fields {
                slug
              }
            }
          }
        }
      }
    `)*/
  

    return (
        <div>
            <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <p>Posts will show up here</p>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return(
                        <li className={blogStyles.post}>
                          <Link to={`/blog/${edge.node.slug}`}>
                            <h3>{edge.node.title}</h3>
                            <p>{edge.node.publishedDate}</p>
                            </Link>

                        </li>
                    )
                })}
            </ol>
            
            </Layout> 
        </div>
    )
}

export default BlogPage;
