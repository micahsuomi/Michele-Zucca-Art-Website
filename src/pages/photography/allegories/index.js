import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PageTemplate from "../../../components/pageTemplate"

import "../../style.scss"

const AllegoriesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAllegoriesHeader {
        title
        description {
          json
        }
      }

      allContentfulAllegories {
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
  const { title, description } = data.contentfulAllegoriesHeader
  return (
    <PageTemplate
      headTitle="Allegories"
      title={title}
      description={description}
      contentTypeEdges={data.allContentfulAllegories.edges}
      linkUrl="/photography/allegories"
    />
  )
}

export default AllegoriesPage
