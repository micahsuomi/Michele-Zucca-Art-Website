import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/Head';

const AboutPage = (props) => {
   const data = useStaticQuery(graphql`
   query {
    contentfulAbout {
      title
      body {
        json
      }
    }
  }
   `)

   const options = {
       renderNode: {
        "embedded-asset-block": (node) => {
            console.log(node)
            const alt = node.data.target.fields.title['en-US'];
            const url = node.data.target.fields.file['en-US'].url;
            return <img src={url} alt={alt} />
        }

       }
   }
 
    return (
        <div>
            <Layout>
            <Head title="About" />
            <h1>{props.data.contentfulAbout.title}</h1>
            <p>{documentToReactComponents(props.data.contentfulAbout.body.json, options)}</p>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage;