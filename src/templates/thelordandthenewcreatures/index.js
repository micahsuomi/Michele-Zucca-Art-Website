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
    contentfulTheLordAndTheNewCreatures(slug: { eq: $slug }) {
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
const TheLordAndTheNewCreatures = ({ pageContext, data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className={portfolioStyles.image} />
      },
    },
  }
  const previousTheLordAndTheNewCreatures = pageContext.previous && {
    url: `/thelordandthenewcreatures/${pageContext.previous.slug}`,
  }

  const nextTheLordAndTheNewCreatures = pageContext.next && {
    url: `/thelordandthenewcreatures/${pageContext.next.slug}`,
  }

  const { title, image, body } = data.contentfulTheLordAndTheNewCreatures
  return (
    <>
      <Head title={title} />
      <div className={portfolioStyles.container}>
        <ExitContainer exitLink="/thelordandthenewcreatures" />
        <h2>{title}</h2>
        <div className={portfolioStyles.sliderContainer}>
          <div>
            {previousTheLordAndTheNewCreatures && (
              <PreviousPageLink
                prevUrl={previousTheLordAndTheNewCreatures.url}
              />
            )}
          </div>

          <img
            src={image.file.url}
            alt={image.description}
            className={portfolioStyles.image}
          />
          <div>
            {nextTheLordAndTheNewCreatures && (
              <NextPageLink nextUrl={nextTheLordAndTheNewCreatures.url} />
            )}
          </div>
        </div>
        {documentToReactComponents(body.json, options)}
      </div>
    </>
  )
}

export default TheLordAndTheNewCreatures
