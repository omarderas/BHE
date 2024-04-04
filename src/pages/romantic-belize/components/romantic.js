import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/romantic-header.png"

function Romantic() {
  return (
    <div className='romantic'>
      <div className='content-header'>
         <div className="header-overlay"></div>
            <StaticImage src={headerImg} quality={60} formats={["auto", "webp", "avif"]} />
            <div className='header-cont'>
                <h1>Romantic Belize</h1>
         </div>
      </div>
      <div className='romantic-main'>
        <div className='romantic-cont'>
            <h1>Our Experiences</h1>
            <p>This small country has a large variety of extremely romantic settings, whether you are looking for a jungle setting, an impressive historical setting on top of a Mayan temple or a romantic getaway to an island next to the reef, we can certainly advise on the best wedding experts of the country and provide suggestions on places to stay and activities to do.</p>
        </div>
        <div className='romantic-grid'>
             <a href="/contact-us">
                      Arrange with Us
              </a>
        </div>
      </div>
    </div>
  )
}

export default Romantic
