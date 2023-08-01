import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PageTemplate from "../../../components/pageTemplate"
import "../../style.scss"

const PostNatal = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPostnatalHeader {
        title
        description {
          json
        }
      }
      allContentfulPostnatal {
        edges {
          node {
            title
            slug
            image {
              fluid(maxWidth: 930) {
                src
              }
            }
          }
        }
      }
    }
  `)
  const { title, description } = data.contentfulPostnatalHeader
  return (
    <PageTemplate
      headTitle="Postnatal"
      title={title}
      description={description}
      contentTypeEdges={data.allContentfulPostnatal.edges}
      linkUrl="/portraits/postnatal"
      styles="vertical"
    />
  )
}

export default PostNatal
