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
const Allegories = props => {
  const previousAllegories = props.pageContext.previous
    ? {
        url: `/allegories/${props.pageContext.previous.slug}`,
      }
    : ""

  const nextAllegories = props.pageContext.next
    ? {
        url: `/allegories/${props.pageContext.next.slug}`,
      }
    : ""
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

  return (
    <div>
      <Head title={props.data.contentfulAllegories.title} />
      <div className={portfolioStyles.container}>
        <div className={portfolioStyles.exitContainer}>
          <Link to="/allegories">
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
        <h2>{props.data.contentfulAllegories.title}</h2>
        <h4>{props.data.contentfulAllegories.subtitle}</h4>
        <div className={portfolioStyles.sliderContainer}>
          <div>
            {previousAllegories && (
              <Link to={previousAllegories.url}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{ height: "5rem" }}
                />
              </Link>
            )}
          </div>
          <img
            src={props.data.contentfulAllegories.image.file.url}
            alt={props.data.contentfulAllegories.image.description}
            className={styles.imagePhoto}
          />
          <div>
            {nextAllegories && (
              <Link to={nextAllegories.url}>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            )}
          </div>
        </div>
        {documentToReactComponents(
          props.data.contentfulAllegories.body.json,
          options
        )}
      </div>
    </div>
  )
}

export default Allegories
