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

  const { activeIndex } = state

  useEffect(() => {
    setGallery(galleryData)
  }, [gallery])

  const goToNext = currentIndex => {
    console.log(activeIndex)
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
  console.log(showMask)
  const closeMask = () => setShowMask(false)

  console.log(activeIndex)
  const testKey = e => {
    console.log(e)
  }
  return (
    <>
      <div
        className={gallerySliderStyles.galleryContainer}
      >
        <>
          {gallery &&
            gallery.map((item, index) => {
              console.log(activeIndex, index)
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
                      <img
                        key={index}
                        src={item.img}
                        className={gallerySliderStyles.image}
                        width="100%"
                        height="549"
                        alt={item.title}
                      />

                      <h2 className={item.title}>{item.description}</h2>
                    </Link>
                  </div>
                )
              }
            })}
        </>
        {showMask && <div className={gallerySliderStyles.mask}></div>}

        <div className={gallerySliderStyles.buttonsContainer}>
          <div className={gallerySliderStyles.left}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={() => goToPrevious(activeIndex - 1)}
              className={gallerySliderStyles.icon}
              onKeyDown={e =>
                e.key === "ArrowLeft" && goToPrevious(activeIndex - 1)
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
              onKeyDown={e =>
                e.key === "ArrowRight" && goToNext(activeIndex + 1)
              }
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
