import * as React from "react"
import "./contact.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import ContactUs from "./components/contact-us"



const Contact = () => (
  <Layout>
    <Seo title="Contact Us " />
    <ContactUs/>
  </Layout>
)

export default Contact;
