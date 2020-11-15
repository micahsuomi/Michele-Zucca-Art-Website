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
const Digital = props => {
  const previousDigital = props.pageContext.previous
    ? {
        url: `/digital/${props.pageContext.previous.slug}`,
      }
    : ""

  const nextDigital = props.pageContext.next
    ? {
        url: `/digital/${props.pageContext.next.slug}`,
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
      <Head title={props.data.contentfulDigital.title} />
      <div className={portfolioStyles.container}>
        <div className={portfolioStyles.exitContainer}>
          <Link to="/digital">
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
        <h2>{props.data.contentfulDigital.title}</h2>
        <h4>{props.data.contentfulDigital.subtitle}</h4>
        <div className={portfolioStyles.sliderContainer}>
          <div>
            {previousDigital && (
              <Link to={previousDigital.url}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{ height: "5rem" }}
                />
              </Link>
            )}
          </div>
          <img
            src={props.data.contentfulDigital.image.file.url}
            alt={props.data.contentfulDigital.image.description}
            className={portfolioStyles.image}
          />
          <div>
            {nextDigital && (
              <Link to={nextDigital.url}>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            )}
          </div>
        </div>
        {documentToReactComponents(
          props.data.contentfulDigital.body.json,
          options
        )}
      </div>

      {/* </Layout> */}
    </div>
  )
}

export default Digital
