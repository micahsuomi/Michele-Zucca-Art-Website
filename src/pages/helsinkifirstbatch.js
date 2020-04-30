import React from 'react';
import Layout from '../components/Layout';
import {Link, graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import portfolioStyles from './portfolio.module.scss';
import Head from '../components/Head';


const HelsinkiFirstBatch = () => {
    const data = useStaticQuery(graphql`
    query {
        contentfulHelsinkiFirstBatchHeader {
            title
            body {
              json
            }
          }
      allContentfulHelsinkiFirstBatch {
        edges {
          node {
            title
            slug
            images {
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
            <Head title = "helsini first batch" />
            <h2>{data.contentfulHelsinkiFirstBatchHeader.title}</h2>
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
                        <img src={edge.node.images.file.url} alt={edge.node.images.description} className={portfolioStyles.img}/>
                        </Link>
                       

                        </div>


                    )
                })}
            </ul>

            </Layout>

    )

}

export default HelsinkiFirstBatch;