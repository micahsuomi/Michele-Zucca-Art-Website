import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import Head from "../../components/head"

import portfolioStyles from "../portfolio.module.scss"
import stylesVertical from "../stylesVertical.module.scss"
import "../style.scss"

const HelsinkiFirstBatch = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHelsinkiFirstBatchHeader {
        title
        body {
          json
        }
      }
      allContentfulHelsinkiFirstBatch(sort: { fields: createdAt, order: ASC }) {
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
  const { title, body } = data.contentfulHelsinkiFirstBatchHeader
  return (
    <Layout>
      <Head title="helsinki first batch" />
      <h1>{title}</h1>
      <p>{documentToReactComponents(body.json)}</p>
      <ul className={portfolioStyles.wrapper}>
        {data.allContentfulHelsinkiFirstBatch.edges.map(edge => {
          const { slug, title, image } = edge.node
          return (
            <div className={portfolioStyles.card}>
              <Link
                to={`/helsinkifirstbatch/${slug}`}
                className={portfolioStyles.link}
              >
                <h3>{title}</h3>
                <div class={stylesVertical.imageContainer}>
                  <Img fluid={image.fluid} src={image.fluid.src} alt={title} />
                </div>
              </Link>
            </div>
          )
        })}
      </ul>
    </Layout>
  )
}

export default HelsinkiFirstBatch
