import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout';
import '../styles/index.scss';
import homeStyles from './home.module.scss';
import Head from '../components/Head';


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
            <Head title="Home" />
            <h1>{props.data.contentfulHome.title}</h1>
            <p>{documentToReactComponents(props.data.contentfulHome.body.json,images)}</p>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
        
}

export default IndexPage;