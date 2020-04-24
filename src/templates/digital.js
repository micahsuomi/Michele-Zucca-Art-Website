import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/Head';
import portfolioStyles from './portfolio.module.scss';


export const query = graphql`
query($slug: String!) {
  contentfulDigital( slug: {eq: $slug} ) {
    title
    subtitle
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
const Digital = (props) => {
  

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
          <Head title={props.data.contentfulDigital.title}/>
          <div className={portfolioStyles.container}>
            <h2>{props.data.contentfulDigital.title}</h2>
            <h4>{props.data.contentfulDigital.subtitle}</h4>
            <img src={props.data.contentfulDigital.image.file.url} alt={props.data.contentfulDigital.image.description} className={portfolioStyles.image}/>
            {documentToReactComponents(props.data.contentfulDigital.body.json, options)}
            </div>

        </Layout>
        </div>
    )
}

export default Digital;
