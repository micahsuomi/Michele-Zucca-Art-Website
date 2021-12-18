import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Head from "../../components/head"
import PreviousPageLink from "../../components/previousPageLink"
import NextPageLink from "../../components/nextPageLink"
import ExitContainer from "../../components/exitContainer"

import portfolioStyles from "../portfolio.module.scss"
import styles from "./styles.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulAllegories(slug: { eq: $slug }) {
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
const Allegories = ({ pageContext, data }) => {
  const previousAllegories = pageContext.previous && {
    url: `/allegories/${pageContext.previous.slug}`,
  }

  const nextAllegories = pageContext.next && {
    url: `/allegories/${pageContext.next.slug}`,
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
  const { title, subtitle, image, body } = data.contentfulAllegories
  return (
    <div>
      <Head title={title} />
      <div className={portfolioStyles.container}>
        <ExitContainer exitLink="/allegories" />
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <div className={portfolioStyles.sliderContainer}>
          <div>
            {previousAllegories && (
              <PreviousPageLink prevUrl={previousAllegories.url} />
            )}
          </div>
          <img
            src={image.file.url}
            alt={image.description}
            className={styles.imagePhoto}
          />
          <div>
            {nextAllegories && <NextPageLink nextUrl={nextAllegories.url} />}
          </div>
        </div>
        {documentToReactComponents(body.json, options)}
      </div>
    </div>
  )
}

export default Allegories
