import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"

import Layout from "../../components/layout"
import ContactForm from "../../components/contact"
import Head from "../../components/head"

import styles from "./styles.module.scss"

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
      "embedded-asset-block": node => {
        console.log(node)
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className={styles.img} />
      },
    },
  }

  return (
    <Layout>
      <Head title="Contact" />
      <div className={styles.container}>
        <div className={styles.contactLeft}>
          <h3>{data.contentfulContactHeader.title}</h3>
          {documentToReactComponents(
            data.contentfulContactHeader.description.json,
            options
          )}
          <ul className={styles.info}>
            <li className={styles.infoItem}>Michele Zucca</li>
            <li className={styles.infoItem}>
              Email: michele.zucca81@gmail.com
            </li>
          </ul>
          <div className={styles.iconsWrapper}>
            <a href="https://www.instagram.com/mikibright_z/" target="blank">
              <FaInstagram size={30} className={styles.socialIcon} />
            </a>
            <a href="https://www.facebook.com/michele.zucca.18" target="blank">
              <FaFacebook size={30} className={styles.socialIcon} />
            </a>
            <a href="https://www.linkedin.com/in/michele-zucca/" target="blank">
              <FaLinkedin size={30} className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <div className={styles.contactRight}>
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
