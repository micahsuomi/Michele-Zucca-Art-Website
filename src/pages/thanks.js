import React from "react"
import Layout from "../components/layout"
import thanksStyles from "./thanks.module.scss"

export default () => (
  <Layout>
    <div className={thanksStyles.container}>
      <h1>Thank you for your message!</h1>
      <p>I will get back to you as soon as I can.</p>
    </div>
  </Layout>
)
