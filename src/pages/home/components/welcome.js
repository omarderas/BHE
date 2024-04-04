import React from 'react'

function Welcome() {
  return (
    <div className='welcome'>
       <div className='welcomeOverlay'></div>
       <div className='welcome-content'>
        <p className='first-p'>Welcome to </p>
         <h1>Belize Hummingbird Expeditions</h1>
         <div className='est'>EST. 1997</div>
         <p>Belize Hummingbird Expeditions has its inception way back in 1997 when Abel Garcia, owner and general manager, started guiding tours into the jungle, rivers and caves of the Maya Mountains while working for Ian Anderson’s Caves Branch Adventure Company & Jungle Lodge. A few of the present guides of this excellent operation also became tour guides at the same time when Abel did. After rigorous trainings to acquire different types of certifications and with over 15 years of experience under his belt, Abel decided to start his own tour company which he named Upside Down Tours, however, the eco-adventure concept has evolved into a more competitive market and Belize Hummingbird Expeditions is the new name that the team has adopted to continue providing expertise guiding services to foreign visitors and to Belizeans that crave adventure and have that desire to see in detail some of the beauty that the “The Jewel” named Belize has to offer.</p>
         <a href="/about-us/">Read More</a>
       </div>
       {/*<div className='team'>
        <div className='team-cont'>
            <h1>Meet the Team</h1>
            <div class="elfsight-app-e9880706-00b7-46fa-b5ab-b21622b8c7a8" data-elfsight-app-lazy></div>
            </div>
  </div>*/}
    </div>
  )
}

export default Welcome
