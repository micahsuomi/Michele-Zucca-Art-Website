import React from 'react';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from '../../components/head';
import portfolioStyles from '../portfolio.module.scss';


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
  const previousHelsinkiSecondBatch = props.pageContext.next ? {
    url: `/helsinkisecondbatch/${props.pageContext.next.slug}`,

  } : '';

  const nextHelsinkiSecondBatch = props.pageContext.previous ? {
    url: `/helsinkisecondbatch/${props.pageContext.previous.slug}`,

  } : '';

    return (
        <div>
        <Head title={props.data.contentfulHelsinkiSecondBatch.title}/>
          <div className={portfolioStyles.container}>
            <div className={portfolioStyles.exitContainer}>
            <Link to='/helsinkifirstbatch'>
            <FontAwesomeIcon icon={faTimes} 
            style={{color: 'white', height: '1.5rem', width: '1.5rem', alignSelf: 'flex-end'}}/>
            </Link>
            </div>
            <h2>{props.data.contentfulHelsinkiSecondBatch.title}</h2>
            <h4>{props.data.contentfulHelsinkiSecondBatch.subtitle}</h4>
            <div className={portfolioStyles.sliderContainer}>
            <div>
              {previousHelsinkiSecondBatch && (
                <Link to={previousHelsinkiSecondBatch.url}>
                  <FontAwesomeIcon icon={faChevronLeft} style={{height: '5rem'}}/>
                </Link>
              )}
            </div>
            <img src={props.data.contentfulHelsinkiSecondBatch.image.file.url} alt={props.data.
              contentfulHelsinkiSecondBatch.image.description} className={portfolioStyles.image}/>
            <div>
              {nextHelsinkiSecondBatch && (
                <Link to={nextHelsinkiSecondBatch.url}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              )}
            </div>
            </div>  
            {documentToReactComponents(props.data.contentfulHelsinkiSecondBatch.body.json, options)}
            </div>
          
        </div>
    )
}

export default HelsinkiFirstBatch;
