import React from 'react';
import {Link, graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../../components/layout';
import Head from '../../components/head';
import portfolioStyles from '../portfolio.module.scss';


const WhileTravelingPage = () => {
    const data = useStaticQuery(graphql`
    query {
      contentfulWhileTravelingHeader {
        title
        description {
          json
        }
      }
        
        allContentfulWhileTraveling (
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
            <Head title = "while traveling" />
            <h1>{data.contentfulWhileTravelingHeader.title}</h1>
            {documentToReactComponents(data.contentfulWhileTravelingHeader.description.json)}
            <ul className={portfolioStyles.wrapper}>
              
                {data.allContentfulWhileTraveling.edges.map((edge) => {
                 
                    return (
                      <div className={portfolioStyles.card} key={edge.node.slug}>
                        <Link to ={`/whiletraveling/${edge.node.slug}`} className={portfolioStyles.link}>
                        <h3>{edge.node.title}</h3>
                        <img src={edge.node.image.file.url} alt={edge.node.image.description} className={portfolioStyles.img}/> 
                        </Link>
                       

                        </div>


                    )
                })}
            </ul>

            </Layout>

    )

}

export default WhileTravelingPage;