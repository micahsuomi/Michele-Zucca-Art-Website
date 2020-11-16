import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import Head from "../../components/head"

import portfolioStyles from "../portfolio.module.scss"
import "../style.scss"

const PlayingWithTheLightsOfSydneyPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPlayingWithTheLightOfSydneyHeader {
        pageTitle
        pageDescription {
          json
        }
      }
      allContentfulPlayingWithTheLightsOfSydney(
        sort: { fields: createdAt, order: ASC }
      ) {
        edges {
          node {
            title
            slug
            image {
              fluid(maxWidth: 930) {
                src
              }
            }
          }
        }
      }
    }
  `)
  const {
    pageTitle,
    pageDescription,
  } = data.contentfulPlayingWithTheLightOfSydneyHeader
  return (
    <Layout>
      <Head title="digital" />
      <h1>{pageTitle}</h1>
      <p>{documentToReactComponents(pageDescription.json)}</p>

      <ul className={portfolioStyles.wrapper}>
        {data.allContentfulPlayingWithTheLightsOfSydney.edges.map(edge => {
          const { slug, title, image } = edge.node
          return (
            <div className={portfolioStyles.card} key={slug}>
              <Link
                to={`/playingwiththelightsofsydney/${slug}`}
                className={portfolioStyles.link}
              >
                <h3>{title}</h3>
                <Img fluid={image.fluid} src={image.fluid.src} alt={title} />
              </Link>
            </div>
          )
        })}
      </ul>
    </Layout>
  )
}

export default PlayingWithTheLightsOfSydneyPage
