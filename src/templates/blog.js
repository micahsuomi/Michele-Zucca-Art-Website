import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/Head';
import blogStyles from './styles.module.scss';
import ShareButtons from '../components/sharebuttons';
import styles from './styles.module.scss';


export const query = graphql`
    query($slug: String!) {
      contentfulBlogPost(slug: {eq: $slug}) {
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

const Blog = (props) => {
  console.log(props)

    const options = {
      renderNode: {
        "embedded-asset-block": (node) => {
          console.log(node)
          const alt = node.data.target.fields.title['en-US'];
          const url = node.data.target.fields.file['en-US'].url;
          return <img alt={alt} src={url} className={blogStyles.img}/>

        }
      }
    }
    return (
        <Layout>
          <Head title={props.data.contentfulBlogPost.title}/>
          <div className={styles.container}>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p> 
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
             
            <ShareButtons 
                  url={`${props.data.site.siteMetadata.siteUrl}${props.path}`}
                  twitterHandle={`${props.data.site.siteMetadata.twitterHandle}${props.path}`}
                  title={props.data.contentfulBlogPost.title}
                  />
            <Link to="/blog">Back to Blog Posts</Link>
            </div>
            
        </Layout>
    )
}

export default Blog;
