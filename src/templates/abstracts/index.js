import React, { useState } from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Head from "../../components/head"
import Image from "../../components/image"
import PreviousPageLink from "../../components/previousPageLink"
import NextPageLink from "../../components/nextPageLink"
import ExitContainer from "../../components/exitContainer"
import { useBreakPoints } from "../../utils/useBreakPoints"

import portfolioStyles from "../portfolio.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulAbstracts(slug: { eq: $slug }) {
      title
      image {
        fluid(maxWidth: 930, quality: 100) {
          src
        }
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
const Abstracts = ({ pageContext, data }) => {
  console.log(useBreakPoints())
  const { isTabletOrMobile } = useBreakPoints()
  console.log(isTabletOrMobile)
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className={portfolioStyles.image} />
      },
    },
  }
  const previousAbstracts = pageContext.previous && {
    url: `/abstracts/${pageContext.previous.slug}`,
  }

  const nextAbstracts = pageContext.next && {
    url: `/abstracts/${pageContext.next.slug}`,
  }

  const { title, image, body } = data.contentfulAbstracts
  return (
    <div>
      <Head title={title} />
      <div className={portfolioStyles.container}>
        <ExitContainer exitLink="/abstracts" />
        <h2>{title}</h2>
        <div className={portfolioStyles.sliderContainer}>
          <div className={portfolioStyles.imageContainer}>
            <Image
              image={image}
              imageStyle="portrait"
            />
          </div>
          <div>
            {previousAbstracts && (
              <PreviousPageLink prevUrl={previousAbstracts.url} />
            )}
          </div>
          <div>
            {nextAbstracts && <NextPageLink nextUrl={nextAbstracts.url} />}
          </div>
        </div>
        <div>{documentToReactComponents(body.json, options)}</div>
      </div>
    </div>
  )
}

export default Abstracts
