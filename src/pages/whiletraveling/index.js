import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import Head from "../../components/head"

import portfolioStyles from "../portfolio.module.scss"
import '../style.scss'

const WhileTravelingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulWhileTravelingHeader {
        title
        description {
          json
        }
      }

      allContentfulWhileTraveling(sort: { fields: createdAt, order: ASC }) {
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
  const { title, description } = data.contentfulWhileTravelingHeader  
  return (
    <Layout>
      <Head title="while traveling" />
      <h1>{title}</h1>
      {documentToReactComponents(
        description.json
      )}
      <ul className={portfolioStyles.wrapper}>
        {data.allContentfulWhileTraveling.edges.map(edge => {
          const { slug, title, image } = edge.node
          return (
            <div className={portfolioStyles.card} key={slug}>
              <Link
                to={`/whiletraveling/${slug}`}
                className={portfolioStyles.link}
              >
                <h3>{title}</h3>
                <Img
                  fluid={image.fluid} 
                  src={image.fluid.src}
                  alt={title}
                />
              </Link>
            </div>
          )
        })}
      </ul>
    </Layout>
  )
}

export default WhileTravelingPage
