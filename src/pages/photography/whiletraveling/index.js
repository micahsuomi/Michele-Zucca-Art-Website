import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PageTemplate from "../../../components/pageTemplate"

import "../../style.scss"

const WhileTravelingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulWhileTravelingHeader {
        title
        description {
          json
        }
      }
      allContentfulWhileTraveling {
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
  const { title, description } = data.contentfulWhileTravelingHeader
  return (
    <PageTemplate
      headTitle="While traveling"
      title={title}
      description={description}
      contentTypeEdges={data.allContentfulWhileTraveling.edges}
      linkUrl="/photography/whiletraveling"
    />
  )
}

export default WhileTravelingPage
