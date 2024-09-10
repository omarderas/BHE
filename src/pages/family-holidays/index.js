import * as React from "react"
import "./family.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import Family from "./components/family"



const FamilyHolidays = () => (
  <Layout>
    <Seo title="Family Holidays " />
    <Family/>
  </Layout>
)

export default FamilyHolidays;
