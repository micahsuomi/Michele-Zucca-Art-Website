import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PageTemplate from "../../components/pageTemplate"
import "../style.scss"

const HelsinkiSecondBatch = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHelsinkiSecondBatchHeader {
        title
        description {
          json
        }
      }
      allContentfulHelsinkiSecondBatch {
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
  const { title, description } = data.contentfulHelsinkiSecondBatchHeader
  return (
    <PageTemplate
      headTitle="Helsinki second batch"
      title={title}
      description={description}
      contentTypeEdges={data.allContentfulHelsinkiSecondBatch.edges}
      linkUrl="/portraits/helsinkisecondbatch"
      styles="vertical"
    />
  )
}

export default HelsinkiSecondBatch
