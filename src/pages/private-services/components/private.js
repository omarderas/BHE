import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/private-header.png"

function Private() {
  return (
    <div className='private'>
      <div className='content-header'>
         <div className="header-overlay"></div>
            <StaticImage src={headerImg} quality={60} formats={["auto", "webp", "avif"]} />
            <div className='header-cont'>
                <h1>Private Services</h1>
         </div>
      </div>
      <div className='private-main'>
        <div className='private-cont'>
            <h1>Our Experiences</h1>
            <p>You may be in need of a private shuttle service from Belize’s International Airport to your resort hotel, a tour designed only for your family or your group, or a tour guide to be with you for several days, let us know what you may have in mind and we will happily provide you a price and a great timely service.</p>
        </div>
        <div className='private-grid'>
        <a href="/contact-us">
                      Arrange with Us
              </a>
        </div>
      </div>
    </div>
  )
}

export default Private
