import React from 'react';
import Layout from '../../components/layout';
import {Link, graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import portfolioStyles from '../portfolio.module.scss';
import Head from '../../components/head';


const AbstractsPage = () => {
    const data = useStaticQuery(graphql`
    query {
      contentfulAbstractsHeader {
        title
        description {
          json
        }
      }
        allContentfulAbstracts(
          sort: {
            fields: datePublished,
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
    console.log('abstract page',data)


    return(
            <Layout>
            <Head title = "Abstracts" />
            <h1>{data.contentfulAbstractsHeader.title}</h1>
            {documentToReactComponents(data.contentfulAbstractsHeader.description.json)}
            <ul className={portfolioStyles.wrapper}>
              
                {data.allContentfulAbstracts.edges.map((edge) => {
                
                    return (
                      <div className={portfolioStyles.card} key={edge.node.slug}>
                        <Link to ={`/abstracts/${edge.node.slug}`} className={portfolioStyles.link}>
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

export default AbstractsPage;