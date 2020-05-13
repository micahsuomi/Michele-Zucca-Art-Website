import React from 'react';
import {Link, graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../../components/layout';
import Head from '../../components/head';
import portfolioStyles from '../portfolio.module.scss';
import stylesVertical from '../stylesVertical.module.scss';


const TheLordAndTheNewCreatures = () => {
    const data = useStaticQuery(graphql`
    query {
        contentfulTheLordAndTheNewCreaturesHeader {
            title
            description {
              json
            }
          }
          allContentfulTheLordAndTheNewCreatures(
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

    console.log(data.allContentfulTheLordAndTheNewCreatures.edges)
    return(
            <Layout>
            <Head title = "the lord and the new creatures" />
            <h1>{data.contentfulTheLordAndTheNewCreaturesHeader.title}</h1>
            <p>{documentToReactComponents(data.contentfulTheLordAndTheNewCreaturesHeader.description.json)}</p>
            <ul className={portfolioStyles.wrapper}>  
                {data.allContentfulTheLordAndTheNewCreatures.edges.map((edge) => {
                
                    return (
                      <div className={portfolioStyles.card}>
                        <Link to ={`/thelordandthenewcreatures/${edge.node.slug}`} className={portfolioStyles.link}>
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

export default TheLordAndTheNewCreatures;