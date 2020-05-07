import React from 'react';
import Layout from '../components/layout';
import {Link, graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import portfolioStyles from './portfolio.module.scss';
import Head from '../components/head';


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
      allPdf {
        edges {
          node {
        content
            
      }
      }
      }
    }
    `)
    console.log(data)

    return(
            <Layout>
            <Head title = "helsinki first batch" />
            <h1>{data.contentfulHelsinkiFirstBatchHeader.title}</h1>
            <p>{documentToReactComponents(data.contentfulHelsinkiFirstBatchHeader.body.json)}</p>
            <ul className={portfolioStyles.wrapper}>  
                {data.allContentfulHelsinkiFirstBatch.edges.map((edge) => {
                  /*let imagePath; 
                  for (const item of edge.node.body.json.content) {
                   if(item.nodeType === "embedded-asset-block") {
                    imagePath = item
                   }

                  }
                  console.log(imagePath.data.target)
                 const url = imagePath.data.target.fields.file['en-US'].url
                 const alt = imagePath.data.target.fields.title['en-US']*/
                    return (
                      <div className={portfolioStyles.card}>
                        <Link to ={`/helsinkifirstbatch/${edge.node.slug}`} className={portfolioStyles.link}>
                        <h3>{edge.node.title}</h3>
                        <img src={edge.node.image.file.url} alt={edge.node.image.description} className={portfolioStyles.img} 
                        height='2916' width='2000' />
                        </Link>
                       

                        </div>


                    )
                })}
            </ul>

            </Layout>

    )

}

export default HelsinkiFirstBatch;