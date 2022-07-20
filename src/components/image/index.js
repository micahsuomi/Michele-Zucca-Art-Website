import React, { useState, useEffect, useCallback } from "react"

import Img from "gatsby-image"

import "./style.css"

const Image = ({
  image,
  prevImage,
  nextImage,
  prevImageUrl,
  nextImageUrl,
  sliderClick,
}) => {
  const imageDefaultClass = "image-default"
  const imageAnimateLeft = "image-animate-left"
  const imageAnimateRight = "image-animate-right"
  const [touch, setTouch] = useState()
  const [imageClass, setImageClass] = useState()

  const handleTouchStart = e => {
    setTouch(e.touches[0].clientX)
  }

  const handleTouchMove = e => {
    const currentTouch = e.touches[0].clientX
    console.log("touch", touch, "current touch", currentTouch)
    const diff = touch - currentTouch
    console.log("diff", diff)

    if (diff > 150 && nextImage) {
      window.location.href = nextImageUrl
    }
    if (diff < 150 && prevImage) {
      window.location.assign(prevImageUrl, "_self")
    }
  }

  const animateLeft = useCallback(() => {
  }, [imageAnimateLeft, imageClass])
  useEffect(() => {
    const diff = window.innerWidth - sliderClick
    if (sliderClick && nextImage && diff > 5) {
      animateLeft()
    } else {
      setImageClass(imageDefaultClass)
    }
  }, [sliderClick])
  return (
    <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <Img
        fluid={image.fluid}
        src={image.fluid.src}
        alt={image.description}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="image-default"
        style={{ borderRadius: 0 }}
      />
    </div>
    /* 
    
    
      <img
      src={image.file.url}
      alt={image.description}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      // className={imageClass}
      className="image-default"
      style={{ borderRadius: 0 }}
    /> */
  )
}

export default Image
{
  /*        
      <img
        src={image.file.url}
        alt={image.description}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={imageStyles.image}
        style={{ borderRadius: 0 }}
      /> 
     */
}
