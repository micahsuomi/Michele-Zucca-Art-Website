import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PageTemplate from "../../components/pageTemplate"
import "../../style.scss"

const TheLordAndTheNewCreatures = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulTheLordAndTheNewCreaturesHeader {
        title
        description {
          json
        }
      }
      allContentfulTheLordAndTheNewCreatures {
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
  const { title, description } = data.contentfulTheLordAndTheNewCreaturesHeader
  return (
    <PageTemplate
      headTitle="The lord and the new creatures"
      title={title}
      description={description}
      contentTypeEdges={data.allContentfulTheLordAndTheNewCreatures.edges}
      linkUrl="/portraits/thelordandthenewcreatures"
      styles="vertical"
    />
  )
}

export default TheLordAndTheNewCreatures
