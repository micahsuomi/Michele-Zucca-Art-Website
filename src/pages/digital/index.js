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
              fluid(maxWidth: 300){
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
          return (
            <div className={portfolioStyles.card}>
              <Link
                to={`/digital/${edge.node.slug}`}
                className={portfolioStyles.link}
              >
                <h3>{edge.node.title}</h3>
                <div class={portfolioStyles.imageContainer}>
                <Img
                 fluid={edge.node.image.fluid} 
                 src={edge.node.image.fluid.src}
                 alt={edge.node.title}
                 objectFit="cover"
                 position="relative"
                 className="gatsby-image"
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
