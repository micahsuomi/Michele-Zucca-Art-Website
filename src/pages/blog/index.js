import React from 'react';
import {Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/layout';
import Head from '../../components/head'
import blogStyles from './styles.module.scss';


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
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return(
                        <li className={blogStyles.post} key={edge.node.slug}>
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
