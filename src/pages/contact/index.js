import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'; 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../../components/layout';
import ContactForm from '../../components/contact';
import Head from '../../components/head'
import styles from './styles.module.scss';

const ContactPage = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulContactHeader {
      title 
      description {
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
        return <img alt={alt} src={url} className={styles.img}/>

      }
    }
  }
  
    
        return (
            <Layout>
                <Head title ="Contact"/>
                <div className={styles.container}>
                <div className={styles.containerLeft}>
                <h1>{data.contentfulContactHeader.title}</h1>
                {documentToReactComponents(data.contentfulContactHeader.description.json)}
                <p></p>
                 </div>
                 <div className={styles.contactRight}>
                   <ContactForm />
                 </div>
                 </div>
            </Layout>
          )
    
  }

  export default ContactPage;
