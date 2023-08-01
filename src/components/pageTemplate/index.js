import React from "react"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

import Head from "../head"
import Layout from "../layout"
import MainContent from "../mainContent"

import "../../pages/style.scss"
import portfolioStyles from "../../pages/portfolio.module.scss"
import stylesVertical from "../../pages/stylesVertical.module.scss"

const PageTemplate = ({
  headTitle,
  title,
  description,
  contentTypeEdges,
  linkUrl,
  styles,
}) => {
  console.log("styles", styles)
  return (
    <Layout>
      <MainContent>
      <Head title={headTitle} />
      <h1>{title}</h1>
      {documentToReactComponents(description.json)}
      <ul className={portfolioStyles.wrapper}>
        {contentTypeEdges.map(({ node: { slug, title, image } }) => {
          return (
            <div className={portfolioStyles.card} key={slug}>
              <Link to={`/${linkUrl}/${slug}`} className={portfolioStyles.link}>
                <h3>{title}</h3>
                {styles === "vertical" ? (
                  <div className={stylesVertical.imageContainer}>
                    <Img
                      fluid={image.fluid}
                      src={image.fluid.src}
                      alt={title}
                    />
                  </div>
                ) : (
                  <Img fluid={image.fluid} src={image.fluid.src} alt={title} />
                )}
              </Link>
            </div>
          )
        })}
      </ul>
      </MainContent>
    </Layout>
  )
}

export default PageTemplate
