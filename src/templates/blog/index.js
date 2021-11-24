import React from "react"
import Layout from "../../components/layout"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Head from "../../components/head"
import ShareButtons from "../../components/sharebuttons"

import blogStyles from "./styles.module.scss"
import styles from "./styles.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
    site {
      siteMetadata {
        siteUrl
        twitterHandle
      }
    }
  }
`

const Blog = ({ data, path }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node)
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className={blogStyles.img} />
      },
    },
  }
  const { title, publishedDate, body } = data.contentfulBlogPost
  return (
    <Layout>
      <Head title={title} />
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{publishedDate}</p>
        {documentToReactComponents(body.json, options)}

        <ShareButtons
          url={`${data.site.siteMetadata.siteUrl}${path}`}
          twitterHandle={`${data.site.siteMetadata.twitterHandle}${path}`}
          title={title}
        />
        <div className={styles.backToPostsContainer}>
          <Link to="/blog">
            <FontAwesomeIcon icon={faArrowLeft} className={styles.arrowIcon} />
            <span className={styles.backToPosts}>Back to Blog Posts</span>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
