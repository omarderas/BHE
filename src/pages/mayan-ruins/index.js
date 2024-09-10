import * as React from "react"
import "./mayan.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MayanRuins from "./components/mayan-ruins"
import Layout from "../../components/layout"
import Seo from "../../components/seo"






const Jungle = () => (
  <Layout>
    <Seo title="Mayan Ruins " />
    <MayanRuins/>
  </Layout>
)

export default Jungle;
