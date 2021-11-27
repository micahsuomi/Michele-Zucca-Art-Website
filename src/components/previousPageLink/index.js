import React from "react"
import { Link } from "gatsby"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import linkStyles from "./styles.module.scss"

const PreviousPageLink = ({ prevUrl }) => {
  return (
    <Link to={prevUrl} className={linkStyles.prevLink}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Link>
  )
}

export default PreviousPageLink
