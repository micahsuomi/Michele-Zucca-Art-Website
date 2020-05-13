import React from 'react';
import {Link, graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../../components/layout';
import Head from '../../components/head';
import portfolioStyles from '../portfolio.module.scss';
import stylesVertical from '../stylesVertical.module.scss';


const HelsinkiFirstBatch = () => {
    const data = useStaticQuery(graphql`
    query {
        contentfulHelsinkiFirstBatchHeader {
            title
            body {
              json
            }
          }
      allContentfulHelsinkiFirstBatch(
        sort: {
          fields: createdAt,
          order: ASC} ) {
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

    return(
            <Layout>
            <Head title = "helsinki first batch" />
            <h1>{data.contentfulHelsinkiFirstBatchHeader.title}</h1>
            <p>{documentToReactComponents(data.contentfulHelsinkiFirstBatchHeader.body.json)}</p>
            <ul className={portfolioStyles.wrapper}>  
                {data.allContentfulHelsinkiFirstBatch.edges.map((edge) => {
                
                    return (
                      <div className={portfolioStyles.card}>
                        <Link to ={`/helsinkifirstbatch/${edge.node.slug}`} className={portfolioStyles.link}>
                        <h3>{edge.node.title}</h3>
                        <div class={stylesVertical.imageContainer}>
                        <img src={edge.node.image.file.url} alt={edge.node.image.description} className={stylesVertical.img} />
                        </div>
                        </Link>
                       
                        </div>


                    )
                })}
            </ul>

            </Layout>

    )

}

export default HelsinkiFirstBatch;