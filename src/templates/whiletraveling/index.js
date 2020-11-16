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
        console.log(node)
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
    <div>
      <Head title={title} />
      <div className={portfolioStyles.container}>
        <div className={portfolioStyles.exitContainer}>
          <Link to="/whiletraveling">
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
        <div className={portfolioStyles.sliderContainer}>
          <div>
            {previousWhileTraveling && (
              <Link to={previousWhileTraveling.url}>
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
            className={styles.photoImage}
          />
          <div>
            {nextWhileTraveling && (
              <Link to={nextWhileTraveling.url}>
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

export default WhileTraveling
