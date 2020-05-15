import React from 'react';
// import Layout from '../../components/layout';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../../components/head';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import portfolioStyles from '../portfolio.module.scss';


export const query = graphql`
query($slug: String!) {
  contentfulAbstracts( slug: {eq: $slug} ) {
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

  const previousAbstracts = props.pageContext.next ? {
    url: `/abstracts/${props.pageContext.next.slug}`,

  } : null;

  const nextAbstracts = props.pageContext.previous ? {
    url: `/abstracts/${props.pageContext.previous.slug}`,

  } : null;

  console.log(props)
    return (
        <div>
             {/* <Layout> */}
          <Head title={props.data.contentfulAbstracts.title}/>
          <div className={portfolioStyles.container}>
          <div className={portfolioStyles.exitContainer}>
            <Link to='/abstracts'>
            <FontAwesomeIcon icon={faTimes} style={{color: 'white', height: '1.5rem', width: '1.5rem', alignSelf: 'flex-end'}}/>
            </Link>
            </div>
            <h2>{props.data.contentfulAbstracts.title}</h2>
            <div className={portfolioStyles.sliderContainer}>
            <div>
              {previousAbstracts && (
                <Link to={previousAbstracts.url}>
                  <FontAwesomeIcon icon={faChevronLeft} style={{height: '5rem'}}/>
                </Link>
              )}
            </div>
            <img src={props.data.contentfulAbstracts.image.file.url} alt={props.data.contentfulAbstracts.image.description} className={portfolioStyles.image} />
            <div>
              {nextAbstracts && (
                <Link to={nextAbstracts.url}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              )}
            </div>
            </div>
            {documentToReactComponents(props.data.contentfulAbstracts.body.json, options)} 
            </div>

        {/* </Layout> */}
        </div>
    )
}

export default Abstracts;
