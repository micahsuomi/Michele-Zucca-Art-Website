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
    contentfulAbstracts(slug: { eq: $slug }) {
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
const Abstracts = ({ pageContext, data }) => {
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
          <div>
            {previousAbstracts && (
              <PreviousPageLink prevUrl={previousAbstracts.url} />
            )}
          </div>
          <img
            src={image.file.url}
            alt={image.description}
            className={portfolioStyles.imagePhoto}
          />
          <div>
            {nextAbstracts && <NextPageLink nextUrl={nextAbstracts.url} />}
          </div>
        </div>
        {documentToReactComponents(body.json, options)}
      </div>
    </div>
  )
}

export default Abstracts
