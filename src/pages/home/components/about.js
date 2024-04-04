import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const aboutImg = "../../../images/bhe-about.png"

const About = () => {
  return (
    <div className='about-main'>
        <div className='about-cont'>
            <div className='row'>
                <div className='col-sm-6'>
                  <span>Why Belize Hummingbird Expeditions?</span>
                 <h1>EVERY GREAT ADVENTURE BEGINS WITH GOOD PLANNING</h1>
                 <p>
                 At Belize Hummingbird Expeditions, we lead the way with almost three decades of experience in adventure tourism. Our expertise is based in having the best disciplined guides who are knowledgeable, highly trained in safety management and very capable of making the best decisions based on the environment they are leading.

The more we guide, the more passionate we become about our job and creating tailor-made expeditions for you. By getting to know you and what’s important to you, we’ll be able to create your perfect Belize experience. This little country has an amazing amount to offer, and it’s our pleasure to show you the very best of this intriguing and fascinating diversity.
                 </p><br />
                 <a href="/about-us/">
                   Read More
                 </a>
                 </div>
                <div className='col-sm-6'>
                 <StaticImage src={aboutImg} quality={60} formats={["auto", "webp", "avif"]} />
                </div>
            </div>
           </div>
    </div>
  )
}

export default About
