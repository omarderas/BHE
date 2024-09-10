import * as React from "react"
import "./all-tours.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import AllTours from "./components/all-tours"



const TourListings = () => (
  <Layout>
    <Seo title="All Adventures " />
    <AllTours/>
  </Layout>
)

export default TourListings;
