import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/about-headerNew.png"

function AboutUs() {
  return (
    <div className='aboutus'>
    <div className='content-header'>
      <div className="header-overlay"></div>
        <StaticImage src={headerImg} quality={60} formats={["auto", "webp", "avif"]} />
         <div className='header-cont'>
            <h1>About Us</h1>
         </div>
      </div>
      <div className='aboutus-main'>
        <div className='aboutus-cont'>
            <h1>About Belize Hummingbird Expeditions</h1>
            <p>Belize Hummingbird Expeditions has its inception way back in 1997 when Abel Garcia, owner and general manager, started guiding tours into the jungle, rivers and caves of the Maya Mountains while working for Ian Anderson’s Caves Branch Adventure Company & Jungle Lodge. A few of the present guides of this excellent operation also became tour guides at the same time when Abel did. After rigorous trainings to acquire different types of certifications and with over 15 years of experience under his belt, Abel decided to start his own tour company which he named Upside Down Tours, however, the eco-adventure concept has evolved into a more competitive market and Belize Hummingbird Expeditions is the new name that the team has adopted to continue providing expertise guiding services to foreign visitors and to Belizeans that crave adventure and have that desire to see in detail some of the beauty that the “The Jewel” named Belize has to offer.</p><br/>
            <p>Our guides have taken the courses and trainings required by the Belize Tourism Board and have been licensed as Tour Guides, their main goal is to manage safety and risks along with all the other qualities of safeguarding adventure travel, environmental integrity of destinations, reputation, fun and memorable experiences.  With the many years of experience they are also certified in:<br />

<b>First Aid and CPR</b><br />

<b>Emergency Medicine First Responder</b><br />

<b>Swift Water Rescue</b><br />

<b>Cave Rescue</b><br />

<b>High Angle Rescue</b> <br />

<b>Confined Space Rescue</b></p><br/>
<h1>Meet The Team</h1>
<p>Our Team is composed of eight tour guides with different specialities who are also drivers and three back-up guides that are part of the Cave and River Kayaking Tours as well as overnight expeditions. Two guides within the team specialize in birding, the others in jungle, rivers, caves, Mayan Archaeology and the richly diverse flora and fauna of our overlapping wildlife habitats.</p>
       
        </div>

      </div>
    </div>
  )
}

export default AboutUs
