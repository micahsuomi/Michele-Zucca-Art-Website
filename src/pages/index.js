import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from '../components/seo';
import { Helmet } from 'react-helmet';
import { JsonLd } from '../components/jsonld';
import Layout from '../components/layout';
import GallerySlider from '../components/galleryslider';
import '../styles/index.scss';
import homeStyles from './home.module.scss';
import Head from '../components/head';


const IndexPage = (props) => {
    const data = useStaticQuery(graphql`
    query {
        contentfulHome {
          title
          slug 
          body {
            json
          }
        }
      }`)
      const images = {
        renderNode: {
         "embedded-asset-block": (node) => {
             const alt = node.data.target.fields.title['en-US'];
             const url = node.data.target.fields.file['en-US'].url;
             return <img src={url} alt={alt} className={homeStyles.image}/>
         }
 
        }
    }

    return (
        <Layout>
          <SEO title="Michele Zucca Art Website" />
          <Helmet>
              <html lang="en" />
              <title>Michele Zucca Art</title>
              <description>My personal art website featuring traditional paintings, photography, digital art and a blog.</description>
              <JsonLd>
          {{
            '@context': 'https://schema.org',
            '@type': 'Personal Website',
            url: 'https://michelezucca-art.netlify.app/',
            name: 'Michele Zucca Art',
            contactPoint: {
              '@type': 'Art Website',
              telephone: '+1-401-555-1212',
              contactType: 'Customer service',
            },
          }}
        </JsonLd>
          </Helmet>
            <Head title="Home" />
            <GallerySlider />
            <h1 className={homeStyles.homeHeader}>{props.data.contentfulHome.title}</h1>
            {documentToReactComponents(props.data.contentfulHome.body.json,images)}
            <p><Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
        
}

export default IndexPage;