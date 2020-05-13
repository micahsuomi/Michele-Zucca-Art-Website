import React from 'react';
import {Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/layout';
import Head from '../../components/head';
import portfolioStyles from '../portfolio.module.scss';


const Digital = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulDigital {
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
            <Head title = "Digital" />
            <h1>Digital</h1>
            <ul className={portfolioStyles.wrapper}>
              
                {data.allContentfulDigital.edges.map((edge) => {
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
                        <Link to ={`/digital/${edge.node.slug}`} className={portfolioStyles.link}>
                        <h3>{edge.node.title}</h3>
                        <div class={portfolioStyles.imageContainer}>
                        <img src={edge.node.image.file.url} alt={edge.node.image.description} className={portfolioStyles.img}/>
                        </div>
                        </Link>
                       

                        </div>


                    )
                })}
            </ul>

            </Layout>

    )

}

export default Digital;