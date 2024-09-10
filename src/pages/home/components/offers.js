import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const kayakingImg = "../../../images/kayakingCta.png"
const campingImg = "../../../images/caveTubing-cta.png"
const tubingImg = "../../../images/tubing.png"
const reefImg = "../../../images/atm-cta.png"

const Offers = () => {
  return (
    <div className='offers-main'>
      <div className='offers-cont'>
        <div className='offers-overlay'></div>
         <div className='row title'>
            <span>Best Sellers</span>
             <h1>Our Top Picks for You</h1>
              <p>Belize will exceed your expectations: it’s more natural, exciting and colourful than what can be seen on our monitors or telephone screens. Whatever your passion, you’ll be able to Belize it with us. Plus, sharing a trip here with people who mean the most to you, will create lifelong memories of breath-taking beauty, dramatic scenery and an incredible admiration for Belize’s vegetation, cave systems and the second largest barrier reef of the western hemisphere.</p>
         </div>
      </div>
      <div className='row grid-tours'>
        <div className='col-sm-3'>
            <a href="">
              <StaticImage src={kayakingImg} quality={60} formats={["auto", "webp", "avif"]} />
              <div className='tour-info'>
                <h1>7 Miles Kayaking</h1>
                <p>Caves Branch River of Caves</p>
                <span>150 USD</span>
              </div>
            </a>
        </div>

        <div className='col-sm-3'>
            <a href="">
              <StaticImage src={tubingImg} quality={60} formats={["auto", "webp", "avif"]} />
              <div className='tour-info'>
                <h1>7 MILES CAVE TUBING</h1>
                <p>Caves Branch River of Caves</p>
                <span>85 USD</span>
              </div>
            </a>
        </div>
        <div className='col-sm-3'>
            <a href="">
              <StaticImage src={campingImg} quality={60} formats={["auto", "webp", "avif"]} />
              <div className='tour-info'>
                <h1>CAVE TUBING</h1>
                <p>St.Hermans Blue Hole</p>
                <span>50 USD</span>
              </div>
            </a>
        </div>
        <div className='col-sm-3'>
            <a href="">
              <StaticImage src={reefImg} quality={60} formats={["auto", "webp", "avif"]} />
              <div className='tour-info'>
                <h1>ATM Cave</h1>
                <p>San Ignacio</p>
                <span>115 USD</span>
              </div>
            </a>
        </div>
      </div>
      <div className='row custom'>
         <div className='custom-cont'>
            <p>Custom Packages</p>
            <h1>Let's Explore More</h1>
            <p>Belize is a true jewel for a wide variety of adventure activities and multiple-day expeditions. We specially cater to visitors looking for an in-depth feel and experience of inland Belize:  Maya ruins, cave systems, rivers and jungle, culture and history. If you wish for us to customize part of your vacation through several days of daily activities or a multiple-day expedition filled with excitement and wonderment, please contact us – especially if you are a group of friends or family travelling together looking for the off the beaten path high adventure. We are here to work with you.</p>
            <a href="/contact-us/">
                Contact Us
            </a>
         </div>
       </div> 
       <div class="elfsight-app-b982bbc6-144c-41e1-8b1d-2c2246513f9d" data-elfsight-app-lazy></div>

    </div>
  )
}

export default Offers
