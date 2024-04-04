import * as React from "react"
import "./bucketlist.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import BucketList from "./components/bucket-list-experiences"



const BucketListExperiences = () => (
  <Layout>
    <Seo title="Belize Hummingbird Expeditions | Bucket List Experiences " />
    <BucketList/>
  </Layout>
)

export default BucketListExperiences;
