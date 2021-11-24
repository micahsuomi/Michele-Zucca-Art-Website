import React from "react"
import { Link } from "gatsby"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import exitContainerStyles from "./styles.module.scss"

const ExitContainer = ({ exitLink }) => {
  return (
    <div className={exitContainerStyles.exitContainer}>
      <Link to={exitLink}>
        <FontAwesomeIcon
          icon={faTimes}
          style={{
            color: "white",
            height: "1.5rem",
            width: "1.5rem",
            alignSelf: "flex-end",
          }}
        />
      </Link>
    </div>
  )
}

export default ExitContainer
