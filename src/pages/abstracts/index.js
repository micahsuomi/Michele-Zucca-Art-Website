import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PageTemplate from "../../components/pageTemplate"

import "../style.scss"

const AbstractsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbstractsHeader {
        title
        description {
          json
        }
      }
      allContentfulAbstracts(sort: { fields: createdAt, order: DESC }) {
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
  const { title, description } = data.contentfulAbstractsHeader

  return (
    <PageTemplate
      headTitle="Abstracts"
      title={title}
      description={description}
      contentTypeEdges={data.allContentfulAbstracts.edges}
      linkUrl="/abstracts"
    />
  )
}

export default AbstractsPage
