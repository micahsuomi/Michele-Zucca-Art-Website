import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../imgs/logo-brightmike.png"
import headerStyles from "./styles.module.scss"
import "./style.css"

const Header = ({ title, subtitle }) => {
  const [isClicked, setState] = useState(false)
  let [isPortraitsOpen, setPortraitsOpen] = useState(false)
  let [isPhotographyOpen, setPhotographyOpen] = useState(false)
  let [isHomeClicked, setHomeClicked] = useState(false)

  let navLinksClass = ["nav-links"]
  let navLinksClassOpen = ["nav-links open"]

  let lineClassOne = ["line top"]
  let lineClassOneActive = ["line top active"]

  let lineClassTwo = ["line middle"]
  let lineClassTwoActive = ["line middle active"]

  let lineClassThree = ["line bottom"]
  let lineClassThreeActive = ["line bottom active"]

  const toggle = () => {
    setState(!isClicked)
  }
  const openPortraits = () => {
    setPortraitsOpen((isPortraitsOpen = true))
    setPhotographyOpen((isPhotographyOpen = false))
    setHomeClicked((isHomeClicked = false))

    console.log(isPortraitsOpen)
  }

  const openPhotography = () => {
    setPhotographyOpen((isPhotographyOpen = true))
    setPortraitsOpen((isPortraitsOpen = false))
    setHomeClicked((isHomeClicked = false))
  }
  const closeDropdown = () => {
    setHomeClicked((isHomeClicked = true))
    setPhotographyOpen((isPhotographyOpen = false))
    setPortraitsOpen((isPortraitsOpen = false))
    setState(false)
  }

  console.log(isClicked)

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
              style={isClicked ? styleBorder : styleNoBorder}
            >
              <span
                className={isClicked ? lineClassOneActive : lineClassOne}
              ></span>
              <span
                className={isClicked ? lineClassTwoActive : lineClassTwo}
              ></span>
              <span
                className={isClicked ? lineClassThreeActive : lineClassThree}
              ></span>
            </div>
          </div>

          <ul className={isClicked ? navLinksClassOpen : navLinksClass}>
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

            <li className={headerStyles.navListItem}>
              <details>
                <summary
                  activeClassName={headerStyles.activeNavItem}
                  onClick={openPortraits}
                  activeClassName={headerStyles.activeNavItem}
                >
                  Portraits
                </summary>
                {isPhotographyOpen || isHomeClicked ? null : (
                  <ul className={headerStyles.nestedNavList}>
                    <li className={headerStyles.nestedListItem}>
                      <Link
                        className={headerStyles.navItemNested}
                        to="/helsinkifirstbatch"
                        onClick={closeDropdown}
                      >
                        Hki First Batch
                      </Link>
                    </li>
                    <li className={headerStyles.nestedListItem}>
                      <Link
                        className={headerStyles.navItemNested}
                        to="/helsinkisecondbatch"
                        onClick={closeDropdown}
                      >
                        Hki Second Batch
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
                )}
              </details>
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

            <li className={headerStyles.navListItem}>
              <details>
                <summary
                  activeClassName={headerStyles.activeNavItem}
                  onClick={openPhotography}
                >
                  {" "}
                  Photography
                </summary>
                {isPortraitsOpen || isHomeClicked ? null : (
                  <ul className={headerStyles.nestedNavList}>
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
                )}
              </details>
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
        </nav>
      </div>
    </header>
  )
}

const styleBorder = { border: "1px solid white", borderRadius: "500px" }
const styleNoBorder = { border: "none" }

export default Header
