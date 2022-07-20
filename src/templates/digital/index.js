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
    contentfulDigital(slug: { eq: $slug }) {
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
  }
`
const Digital = ({ pageContext, data }) => {
  const previousDigital = pageContext.previous && {
    url: `/digital/${pageContext.previous.slug}`,
  }

  const nextDigital = pageContext.next && {
    url: `/digital/${pageContext.next.slug}`,
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
  const { title, subtitle, image, body } = data.contentfulDigital
  return (
    <div>
      <Head title={title} />
      <div className={portfolioStyles.container}>
        <ExitContainer exitLink="/digital" />
        <h2>{title}</h2>
        <div className={portfolioStyles.sliderContainer}>
          <div className={portfolioStyles.imageContainer}>
            <Image
              image={image}
              imageStyle="portrait"
            />
          </div>
          <div>
            {previousDigital && (
              <PreviousPageLink prevUrl={previousDigital.url} />
            )}
          </div>
          <div>{nextDigital && <NextPageLink nextUrl={nextDigital.url} />}</div>
        </div>
        <h4>{subtitle}</h4>
        {documentToReactComponents(body.json, options)}
      </div>
    </div>
  )
}

export default Digital
