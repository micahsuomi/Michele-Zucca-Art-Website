import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Head from "../../components/head"
import Image from "../../components/image"
import PreviousPageLink from "../../components/previousPageLink"
import NextPageLink from "../../components/nextPageLink"
import ExitContainer from "../../components/exitContainer"

import portfolioStyles from "../portfolio.module.scss"
import styles from "./styles.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulPlayingWithTheLightsOfSydney(slug: { eq: $slug }) {
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
  }
`
const PlayingWithTheLightsOfSydney = ({ pageContext, data }) => {
  const previousPlayingWithTheLightsOfSydney = pageContext.previous && {
    url: `/playingwiththelightsofsydney/${pageContext.previous.slug}`,
  }

  const nextPlayingWithTheLightsOfSydney = pageContext.next && {
    url: `/playingwiththelightsofsydney/${pageContext.next.slug}`,
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

  const {
    title,
    subtitle,
    image,
    body,
  } = data.contentfulPlayingWithTheLightsOfSydney
  return (
    <>
      <Head title={title} />
      <div className={portfolioStyles.container}>
        <ExitContainer exitLink="/playingwiththelightsofsydney" />
        <h2>{title}</h2>
        <div className={portfolioStyles.sliderContainer}>
          <div className={portfolioStyles.imageContainer}>
            <Image
              image={image}
            />
          </div>
          <div>
            {previousPlayingWithTheLightsOfSydney && (
              <PreviousPageLink
                prevUrl={previousPlayingWithTheLightsOfSydney.url}
              />
            )}
          </div>
          <div>
            {nextPlayingWithTheLightsOfSydney && (
              <NextPageLink nextUrl={nextPlayingWithTheLightsOfSydney.url} />
            )}
          </div>
        </div>
        {documentToReactComponents(body.json, options)}
      </div>
    </>
  )
}

export default PlayingWithTheLightsOfSydney
