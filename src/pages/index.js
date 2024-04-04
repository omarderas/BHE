import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./home/home.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero from "./home/components/hero"
import About from "./home/components/about"
import Tours from "./home/components/tours"
import Welcome from "./home/components/welcome"
import Offers from "./home/components/offers"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
    <Tours />
    <Welcome />
    <Offers />
  </Layout>
)

export default IndexPage
                 