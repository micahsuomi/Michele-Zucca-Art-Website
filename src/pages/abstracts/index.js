import React from 'react';
import Layout from '../../components/layout';
import {Link, graphql, useStaticQuery } from 'gatsby';
import portfolioStyles from '../portfolio.module.scss';
import Head from '../../components/head';


const AbstractsPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulAbstracts(
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

    
  /*
    const test = data.allContentfulPortfolio.edges.map((edge) => edge.node.body.json.content[1])
    
    const image = {
      renderNode: {
        "embedded-asset-block": test.map((node) => {
          const alt = node.data.target.fields.title['en-US'];
          const url = node.data.target.fields.file['en-US'].url;
          return <img alt={alt} src={url} />
        })
      }
    }*/

    

    return(
            <Layout>
            <Head title = "digital" />
            <h1>Abstracts</h1>
            <ul className={portfolioStyles.wrapper}>
              
                {data.allContentfulAbstracts.edges.map((edge) => {
                  /*
                  let imagePath 
                  for (const item of edge.node.body.json.content) {
                   if(item.nodeType === "embedded-asset-block") {
                    imagePath = item
                   }

                  }
                  console.log(imagePath.data.target)
                 const url = imagePath.data.target.fields.file['en-US'].url
                 const alt = imagePath.data.target.fields.title['en-US']*/
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