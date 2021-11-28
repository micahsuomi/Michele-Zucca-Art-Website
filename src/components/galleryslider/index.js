import React, { useState, useEffect } from "react"
import { galleryData } from "./gallerysliderdata"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import gallerySliderStyles from "./styles.module.scss"

const GallerySlider = () => {
  const [gallery, setGallery] = useState([])
  const [state, setState] = useState({
    activeIndex: 0,
    isClicked: false,
  })
  const [showMask, setShowMask] = useState(false)
  const [mask, setMask] = useState("mask")

  const { activeIndex } = state

  useEffect(() => {
    setGallery(galleryData)
  }, [gallery])

  const goToNext = currentIndex => {
    if (activeIndex === gallery.length - 1) {
      setState({ activeIndex: 0 })
    } else {
      setState({ activeIndex: currentIndex })
    }
  }

  const goToPrevious = currentIndex => {
    if (activeIndex === 0) {
      setState({ activeIndex: gallery.length - 1 })
    } else {
      setState({ activeIndex: currentIndex })
    }
  }

 
  const openMask = () => setShowMask(true)
  const closeMask = () => setShowMask(false)
  const SlideGalleryOnKey = (e) => {
    if( e.key === "ArrowLeft") {
      goToPrevious(activeIndex - 1)
    }
    if(e.key === "ArrowRight") {
      goToNext(activeIndex + 1)
    }
  }
 
  return (
<>
      <div className={gallerySliderStyles.galleryContainer} >

        {/* <div
          className={
            gallerySliderStyles.mask
          }
        ></div> */}
        <>
          {gallery &&
            gallery.map((item, index) => {
              if (activeIndex === index) {
                return (
                  <div
                    className={gallerySliderStyles.slider}
                    className={activeIndex && gallerySliderStyles.active}
                  >
                    <Link
                      to={item.link}
                      className={gallerySliderStyles.pageLink}
                    >
                      <div
                        // onMouseEnter={() => setMask(gallerySliderStyles.maskActive)}
                        // onMouseOut={() => setMask(gallerySliderStyles.mask)}
                        style={{zIndex: 10}}
                      >
                        <img
                          key={index}
                          src={item.img}
                          className={gallerySliderStyles.image}
                          width="1200"
                          height="649"
                          alt={item.title}
                        />
                      </div>
                      <h2 className={item.title}>{item.description}</h2>
                    </Link>
                  </div>
                )
              }
            })}
        </>

        <div className={gallerySliderStyles.buttonsContainer}>
          <div className={gallerySliderStyles.left}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={() => goToPrevious(activeIndex - 1)}
              className={gallerySliderStyles.icon}
              onKeyDown={SlideGalleryOnKey
              }
              height={20}
              width={20}
              tabIndex="0"
            />
          </div>
          <div className={gallerySliderStyles.right}>
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={() => goToNext(activeIndex + 1)}
              className={gallerySliderStyles.icon}
              onKeyDown={SlideGalleryOnKey}
              tabIndex="0"
              height={3}
            />
          </div>
        </div>
      </div>
      <div className={gallerySliderStyles.dotsWrapper}>
        {gallery.map((item, index) => {
          return (
            <div
              key={index}
              className={
                activeIndex === index
                  ? gallerySliderStyles.activeDot
                  : gallerySliderStyles.dots
              }
            ></div>
          )
        })}
      </div>
      </>
  )
}

export default GallerySlider
