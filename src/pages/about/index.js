import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Head from "../../components/head"
import Layout from "../../components/layout"
import MainContent from "../../components/mainContent"

import aboutStyles from "./styles.module.scss"

const AboutPage = () => {
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
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} className={aboutStyles.aboutImg} />
      },
    },
  }

  const { title, body } = data.contentfulAbout

  return (
    <div>
      <Layout>
        <Head title="About" />
        <MainContent>
          <div className={aboutStyles.container}>
            <h1>{title}</h1>
            <div>{documentToReactComponents(body.json, options)}</div>
            <p>
              {" "}
              If you would like to get in touch,
              <Link to="/contact" className={aboutStyles.contact}>
                {" "}
                Contact Me
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={aboutStyles.contactIcon}
                />
              </Link>
            </p>
          </div>
        </MainContent>
      </Layout>
    </div>
  )
}

export default AboutPage
