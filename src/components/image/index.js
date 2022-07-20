import React, { useState, useEffect, useCallback } from "react"

import Img from "gatsby-image"

import "./style.css"

const Image = ({
  image,
  imageStyle
}) => {
  
  return (
    
      /*<Img
        fluid={image.fluid}
        src={image.fluid.src}
        alt={image.description}
        fadeIn={true}
        className="image-default"
        style={{ borderRadius: 0 }}
        borderRadius={0}
        
      />*/
     
    
    <img
      src={image.file.url}
      alt={image.description}
      // className={imageClass}
      className={`image-default ${imageStyle === "portrait" && `portrait`}`}
      style={{ borderRadius: 0 }}
    /> 
  )
}

export default Image

