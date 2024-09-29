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
              <p>Belize will blow your expectations out of the water! More vibrant, thrilling, and awe-inspiring than any screen could ever capture, this paradise is yours to explore. Whether you're chasing adventure or simply soaking in nature’s wonders, you’ll get to truly Belize it with us. And when you share this unforgettable journey with your loved ones, you’ll create lasting memories of jaw-dropping landscapes, breathtaking cave systems, lush rainforests, and the world-famous Belize Barrier Reef – the second largest on the planet. Ready to dive into paradise?</p>
         </div>
      </div>
      <div className='row grid-tours'>
        <div className='col-sm-3'>
            <a href="/7-mile-cave-kayaking-the-caves-branch-river-in-belize/">
              <StaticImage src={kayakingImg} quality={60} formats={["auto", "webp", "avif"]} />
              <div className='tour-info'>
                <h1>7 Miles Kayaking</h1>
                <p>Caves Branch River of Caves</p>
                <span>110 USD</span>
              </div>
            </a>
        </div>

        <div className='col-sm-3'>
            <a href="/7-mile-cave-tubing-the-caves-branch-river-in-belize/">
              <StaticImage src={tubingImg} quality={60} formats={["auto", "webp", "avif"]} />
              <div className='tour-info'>
                <h1>7 MILES CAVE TUBING</h1>
                <p>Caves Branch River of Caves</p>
                <span>85 USD</span>
              </div>
            </a>
        </div>
        <div className='col-sm-3'>
            <a href="/cave-tubing-in-st-hermans-blue-hole-national-park-in-belize/">
              <StaticImage src={campingImg} quality={60} formats={["auto", "webp", "avif"]} />
              <div className='tour-info'>
                <h1>CAVE TUBING</h1>
                <p>St.Hermans Blue Hole</p>
                <span>50 USD</span>
              </div>
            </a>
        </div>
        <div className='col-sm-3'>
            <a href="/atm-cave-in-belize/">
              <StaticImage src={reefImg} quality={60} formats={["auto", "webp", "avif"]} />
              <div className='tour-info'>
                <h1>ATM Cave</h1>
                <p>San Ignacio</p>
                <span>130 USD</span>
              </div>
            </a>
        </div>
      </div>
      <div className='row custom'>
         <div className='custom-cont'>
            <p>Custom Packages</p>
            <h1>Let's Explore More</h1>
            <p>Belize is the ultimate playground for thrill-seekers and multi-day explorers! We craft unforgettable adventures for those craving an immersive experience of inland Belize – from ancient Maya ruins and mysterious cave systems to winding rivers and lush jungles steeped in culture and history. Want to level up your vacation with customized, action-packed itineraries? Whether it's a series of epic daily adventures or a multi-day expedition filled with wonder, we've got you covered. Perfect for groups of friends or families seeking high-adrenaline, off-the-beaten-path experiences. Ready for the adventure of a lifetime? Let's make it happen!</p>
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
