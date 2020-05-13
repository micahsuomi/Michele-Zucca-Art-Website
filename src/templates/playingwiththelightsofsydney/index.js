import React from 'react';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import Layout from '../../components/layout';
import Head from '../../components/head';
import { faTimes, faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import portfolioStyles from '../portfolio.module.scss';
import styles from './styles.module.scss';


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

}
`
const PlayingWithTheLightsOfSydney = (props) => {

  const previousPlayingWithTheLightsOfSydney = props.pageContext.next ? {
    url: `/playingwiththelightsofsydney/${props.pageContext.next.slug}`,

  } : '';

  const nextPlayingWithTheLightsOfSydney = props.pageContext.previous ? {
    url: `/playingwiththelightsofsydney/${props.pageContext.previous.slug}`,

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
          <Head title={props.data.contentfulPlayingWithTheLightsOfSydney.title}/>
          <div className={portfolioStyles.container}>
          <div className={portfolioStyles.exitContainer}>
            <Link to='/playingwiththelightsofsydney'>
            <FontAwesomeIcon icon={faTimes} style={{color: 'white', height: '1.5rem', width: '1.5rem', alignSelf: 'flex-end'}}/>
            </Link>
            </div>
            <h2>{props.data.contentfulPlayingWithTheLightsOfSydney.title}</h2>
            <h4>{props.data.contentfulPlayingWithTheLightsOfSydney.subtitle}</h4>
            <div className={portfolioStyles.sliderContainer}>
            <div>
              {previousPlayingWithTheLightsOfSydney && (
                <Link to={previousPlayingWithTheLightsOfSydney.url}>
                  <FontAwesomeIcon icon={faLongArrowAltLeft} style={{height: '5rem'}}/>
                </Link>
              )}
            </div>
            <img src={props.data.contentfulPlayingWithTheLightsOfSydney.image.file.url} alt={props.data.contentfulPlayingWithTheLightsOfSydney.image.description} className={styles.imagePhoto}/>
            <div>
              {nextPlayingWithTheLightsOfSydney && (
                <Link to={nextPlayingWithTheLightsOfSydney.url}>
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </Link>
              )}
            </div>
            </div>
            {documentToReactComponents(props.data.contentfulPlayingWithTheLightsOfSydney.body.json, options)}

            </div>

        {/* </Layout> */}
        </div>
    )
}

export default PlayingWithTheLightsOfSydney;