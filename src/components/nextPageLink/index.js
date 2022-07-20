import React from "react"
import { Link } from "gatsby"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import linkStyles from "./styles.module.scss"

const NextPageLink = ({ nextUrl }) => {
  return (
    <Link to={nextUrl} className={linkStyles.nextLink}>
      <FontAwesomeIcon
        icon={faChevronRight}
      />
    </Link>
  )
}

export default NextPageLink
