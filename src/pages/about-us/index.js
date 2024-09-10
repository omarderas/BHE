import * as React from "react"
import "./about.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import AboutUs from "./components/about-us"



const About = () => (
  <Layout>
    <Seo title="About Us " />
    <AboutUs/>
  </Layout>
)

export default About;
