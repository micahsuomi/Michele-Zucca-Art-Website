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
        <div className={portfolioStyles.exitContainer}>
          <Link to="/abstracts">
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
            {previousAbstracts && (
              <Link to={previousAbstracts.url}>
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
            className={portfolioStyles.imagePhoto}
          />
          <div>
            {nextAbstracts && (
              <Link to={nextAbstracts.url}>
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

export default Abstracts
