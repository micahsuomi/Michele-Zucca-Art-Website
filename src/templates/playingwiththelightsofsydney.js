import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';
import portfolioStyles from './portfolio.module.scss';


export const query = graphql`
query($slug: String!) {
  contentfulPlayingWithTheLightsOfSydney( slug: {eq: $slug} ) {
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
  contentfulPlayingWithTheLightOfSydneyHeader {
    pageTitle
    pageDescription {
      json
    }
  }

}
`
const PlayingWithTheLightsOfSydney = (props) => {

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
          <Head title={props.data.contentfulPlayingWithTheLightsOfSydney.title}/>
          <div className={portfolioStyles.container}>
            <h2>{props.data.contentfulPlayingWithTheLightsOfSydney.title}</h2>
            <h4>{props.data.contentfulPlayingWithTheLightsOfSydney.subtitle}</h4>
            <img src={props.data.contentfulPlayingWithTheLightsOfSydney.image.file.url} alt={props.data.contentfulPlayingWithTheLightsOfSydney.image.description} className={portfolioStyles.image}/>
            {documentToReactComponents(props.data.contentfulPlayingWithTheLightsOfSydney.body.json, options)}
            </div>
            <Link to ="/playingwiththelightsofsydney" className={portfolioStyles.backToBtn}>Back to {props.data.contentfulPlayingWithTheLightOfSydneyHeader.pageTitle}</Link>

        </Layout>
        </div>
    )
}

export default PlayingWithTheLightsOfSydney;
