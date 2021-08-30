import React, { useState } from "react"

import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Head from "../../components/head"

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
        console.log(node)
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className={portfolioStyles.image} />
      },
    },
  }
  
  const { title, subtitle, image, body } = data.contentfulHelsinkiFirstBatch
  return (
    <div>
      <Head title={title} />
      <div className={portfolioStyles.container}>
        <div className={portfolioStyles.exitContainer}>
          <Link to="/helsinkifirstbatch">
            <FontAwesomeIcon
              icon={faTimes}
              style={{
                color: "white",
                height: "1.5rem",
                width: "1.5rem",
                alignSelf: "flex-end",
              }}
            />
          </Link>
        </div>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <div className={portfolioStyles.sliderContainer}>
          <div>
            {previousHelsinkiFirstBatch && (
              <Link to={previousHelsinkiFirstBatch.url}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{ height: "5rem" }}
                />
              </Link>
            )}
          </div>
          <img
            src={image.file.url}
            alt={image.description}
            className={portfolioStyles.image}
          />
          <div>
            {nextHelsinkiFirstBatch && (
              <Link to={nextHelsinkiFirstBatch.url}>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            )}
          </div>
        </div>

        {documentToReactComponents(body.json, options)}
      </div>
    </div>
  )
}

export default HelsinkiFirstBatch
