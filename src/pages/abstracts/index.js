import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../../components/layout"
import portfolioStyles from "../portfolio.module.scss"
import Head from "../../components/head"

import './style.scss'

const AbstractsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbstractsHeader {
        title
        description {
          json
        }
      }
      allContentfulAbstracts {
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

  console.log(data)
  return (
    <Layout>
      <Head title="Abstracts" />
      <h1>{data.contentfulAbstractsHeader.title}</h1>
      {documentToReactComponents(
        data.contentfulAbstractsHeader.description.json
      )}
      <ul className={portfolioStyles.wrapper}> 
        {data.allContentfulAbstracts.edges.map(edge => {
          return (
            <div className={portfolioStyles.card} key={edge.node.slug}>
              <Link
                to={`/abstracts/${edge.node.slug}`}
                className={portfolioStyles.link}
              >
                <h3>{edge.node.title}</h3>
                <Img
                 fluid={edge.node.image.fluid} 
                 src={edge.node.image.fluid.src}
                 alt={edge.node.title}
                 objectFit="cover"
                 position="relative"
                 className="gatsby-image"
                />
              </Link>
            </div>
          )
        })}
      </ul> 
    </Layout>
  )
}

export default AbstractsPage
