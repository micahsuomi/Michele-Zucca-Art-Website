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
    contentfulWhileTraveling(slug: { eq: $slug }) {
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
const WhileTraveling = ({ pageContext, data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className={portfolioStyles.image} />
      },
    },
  }

  const previousWhileTraveling = pageContext.next && {
    url: `/whiletraveling/${pageContext.next.slug}`,
  }

  const nextWhileTraveling = pageContext.previous && {
    url: `/whiletraveling/${pageContext.previous.slug}`,
  }
  const { title, image, body } = data.contentfulWhileTraveling
  return (
    <>
      <Head title={title} />
      <div className={portfolioStyles.container}>
        <ExitContainer exitLink="/whiletraveling" />
        <h2>{title}</h2>
        <div className={portfolioStyles.sliderContainer}>
          <div className={portfolioStyles.imageContainer}>
            <Image
              image={image}
              prevImage={previousWhileTraveling}
              nextImage={nextWhileTraveling}
              prevImageUrl={
                previousWhileTraveling && previousWhileTraveling.url
              }
              nextImageUrl={nextWhileTraveling && nextWhileTraveling.url}
            />
          </div>
          <div>
            {previousWhileTraveling && (
              <PreviousPageLink prevUrl={previousWhileTraveling.url} />
            )}
          </div>
          <div>
            {nextWhileTraveling && (
              <NextPageLink nextUrl={nextWhileTraveling.url} />
            )}
          </div>
        </div>
        {documentToReactComponents(body.json, options)}
      </div>
    </>
  )
}

export default WhileTraveling
