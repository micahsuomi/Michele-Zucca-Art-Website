import React from 'react';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import Layout from '../../components/layout';
import Head from '../../components/head';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import portfolioStyles from '../portfolio.module.scss';
import styles from './styles.module.scss';


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

  const previousWhileTraveling = props.pageContext.next ? {
    url: `/whiletraveling/${props.pageContext.next.slug}`,

  } : '';

  const nextWhileTraveling = props.pageContext.previous ? {
    url: `/whiletraveling/${props.pageContext.previous.slug}`,

  } : '';
    return (
        <div>
             {/* <Layout> */}
          <Head title={props.data.contentfulWhileTraveling.title}/>
          <div className={portfolioStyles.container}>
          <div className={portfolioStyles.exitContainer}>
            <Link to='/whiletraveling'>
            <FontAwesomeIcon icon={faTimes} style={{color: 'white', height: '1.5rem', width: '1.5rem', alignSelf: 'flex-end'}}/>
            </Link>
            </div>
            <h2>{props.data.contentfulWhileTraveling.title}</h2>
            <div className={portfolioStyles.sliderContainer}>
            <div>
              {previousWhileTraveling && (
                <Link to={previousWhileTraveling.url}>
                  <FontAwesomeIcon icon={faChevronLeft} style={{height: '5rem'}}/>
                </Link>
              )}
            </div>
            <img src={props.data.contentfulWhileTraveling.image.file.url} alt={props.data.contentfulWhileTraveling.image.description} className={styles.photoImage} />
            <div>
              {nextWhileTraveling && (
                <Link to={nextWhileTraveling.url}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              )}
            </div>
            </div>
            {documentToReactComponents(props.data.contentfulWhileTraveling.body.json, options)} 
            </div>

        {/* </Layout> */}
        </div>
    )
}

export default WhileTraveling;
