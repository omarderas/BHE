import * as React from "react"
import "./private.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import Private from "./components/private"



const PrivateServices = () => (
  <Layout>
    <Seo title="Belize Hummingbird Expeditions | Private Services in Belize" />
    <Private/>
  </Layout>
)

export default PrivateServices;
