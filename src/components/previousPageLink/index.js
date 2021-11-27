import React from "react"
import { Link } from "gatsby"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PreviousPageLink = ({ prevUrl }) => {
  return (
    <Link to={prevUrl}>
      <FontAwesomeIcon icon={faChevronLeft} style={{ height: "5rem" }} />
    </Link>
  )
}

export default PreviousPageLink
