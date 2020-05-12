import React from 'react';
import Layout from '../../components/layout';
import {Link, graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../../components/head';
import portfolioStyles from '../portfolio.module.scss';
import stylesVertical from '../stylesVertical.module.scss';

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
    console.log(data)

    return(
            <Layout>
            <Head title = "helsinki second batch" />
            <h1>{data.contentfulHelsinkiSecondBatchHeader.title}</h1>
            {documentToReactComponents(data.contentfulHelsinkiSecondBatchHeader.description.json)}
            <ul className={portfolioStyles.wrapper}>  
                {data.allContentfulHelsinkiSecondBatch.edges.map((edge) => {
                    return (
                      <div className={portfolioStyles.card}>
                        <Link to ={`/helsinkisecondbatch/${edge.node.slug}`} className={portfolioStyles.link}>
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

export default HelsinkiSecondBatch;