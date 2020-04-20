import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/Head';
import portfolioStyles from './portfolio.module.scss';


export const query = graphql`
query($slug: String!) {
  contentfulAbstracts( slug: {eq: $slug} ) {
    title
    subtitle
    body {
      json
    }
    
   
  }

}
`
const Abstracts = (props) => {
  

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
          <Head title={props.data.contentfulAbstracts.title}/>
          <div className={portfolioStyles.container}>
            <h2>{props.data.contentfulAbstracts.title}</h2>
            <h4>{props.data.contentfulAbstracts.subtitle}</h4>
            {documentToReactComponents(props.data.contentfulAbstracts.body.json, options)}
            </div>

        </Layout>
        </div>
    )
}

export default Abstracts;
