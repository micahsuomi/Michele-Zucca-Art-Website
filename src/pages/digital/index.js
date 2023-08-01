import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PageTemplate from "../../components/pageTemplate"

import "../style.scss"

const Digital = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDigital {
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

  return (
    <PageTemplate
      headTitle="Digital"
      title="Digital"
      description={null}
      contentTypeEdges={data.allContentfulDigital.edges}
      linkUrl="digital"
    />
  )
}

export default Digital
