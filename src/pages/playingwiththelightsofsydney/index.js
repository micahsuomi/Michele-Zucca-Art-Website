import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../../components/layout"
import Head from "../../components/head"
import portfolioStyles from "../portfolio.module.scss"

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
              file {
                url
              }
              description
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="digital" />
      <h1>{data.contentfulPlayingWithTheLightOfSydneyHeader.pageTitle}</h1>
      <p>
        {documentToReactComponents(
          data.contentfulPlayingWithTheLightOfSydneyHeader.pageDescription.json
        )}
      </p>

      <ul className={portfolioStyles.wrapper}>
        {data.allContentfulPlayingWithTheLightsOfSydney.edges.map(edge => {
          return (
            <div className={portfolioStyles.card} key={edge.node.slug}>
              <Link
                to={`/playingwiththelightsofsydney/${edge.node.slug}`}
                className={portfolioStyles.link}
              >
                <h3>{edge.node.title}</h3>
                <img
                  src={edge.node.image.file.url}
                  alt={edge.node.image.description}
                  className={portfolioStyles.img}
                />
              </Link>
            </div>
          )
        })}
      </ul>
    </Layout>
  )
}

export default PlayingWithTheLightsOfSydneyPage
