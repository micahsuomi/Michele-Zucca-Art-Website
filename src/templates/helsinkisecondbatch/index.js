import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Head from "../../components/head"
import PreviousPageLink from "../../components/previousPageLink"
import NextPageLink from "../../components/nextPageLink"
import ExitContainer from "../../components/exitContainer"

import portfolioStyles from "../portfolio.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulHelsinkiSecondBatch(slug: { eq: $slug }) {
      title
      image {
        file {
          url
        }
        description
      }
      body {
        json
      }
    }
    contentfulHelsinkiSecondBatchHeader {
      title
      description {
        json
      }
    }
  }
`
const HelsinkiFirstBatch = ({ pageContext, data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node)
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className={portfolioStyles.image} />
      },
    },
  }
  const previousHelsinkiSecondBatch = pageContext.previous && {
    url: `/helsinkisecondbatch/${pageContext.previous.slug}`,
  }

  const nextHelsinkiSecondBatch = pageContext.next && {
    url: `/helsinkisecondbatch/${pageContext.next.slug}`,
  }

  const { title, subtitle, image, body } = data.contentfulHelsinkiSecondBatch
  return (
    <>
      <Head title={title} />
      <div className={portfolioStyles.container}>
        <ExitContainer exitLink="/helsinkisecondbatch" />
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <div className={portfolioStyles.sliderContainer}>
          <div>
            {previousHelsinkiSecondBatch && (
              <PreviousPageLink prevUrl={previousHelsinkiSecondBatch.url} />
            )}
          </div>
          <img
            src={image.file.url}
            alt={image.description}
            className={portfolioStyles.image}
          />
          <div>
            {nextHelsinkiSecondBatch && (
              <NextPageLink nextUrl={nextHelsinkiSecondBatch.url} />
            )}
          </div>
        </div>
        {documentToReactComponents(body.json, options)}
      </div>
    </>
  )
}

export default HelsinkiFirstBatch
