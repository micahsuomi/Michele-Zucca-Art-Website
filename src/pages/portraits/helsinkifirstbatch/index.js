import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PageTemplate from "../../../components/pageTemplate"

import "../../style.scss"

const HelsinkiFirstBatch = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHelsinkiFirstBatchHeader {
        title
        body {
          json
        }
      }
      allContentfulHelsinkiFirstBatch {
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
  const { title, body } = data.contentfulHelsinkiFirstBatchHeader
  return (
    <PageTemplate
      headTitle="Helsinki first batch"
      title={title}
      description={body}
      contentTypeEdges={data.allContentfulHelsinkiFirstBatch.edges}
      linkUrl="/portraits/helsinkifirstbatch"
      styles="vertical"
    />
  )
}

export default HelsinkiFirstBatch
