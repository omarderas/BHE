import * as React from "react"
import "./jungle.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import JungleAdventures from "./components/jungle-adventures"



const Jungle = () => (
  <Layout>
    <Seo title="Belize Hummingbird Expeditions | Jungle Adventures " />
    <JungleAdventures/>
  </Layout>
)

export default Jungle;
