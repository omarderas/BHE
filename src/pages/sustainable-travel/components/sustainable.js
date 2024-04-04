import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/sustainable-headerNew.png"

function Sustainable() {
  return (
    <div className='sustainable-travel'>
      <div className='content-header'>
         <div className="header-overlay"></div>
            <StaticImage src={headerImg} quality={60} formats={["auto", "webp", "avif"]} />
            <div className='header-cont'>
                <h1>Sustainable Travel</h1>
         </div>
      </div>
      <div className='sustainable-main'>
        <div className='sustainable-cont'>
            <h1>Our Experiences</h1>
            <p>Belize is transforming the Caribbean and Central America and leading on world stage conservation. With 103 Protected Areas managed under the National Protected Areas System, Belize has managed to protect 36.6 % of its terrestrial area and 19.8 % of its marine area. In 2022 Belize reaffirmed its commitment in achieving the firs debt conversion for marine conservation by increasing its marine protected areas to 30% by 2026. In this small paradise you find 3 of the 4 coral atolls and the longest barrier reef of the western hemisphere along with a rich biodiversity, the future is sustainable travel.</p>
        </div>
        <div className='sustainable-grid'>
           <a href="/contact-us">
                      Arrange with Us
              </a>
        </div>
      </div>
    </div>
  )
}

export default Sustainable
