import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import Head from "../../components/head"

import portfolioStyles from "../portfolio.module.scss"
import '../style.scss'

const Digital = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDigital {
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

  return (
    <Layout>
      <Head title="Digital" />
      <h1>Digital</h1>
      <ul className={portfolioStyles.wrapper}>
        {data.allContentfulDigital.edges.map(edge => {
          const { slug, title, image } = edge.node
          return (
            <div className={portfolioStyles.card}>
              <Link
                to={`/digital/${slug}`}
                className={portfolioStyles.link}
              >
                <h3>{title}</h3>
                <div class={portfolioStyles.imageContainer}>
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

export default Digital
