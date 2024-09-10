import * as React from "react"
import "./romantic.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import Romantic from "./components/romantic"



const RomanticBelize = () => (
  <Layout>
    <Seo title="Romantic Belize " />
    <Romantic/>
  </Layout>
)

export default RomanticBelize;
