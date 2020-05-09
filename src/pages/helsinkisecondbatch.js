import React from 'react';
import Layout from '../components/layout';
import {Link, graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import portfolioStyles from './portfolio.module.scss';
import Head from '../components/head';


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
                        <Link to ={`/helsinkisecondbatch/${edge.node.slug}`} className={portfolioStyles.link}>
                        <h3>{edge.node.title}</h3>
                        <div class={portfolioStyles.imageContainer}>
                        <img src={edge.node.image.file.url} alt={edge.node.image.description} className={portfolioStyles.img} />
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