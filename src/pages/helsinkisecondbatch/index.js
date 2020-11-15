import React from "react"
import Layout from "../../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

import Head from "../../components/head"

import portfolioStyles from "../portfolio.module.scss"
import stylesVertical from "../stylesVertical.module.scss"
import '../style.scss'

const HelsinkiSecondBatch = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHelsinkiSecondBatchHeader {
        title
        description {
          json
        }
      }
      allContentfulHelsinkiSecondBatch(
        sort: { fields: createdAt, order: ASC }
      ) {
        edges {
          node {
            title
            slug
            image {
              fluid(maxWidth: 930){
                src
              }
            } 
          }
        }
      }
    }
  `)
  const { title, description } = data.contentfulHelsinkiSecondBatchHeader
  return (
    <Layout>
      <Head title="helsinki second batch" />
      <h1>{title}</h1>
      {documentToReactComponents(
        description.json
      )}
      <ul className={portfolioStyles.wrapper}>
        {data.allContentfulHelsinkiSecondBatch.edges.map(edge => {
          const { slug, title, image } = edge.node
          return (
            <div className={portfolioStyles.card}>
              <Link
                to={`/helsinkisecondbatch/${slug}`}
                className={portfolioStyles.link}
              >
                <h3>{title}</h3>
                <div class={stylesVertical.imageContainer}>
                <Img
                  fluid={image.fluid} 
                  src={image.fluid.src}
                  alt={title}
                />
                </div>
              </Link>
            </div>
          )
        })}
      </ul>
    </Layout>
  )
}

export default HelsinkiSecondBatch
