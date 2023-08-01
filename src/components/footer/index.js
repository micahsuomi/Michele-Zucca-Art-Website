import React from "react"
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"

import footerStyles from "./styles.module.scss"

const Footer = ({ author }) => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.left}>
        <p>{author}, 2020</p>
      </div>
      <div className={footerStyles.right}>
        <a href="https://www.instagram.com/mikibright_z/" target="blank">
          <FaInstagram size={30} className={footerStyles.socialIcon} />
        </a>
        <a href="https://www.facebook.com/michele.zucca.18" target="blank">
          <FaFacebook size={30} className={footerStyles.socialIcon} />
        </a>
        <a href="https://www.linkedin.com/in/michele-zucca/" target="blank">
          <FaLinkedin size={30} className={footerStyles.socialIcon} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
