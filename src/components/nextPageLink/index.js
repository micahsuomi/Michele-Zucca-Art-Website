import React from "react"
import { Link } from "gatsby"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NextPageLink = ({ nextUrl }) => {
  return (
    <Link to={nextUrl}>
      <FontAwesomeIcon icon={faChevronRight} style={{ height: "5rem" }} />
    </Link>
  )
}

export default NextPageLink
