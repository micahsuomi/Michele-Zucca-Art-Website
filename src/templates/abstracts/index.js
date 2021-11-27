import React, { useState } from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Head from "../../components/head"
import Image from "../../components/image"
import PreviousPageLink from "../../components/previousPageLink"
import NextPageLink from "../../components/nextPageLink"
import ExitContainer from "../../components/exitContainer"

import portfolioStyles from "../portfolio.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulAbstracts(slug: { eq: $slug }) {
      title
      image {
        fluid(maxWidth: 930) {
          src
        }
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
const Abstracts = ({ pageContext, data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className={portfolioStyles.image} />
      },
    },
  }
  const [touch, setTouch] = useState()
  const previousAbstracts = pageContext.previous && {
    url: `/abstracts/${pageContext.previous.slug}`,
  }

  const nextAbstracts = pageContext.next && {
    url: `/abstracts/${pageContext.next.slug}`,
  }

  const handleTouchStart = e => {
    setTouch(e.touches[0].clientX)
  }

  const handleTouchMove = e => {
    const currentTouch = e.touches[0].clientX
    const diff = touch - currentTouch
    if (diff > 5 && nextAbstracts) {
      window.location.assign(nextAbstracts.url, "_self")
    }
    if (diff < 5 && previousAbstracts) {
      window.location.assign(previousAbstracts.url, "_self")
    }
  }

  const [sliderClick, setSliderClick] = useState()

  const setRightLinkClick = (rightClick) => {
    setSliderClick(rightClick)
  }
  const { title, image, body } = data.contentfulAbstracts
  return (
    <div>
      <Head title={title} />
      <div className={portfolioStyles.container}>
        <ExitContainer exitLink="/abstracts" />
        <h2>{title}</h2>
        <div className={portfolioStyles.sliderContainer}>
         
          <div className={portfolioStyles.imageContainer}>   
          <Image
            image={image}
            prevImage={previousAbstracts}
            nextImage={nextAbstracts}
            prevImageUrl={previousAbstracts && previousAbstracts.url}
            nextImageUrl={nextAbstracts && nextAbstracts.url}
            sliderClick={sliderClick}
          />
          </div>  
          {/* <img
            src={image.file.url}
            alt={image.description}
            className={portfolioStyles.imagePhoto}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          /> */}
           <div className={portfolioStyles.sliderLinkContainer}> 
            {previousAbstracts && (
              <PreviousPageLink prevUrl={previousAbstracts.url} />
            )}
          </div>
          <div className={portfolioStyles.sliderLinkContainer}> 
            {nextAbstracts && <NextPageLink nextUrl={nextAbstracts.url} setRightLinkClick={setRightLinkClick}/>}
          </div> 
        </div>
        <div>
        {documentToReactComponents(body.json, options)}
        </div>
      </div>
    </div>
  )
}

export default Abstracts
