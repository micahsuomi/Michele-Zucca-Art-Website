import React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../../components/head';
import portfolioStyles from '../portfolio.module.scss';


export const query = graphql`
query($slug: String!) {
  contentfulWhileTraveling( slug: {eq: $slug} ) {
    title
    image {
      file {
        url
      }
      description
    }
    body {
      json
    }
    
   
  }

}
`
const WhileTraveling = (props) => {
  

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        console.log(node)
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} className={portfolioStyles.image}/>

      }
    }
  } 

    return (
        <div>
             <Layout>
          <Head title={props.data.contentfulWhileTraveling.title}/>
          <div className={portfolioStyles.container}>
            <h2>{props.data.contentfulWhileTraveling.title}</h2>
            <img src={props.data.contentfulWhileTraveling.image.file.url} alt={props.data.contentfulWhileTraveling.image.description} className={portfolioStyles.image} />
            {documentToReactComponents(props.data.contentfulWhileTraveling.body.json, options)} 
            </div>

        </Layout>
        </div>
    )
}

export default WhileTraveling;
