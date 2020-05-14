import React from 'react';
import {Link, graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../../components/layout';
import Head from '../../components/head';
import portfolioStyles from '../portfolio.module.scss';


const AllegoriesPage = () => {
    const data = useStaticQuery(graphql`
    query {
      contentfulAllegoriesHeader {
        title
        description {
          json
        }
      }
        
        allContentfulAllegories (
          sort: {
            fields: datePublished,
            order: DESC} ) {
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
            <h1>{data.contentfulAllegoriesHeader.title}</h1>
            {documentToReactComponents(data.contentfulAllegoriesHeader.description.json)}
            <ul className={portfolioStyles.wrapper}>
              
                {data.allContentfulAllegories.edges.map((edge) => {
                 
                    return (
                      <div className={portfolioStyles.card} key={edge.node.slug}>
                        <Link to ={`/allegories/${edge.node.slug}`} className={portfolioStyles.link}>
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

export default AllegoriesPage;