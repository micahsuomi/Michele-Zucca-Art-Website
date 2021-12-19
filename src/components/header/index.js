import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import logo from "../../imgs/logo-brightmike.png"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"

import headerStyles from "./styles.module.scss"
import "./style.css"

const Header = ({ title, subtitle }) => {
  const [isToggled, setIsToggled] = useState(false)

  const [isPortraitsOpen, setPortraitsOpen] = useState(false)
  console.log(isPortraitsOpen)

  const [isPhotographyOpen, setPhotographyOpen] = useState(false)
  const [isHomeClicked, setHomeClicked] = useState(false)

  const navLinksClassOpen = ["nav-links open"]
  const navLinksClassClose = ["nav-links close"]

  const lineClassOne = ["line top"]
  const lineClassOneActive = ["line top active"]

  const lineClassTwo = ["line middle"]
  const lineClassTwoActive = ["line middle active"]

  const lineClassThree = ["line bottom"]
  const lineClassThreeActive = ["line bottom active"]

  const toggle = () => setIsToggled(!isToggled)
  const openPortraits = () => setPortraitsOpen(!isPortraitsOpen)
  const openPhotography = () => setPhotographyOpen(!isPhotographyOpen)

  const closeDropdown = () => {
    setHomeClicked(true)
    setPhotographyOpen(false)
    setPortraitsOpen(false)
    setIsToggled(false)
  }

  console.log(isPortraitsOpen)
  return (
    <header>
      <div className={headerStyles.titleWrapper}>
        <Link to="/" className={headerStyles.title} onClick={closeDropdown}>
          <img
            src={logo}
            alt="michele zucca logo pic"
            className={headerStyles.logo}
          />
          <h2>{title}</h2>
          <p className={headerStyles.subtitle}>{subtitle}</p>
        </Link>
      </div>

      <div>
        <nav>
          <div className={headerStyles.toggleWrapper}>
            <div
              className={headerStyles.toggleBar}
              onClick={toggle}
              style={isToggled ? styleBorder : styleNoBorder}
            >
              <span
                className={isToggled ? lineClassOneActive : lineClassOne}
              ></span>
              <span
                className={isToggled ? lineClassTwoActive : lineClassTwo}
              ></span>
              <span
                className={isToggled ? lineClassThreeActive : lineClassThree}
              ></span>
            </div>
          </div>

          {isToggled && (
            <ul className={isToggled ? navLinksClassOpen : navLinksClassClose}>
              <li className={headerStyles.navListItem}>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/"
                  onClick={closeDropdown}
                >
                  Home
                </Link>
              </li>

              <li className={headerStyles.navListItem}>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/about"
                  onClick={closeDropdown}
                >
                  About
                </Link>
              </li>

              <li className={headerStyles.navListItem} onClick={openPortraits}>
                <span>Portraits</span>
                {isPortraitsOpen ? (
                  <FaChevronUp className={headerStyles.dropDownIcon} />
                ) : (
                  <FaChevronDown className={headerStyles.dropDownIcon} />
                )}
                <>
                  {/* <details>
                <summary
                  activeclassname={headerStyles.activeNavItem}
                  onClick={openPortraits}
                >
                  <span>Portraits</span>
                  {isPortraitsOpen ? (
                    <FaChevronUp className={headerStyles.dropDownIcon} />
                  ) : (
                    <FaChevronDown className={headerStyles.dropDownIcon} />
                  )}
                </summary> */}
                  <ul
                    className={
                      isPortraitsOpen
                        ? headerStyles.nestedNavList
                        : headerStyles.nestedNavListClose
                    }
                  >
                    <li className={headerStyles.nestedListItem}>
                      <Link
                        className={headerStyles.navItemNested}
                        to="/helsinkifirstbatch"
                        onClick={closeDropdown}
                      >
                        Helsinki First Batch
                      </Link>
                    </li>
                    <li className={headerStyles.nestedListItem}>
                      <Link
                        className={headerStyles.navItemNested}
                        to="/helsinkisecondbatch"
                        onClick={closeDropdown}
                      >
                        Helsinki Second Batch
                      </Link>
                    </li>

                    <li className={headerStyles.nestedListItem}>
                      <Link
                        className={headerStyles.navItemNested}
                        to="/thelordandthenewcreatures"
                        onClick={closeDropdown}
                      >
                        The L. and N. C.
                      </Link>
                    </li>
                  </ul>
                </>
                {/* </details> */}
              </li>

              <li className={headerStyles.navListItem}>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/abstracts"
                  onClick={closeDropdown}
                >
                  Abstracts
                </Link>
              </li>

              <li className={headerStyles.navListItem}>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/digital"
                  onClick={closeDropdown}
                >
                  Digital
                </Link>
              </li>

              <li
                className={headerStyles.navListItem}
                onClick={openPhotography}
              >
                <span>Photography</span>
                {isPhotographyOpen ? (
                  <FaChevronUp className={headerStyles.dropDownIcon} />
                ) : (
                  <FaChevronDown className={headerStyles.dropDownIcon} />
                )}
                {/* <details> */}
                {/* <summary
                    activeclassname={headerStyles.activeNavItem}
                    onClick={openPhotography}
                  >
                    {" "}
                    <span>Photography</span>
                    {isPhotographyOpen ? (
                      <FaChevronUp className={headerStyles.dropDownIcon} />
                    ) : (
                      <FaChevronDown className={headerStyles.dropDownIcon} />
                    )}
                  </summary> */}
                <ul
                  className={
                    isPhotographyOpen
                      ? headerStyles.nestedNavList
                      : headerStyles.nestedNavListClose
                  }
                >
                  <li className={headerStyles.nestedListItem}>
                    <Link
                      className={headerStyles.navItemNested}
                      to="/allegories"
                      onClick={closeDropdown}
                    >
                      Allegories
                    </Link>
                  </li>
                  <li className={headerStyles.nestedListItem}>
                    <Link
                      className={headerStyles.navItemNested}
                      to="/playingwiththelightsofsydney"
                      onClick={closeDropdown}
                    >
                      Lights Of Sydney
                    </Link>
                  </li>
                  <li className={headerStyles.nestedListItem}>
                    <Link
                      className={headerStyles.navItemNested}
                      to="/whiletraveling"
                      onClick={closeDropdown}
                    >
                      While Travelling
                    </Link>
                  </li>
                </ul>
                {/* )} */}
                {/* </details> */}
              </li>

              <li className={headerStyles.navListItem}>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  partiallyActive={true}
                  to="/blog"
                  onClick={closeDropdown}
                >
                  Blog
                </Link>
              </li>

              <li className={headerStyles.navListItem}>
                <Link
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/contact"
                  onClick={closeDropdown}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  )
}

const styleBorder = { border: "1px solid white", borderRadius: "500px" }
const styleNoBorder = { border: "none" }

export default Header
