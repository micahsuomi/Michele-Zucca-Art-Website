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
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    setGallery(galleryData)
  }, [gallery])
  const [nextSlideActive, setNextSlideActive] = useState(false)

  const goToNext = currentIndex => {
    setNextSlideActive(true)

    if (activeIndex === gallery.length - 1) {
      setActiveIndex(0)
    } else {
      setActiveIndex(currentIndex)
    }
  }

  const goToPrevious = currentIndex => {
    setNextSlideActive(false)
    if (activeIndex === 0) {
      setActiveIndex(gallery.length - 1)
    } else {
      setActiveIndex(currentIndex)
    }
  }

  const SlideGalleryOnKey = e => {
    if (e.key === "ArrowLeft") {
      goToPrevious(activeIndex - 1)
    }
    if (e.key === "ArrowRight") {
      goToNext(activeIndex + 1)
    }
  }

  return (
    <>
      <div className={gallerySliderStyles.galleryContainer}>
        <>
          {gallery &&
            gallery.map((item, index) => {
              if (activeIndex === index) {
                return (
                  <div
                    key={index}
                    className={gallerySliderStyles.slider}
                    className={activeIndex && gallerySliderStyles.active}
                  >
                    <Link
                      to={item.link}
                      className={gallerySliderStyles.pageLink}
                    >
                      <div style={{ zIndex: 10 }}>
                        <img
                          key={index}
                          src={item.img}
                          className={
                            nextSlideActive
                              ? gallerySliderStyles.next
                              : gallerySliderStyles.prev
                          }
                          // width="1200"
                          // height="649"
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
          <div className={gallerySliderStyles.prev}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={() => goToPrevious(activeIndex - 1)}
              className={gallerySliderStyles.icon}
              onKeyDown={SlideGalleryOnKey}
              height={20}
              width={20}
              tabIndex="0"
            />
          </div>
          <div className={gallerySliderStyles.next}>
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
