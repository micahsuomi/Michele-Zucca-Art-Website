import React from 'react';
import Layout from '../../components/layout';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { faTimes, faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from '../../components/head';
import portfolioStyles from '../portfolio.module.scss';


export const query = graphql`
query($slug: String!) {
  contentfulTheLordAndTheNewCreatures( slug: {eq: $slug} ) {
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
const TheLordAndTheNewCreatures = (props) => {
  
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
  const previousTheLordAndTheNewCreatures = props.pageContext.next ? {
    url: `/thelordandthenewcreatures/${props.pageContext.next.slug}`,

  } : '';

  const nextTheLordAndTheNewCreatures = props.pageContext.previous ? {
    url: `/thelordandthenewcreatures/${props.pageContext.previous.slug}`,

  } : '';

    return (
        <div>
             {/* <Layout> */}
          <Head title={props.data.contentfulTheLordAndTheNewCreatures.title}/>
          <div className={portfolioStyles.container}>
          <div className={portfolioStyles.exitContainer}>
            <Link to='/thelordandthenewcreatures'>
            <FontAwesomeIcon icon={faTimes} style={{color: 'white', height: '1.5rem', width: '1.5rem', alignSelf: 'flex-end'}}/>
            </Link>
            </div>
            <h2>{props.data.contentfulTheLordAndTheNewCreatures.title}</h2>
            <div className={portfolioStyles.sliderContainer}>
            <div>
              {previousTheLordAndTheNewCreatures && (
                <Link to={previousTheLordAndTheNewCreatures.url}>
                  <FontAwesomeIcon icon={faLongArrowAltLeft} style={{height: '5rem'}}/>
                </Link>
              )}
            </div>

            <img src={props.data.contentfulTheLordAndTheNewCreatures.image.file.url} 
            alt={props.data.contentfulTheLordAndTheNewCreatures.image.description} 
            className={portfolioStyles.image} />
            <div>
              {nextTheLordAndTheNewCreatures && (
                <Link to={nextTheLordAndTheNewCreatures.url}>
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </Link>
              )}
            </div>
            </div>
            {documentToReactComponents(props.data.contentfulTheLordAndTheNewCreatures.body.json, options)} 
            </div>

        {/* </Layout> */}
        </div>
    )
}

export default TheLordAndTheNewCreatures;
