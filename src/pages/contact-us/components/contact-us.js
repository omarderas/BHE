import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/contact-headerNew.png"

function ContactUs() {
  return (
    <div className='contact-us'>
    <div className='content-header'>
         <div className="header-overlay"></div>
            <StaticImage src={headerImg} quality={60} formats={["auto", "webp", "avif"]} />
            <div className='header-cont'>
                <h1>Contact Us</h1>
         </div>
      </div>
      <div className='contact-main'>
        <div className='contact-cont'>
            <div className='row'>
                <div className='col-sm-6'>
                <h1>Contact Belize Hummingbird Expeditions</h1>
            <p>Over the years, we’ve developed friendships with past guests that have returned time after time, this has given us an in-depth perspective that lets us create not just a great expedition, but a life-changing experience you’ll never forget. And if your ideal tour is more adventurous than what you can find online, let us know, we know the secret spots more than anyone and we’ll always go the extra mile to help you experience the real Belize.</p>

<p>Belize will exceed your expectations: it’s more natural, exciting and colourful than what can be seen on our monitors or telephone screens. Whatever your passion, you’ll be able to Belize it with us. Plus, sharing a trip here with people who mean the most to you, will create lifelong memories of breath-taking beauty, dramatic scenery and an incredible admiration for Belize’s vegetation, cave systems and the second largest barrier reef of the western hemisphere.</p>
        
                </div>
                <div className='col-sm-6'>
                <div class="elfsight-app-a081b12f-cf14-4c88-a498-719916708cd1" data-elfsight-app-lazy></div>
                </div>
            </div>
            </div>
   
      </div>
    </div>
  )
}

export default ContactUs
