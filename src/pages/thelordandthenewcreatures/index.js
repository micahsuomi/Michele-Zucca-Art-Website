import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import Head from "../../components/head"

import portfolioStyles from "../portfolio.module.scss"
import stylesVertical from "../stylesVertical.module.scss"
import "../style.scss"

const TheLordAndTheNewCreatures = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulTheLordAndTheNewCreaturesHeader {
        title
        description {
          json
        }
      }
      allContentfulTheLordAndTheNewCreatures(
        sort: { fields: datePublished, order: DESC }
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
  const { title, description } = data.contentfulTheLordAndTheNewCreaturesHeader
  return (
    <Layout>
      <Head title="the lord and the new creatures" />
      <h1>{title}</h1>
      <p>{documentToReactComponents(description.json)}</p>
      <ul className={portfolioStyles.wrapper}>
        {data.allContentfulTheLordAndTheNewCreatures.edges.map(edge => {
          const { slug, title, image } = edge.node
          return (
            <div className={portfolioStyles.card}>
              <Link
                to={`/thelordandthenewcreatures/${slug}`}
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

export default TheLordAndTheNewCreatures
