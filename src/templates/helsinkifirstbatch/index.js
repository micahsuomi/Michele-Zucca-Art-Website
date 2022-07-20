import React from "react"

import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Head from "../../components/head"
import Image from "../../components/image"
import PreviousPageLink from "../../components/previousPageLink"
import NextPageLink from "../../components/nextPageLink"
import ExitContainer from "../../components/exitContainer"

import portfolioStyles from "../portfolio.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulHelsinkiFirstBatch(slug: { eq: $slug }) {
      title
      subtitle
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
    contentfulHelsinkiFirstBatchHeader {
      title
      body {
        json
      }
    }
  }
`
const HelsinkiFirstBatch = ({ pageContext, data }) => {
  const previousHelsinkiFirstBatch = pageContext.previous && {
    url: `/helsinkifirstbatch/${pageContext.previous.slug}`,
  }

  const nextHelsinkiFirstBatch = pageContext.next && {
    url: `/helsinkifirstbatch/${pageContext.next.slug}`,
  }
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className={portfolioStyles.image} />
      },
    },
  }

  const { title, subtitle, image, body } = data.contentfulHelsinkiFirstBatch
  console.log(image)
  return (
    <>
      <Head title={title} />
      <div className={portfolioStyles.container}>
        <ExitContainer exitLink="/helsinkifirstbatch" />
        <h2>{title}</h2>
        <div className={portfolioStyles.sliderContainer}>
          <div className={portfolioStyles.imageContainer}>
            <Image
              image={image}
              imageStyle="portrait"
            />
          </div>
          <div>
            {previousHelsinkiFirstBatch && (
              <PreviousPageLink prevUrl={previousHelsinkiFirstBatch.url} />
            )}
          </div>
          <div>
            {nextHelsinkiFirstBatch && (
              <NextPageLink nextUrl={nextHelsinkiFirstBatch.url} />
            )}
          </div>
        </div>
        <h4>{subtitle}</h4>
        {documentToReactComponents(body.json, options)}
      </div>
    </>
  )
}

export default HelsinkiFirstBatch
