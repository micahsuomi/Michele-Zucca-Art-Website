import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';
import portfolioStyles from './portfolio.module.scss';


export const query = graphql`
query($slug: String!) {
  contentfulHelsinkiSecondBatch( slug: {eq: $slug} ) {
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
  contentfulHelsinkiSecondBatchHeader {
    title
    description {
      json
    }
  }

}
`
const HelsinkiFirstBatch = (props) => {

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
          <Head title={props.data.contentfulHelsinkiSecondBatch.title}/>
          <div className={portfolioStyles.container}>
            <h2>{props.data.contentfulHelsinkiSecondBatch.title}</h2>
            <h4>{props.data.contentfulHelsinkiSecondBatch.subtitle}</h4>
            <img src={props.data.contentfulHelsinkiSecondBatch.image.file.url} alt={props.data.contentfulHelsinkiSecondBatch.image.description} className={portfolioStyles.image}/>
            {documentToReactComponents(props.data.contentfulHelsinkiSecondBatch.body.json, options)}
            </div>
            <Link to ="/helsinkifirstbatch" className={portfolioStyles.backToBtn}>Back to {props.data.contentfulHelsinkiSecondBatchHeader.title}</Link>

        </Layout>
        </div>
    )
}

export default HelsinkiFirstBatch;
