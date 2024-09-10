import * as React from "react"
import "./cave.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import CaveAdventures from "./components/cave-adventures"



const Cave = () => (
  <Layout>
    <Seo title="Cave Adventures " />
    <CaveAdventures/>
  </Layout>
)

export default Cave;
