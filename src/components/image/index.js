import React from "react"

import "./style.css"

const Image = ({ image, imageStyle }) => {
  return (
    <img
      src={image.file.url}
      alt={image.description}
      className={`main-template-image ${imageStyle === "portrait" &&
        `portrait`}`}
    />
  )
}

export default Image
