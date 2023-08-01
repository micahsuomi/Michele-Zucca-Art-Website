import React from "react"

import mainContentStyles from "./styles.module.scss"

const MainContent = ({ children }) => {
  return <div className={mainContentStyles.content}>{children}</div>
}

export default MainContent
