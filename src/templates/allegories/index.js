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
<<<<<<< HEAD
const Allegories = ({ pageContext, data }) => {
  console.log(pageContext, data)
  const previousAllegories = pageContext.previous
    ? {
        url: `/allegories/${pageContext.previous.slug}`,
      }
    : ""

  const nextAllegories = pageContext.next
    ? {
        url: `/allegories/${pageContext.next.slug}`,
      }
    : ""
=======
const Allegories = props => {
  const previousAllegories = props.pageContext.previous && {
    url: `/allegories/${props.pageContext.previous.slug}`,
  }

  const nextAllegories = props.pageContext.next && {
    url: `/allegories/${props.pageContext.next.slug}`,
  }

>>>>>>> 3f259066f4f177e5e51568d57c76e58017a4309d
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
  const { title, subtitle, image, body } = data.contentfulAllegories
  return (
    <div>
      <Head title={title} />
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
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
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
            src={image.file.url}
            alt={image.description}
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
        {documentToReactComponents(body.json, options)}
      </div>
    </div>
  )
}

export default Allegories
