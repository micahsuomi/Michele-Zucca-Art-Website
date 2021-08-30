import React from "react"
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
  console.log(pageContext, data)
  const previousPlayingWithTheLightsOfSydney = pageContext.previous
    && {
        url: `/playingwiththelightsofsydney/${pageContext.previous.slug}`,
      }
    

  const nextPlayingWithTheLightsOfSydney = pageContext.next
    && {
        url: `/playingwiththelightsofsydney/${pageContext.next.slug}`,
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
  
  const { title, subtitle, image, body } = data.contentfulPlayingWithTheLightsOfSydney
  return (
    <div>
      <Head title={title} />
      <div className={portfolioStyles.container}>
        <div className={portfolioStyles.exitContainer}>
          <Link to="/playingwiththelightsofsydney">
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
            {previousPlayingWithTheLightsOfSydney && (
              <Link to={previousPlayingWithTheLightsOfSydney.url}>
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
            className={styles.imagePhoto}
          />
          <div>
            {nextPlayingWithTheLightsOfSydney && (
              <Link to={nextPlayingWithTheLightsOfSydney.url}>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            )}
          </div>
        </div>
        {documentToReactComponents(
          body.json,
          options
        )}
      </div>
    </div>
  )
}

export default PlayingWithTheLightsOfSydney
