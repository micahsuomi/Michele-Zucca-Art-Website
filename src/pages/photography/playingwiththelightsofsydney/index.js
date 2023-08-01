import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PageTemplate from "../../../components/pageTemplate"

import "../../style.scss"

const PlayingWithTheLightsOfSydneyPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPlayingWithTheLightOfSydneyHeader {
        pageTitle
        pageDescription {
          json
        }
      }
      allContentfulPlayingWithTheLightsOfSydney {
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
  const {
    pageTitle,
    pageDescription,
  } = data.contentfulPlayingWithTheLightOfSydneyHeader

  return (
    <PageTemplate
      headTitle="Playing with the lights of Sydney"
      title={pageTitle}
      description={pageDescription}
      contentTypeEdges={data.allContentfulPlayingWithTheLightsOfSydney.edges}
      linkUrl="/photography/playingwiththelightsofsydney"
    />
  )
}

export default PlayingWithTheLightsOfSydneyPage
