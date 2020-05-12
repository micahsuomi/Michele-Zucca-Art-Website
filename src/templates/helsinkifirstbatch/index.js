import React from 'react';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import Layout from '../../components/layout';
import Head from '../../components/head';
import { faTimes, faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import portfolioStyles from '../portfolio.module.scss';


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
  contentfulHelsinkiFirstBatchHeader {
    title
    body {
      json
    }
  }

}
`
const HelsinkiFirstBatch = (props) => {

  const previousHelsinkiFirstBatch = props.pageContext.next ? {
    url: `/helsinkifirstbatch/${props.pageContext.next.slug}`,

  } : '';

  const nextHelsinkiFirstBatch = props.pageContext.previous ? {
    url: `/helsinkifirstbatch/${props.pageContext.previous.slug}`,

  } : '';

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
        {/* <Layout> */}
          <Head title={props.data.contentfulHelsinkiFirstBatch.title}/>
          <div className={portfolioStyles.container}>
            <div className={portfolioStyles.exitContainer}>
            <Link to='/helsinkifirstbatch'>
            <FontAwesomeIcon icon={faTimes} style={{color: 'white', height: '1.5rem', width: '1.5rem', alignSelf: 'flex-end'}}/>
            </Link>
            </div>
            <h2>{props.data.contentfulHelsinkiFirstBatch.title}</h2>
            <h4>{props.data.contentfulHelsinkiFirstBatch.subtitle}</h4>
            <div className={portfolioStyles.sliderContainer}>
            <div>
              {previousHelsinkiFirstBatch && (
                <Link to={previousHelsinkiFirstBatch.url}>
                  <FontAwesomeIcon icon={faLongArrowAltLeft} style={{height: '5rem'}}/>
                </Link>
              )}
            </div>
            <img src={props.data.contentfulHelsinkiFirstBatch.image.file.url} alt={props.data.
              contentfulHelsinkiFirstBatch.image.description} className={portfolioStyles.image}/>
            <div>
              {nextHelsinkiFirstBatch && (
                <Link to={nextHelsinkiFirstBatch.url}>
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </Link>
              )}
            </div>
            </div>
           
            {documentToReactComponents(props.data.contentfulHelsinkiFirstBatch.body.json, options)}
            </div>
          

        {/* </Layout> */}
        </div>
    )
}

export default HelsinkiFirstBatch;
