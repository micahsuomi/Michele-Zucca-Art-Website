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

  console.log(image)
  const handleTouchStart = e => {
    setTouch(e.touches[0].clientX)
    console.log(touch)
  }

  const handleTouchMove = e => {
    const currentTouch = e.touches[0].clientX
    const diff = touch - currentTouch
    if (diff > 5 && nextImage) {
      // window.location.assign(nextImageUrl, "_self")
      console.log(window)
      window.location.href = nextImageUrl
    }
    if (diff < 5 && prevImage) {
      window.location.assign(prevImageUrl, "_self")
    }
  }

  const animateLeft = useCallback(() => {
    // setImageClass(imageAnimateLeft)
    // console.log("image class animate left", imageClass)
  }, [imageAnimateLeft, imageClass])
  useEffect(() => {
    console.log(window.innerWidth, sliderClick)
    const diff = window.innerWidth - sliderClick
    console.log(diff)
    console.log(sliderClick, window.innerWidth)
    if (sliderClick && nextImage && diff > 5) {
      console.log("image class animate left", imageClass)
      // setImageClass(imageAnimateLeft)

      animateLeft()
      console.log("image left")
    } else {
      setImageClass(imageDefaultClass)
      console.log("image default")
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
