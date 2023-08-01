import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Head from "../../components/head"
import Layout from "../../components/layout"
import MainContent from "../../components/mainContent"

import blogStyles from "./styles.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            image {
              file {
                url
              }
            }
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <MainContent>
        <h1>Blog</h1>
        <div className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <div className={blogStyles.post} key={edge.node.slug}>
                <div className={blogStyles.postLeft}>
                  <Link to={`/blog/${edge.node.slug}`}>
                    <h3>{edge.node.title}</h3>
                    <p>{edge.node.publishedDate}</p>
                  </Link>
                </div>
                <div className={blogStyles.postRight}>
                  <img
                    src={edge.node.image.file.url}
                    alt="blog pic"
                    className={blogStyles.img}
                  />
                </div>
              </div>
            )
          })}
        </div>
        </MainContent>
      </Layout>
    </div>
  )
}

export default BlogPage
