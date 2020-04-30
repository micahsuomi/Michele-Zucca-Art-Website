import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/Head';
import portfolioStyles from './portfolio.module.scss';


export const query = graphql`
query($slug: String!) {
  contentfulHelsinkiFirstBatch( slug: {eq: $slug} ) {
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
          <Head title={props.data.contentfulHelsinkiFirstBatch.title}/>
          <div className={portfolioStyles.container}>
            <h2>{props.data.contentfulHelsinkiFirstBatch.title}</h2>
            <h4>{props.data.contentfulHelsinkiFirstBatch.subtitle}</h4>
            <img src={props.data.contentfulHelsinkiFirstBatch.image.file.url} alt={props.data.contentfulHelsinkiFirstBatch.image.description} className={portfolioStyles.image}/>
            {documentToReactComponents(props.data.contentfulHelsinkiFirstBatch.body.json, options)}
            </div>
            <Link to ="/helsinkifirstbatch" className={portfolioStyles.backToBtn}>Back to Helsinki First Batch</Link>

        </Layout>
        </div>
    )
}

export default HelsinkiFirstBatch;
