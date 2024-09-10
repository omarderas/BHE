import * as React from "react"
import "./sustainable.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import Sustainable from "./components/sustainable"



const SustainableBelize = () => (
  <Layout>
    <Seo title="Sustainable Travel in Belize" />
    <Sustainable/>
  </Layout>
)

export default SustainableBelize;
