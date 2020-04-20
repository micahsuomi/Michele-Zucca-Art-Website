import React from 'react';
import Layout from '../components/Layout';
import {Link, graphql, useStaticQuery } from 'gatsby';
import portfolioStyles from './portfolio.module.scss';
import Head from '../components/Head';


const PortfolioPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulDigital {
          edges {
            node {
              title
              slug
              body {
                json
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
        <div className={portfolioStyles.container}>
            <Layout>
            <Head title = "digital" />
            <h2>Digital</h2>
            <ul className={portfolioStyles.wrapper}>
              
                {data.allContentfulDigital.edges.map((edge) => {
                  let imagePath 
                  for (const item of edge.node.body.json.content) {
                   if(item.nodeType === "embedded-asset-block") {
                    imagePath = item
                   }

                  }
                  console.log(imagePath.data.target)
                 const url = imagePath.data.target.fields.file['en-US'].url
                 const alt = imagePath.data.target.fields.title['en-US']
                    return (
                      <div className={portfolioStyles.card}>
                        <Link to ={`/digital/${edge.node.slug}`} className={portfolioStyles.link}>
                        <h3>{edge.node.title}</h3>
                        <img src={url} alt={alt} className={portfolioStyles.img}/> 

                        </Link>
                       

                        </div>


                    )
                })}
            </ul>

            </Layout>

        </div>
    )

}

export default PortfolioPage;