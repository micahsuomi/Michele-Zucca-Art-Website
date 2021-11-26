import React, { useState } from "react"

import Img from "gatsby-image"

import imageStyles from "./styles.module.scss"

const Image = ({ image, prevImage, nextImage, prevImageUrl, nextImageUrl }) => {
  const [touch, setTouch] = useState()
  const handleTouchStart = e => {
    setTouch(e.touches[0].clientX)
    console.log(touch)
  }

  const handleTouchMove = e => {
    const currentTouch = e.touches[0].clientX
    const diff = touch - currentTouch
    if (diff > 5 && nextImage) {
      window.location.assign(nextImageUrl, "_self")
    }
    if (diff < 5 && prevImage) {
      window.location.assign(prevImageUrl, "_self")
    }
  }
  return (
    // <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      // <Img
      //   fluid={image.fluid}
      //   src={image.fluid.src}
      //   alt={image.description}
      //   onTouchStart={handleTouchStart}
      //   onTouchMove={handleTouchMove}
      //   className={imageStyles.image}
      //   style={{ borderRadius: 0 }}
      // />
      <img
        src={image.file.url}
        alt={image.description}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={imageStyles.image}
        style={{ borderRadius: 0 }}
      />
    
    // </div>
  )
}

export default Image
