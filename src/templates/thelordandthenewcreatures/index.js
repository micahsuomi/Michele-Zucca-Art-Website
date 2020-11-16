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
        console.log(node)
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className={portfolioStyles.image} />
      },
    },
  }
  const previousTheLordAndTheNewCreatures = pageContext.previous
    && {
        url: `/thelordandthenewcreatures/${pageContext.previous.slug}`,
      }

  const nextTheLordAndTheNewCreatures = pageContext.next
    && {
        url: `/thelordandthenewcreatures/${pageContext.next.slug}`,
      }
  
  const { title, image, body } = data.contentfulTheLordAndTheNewCreatures
  return (
    <div>
      <Head title={title} />
      <div className={portfolioStyles.container}>
        <div className={portfolioStyles.exitContainer}>
          <Link to="/thelordandthenewcreatures">
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
            {previousTheLordAndTheNewCreatures && (
              <Link to={previousTheLordAndTheNewCreatures.url}>
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
            {nextTheLordAndTheNewCreatures && (
              <Link to={nextTheLordAndTheNewCreatures.url}>
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

export default TheLordAndTheNewCreatures
