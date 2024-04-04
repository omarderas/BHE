import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import vidBg from "../../../images/belize-maya.mp4"


function Hero() {
	return (

    <div className="hero">
   
      <div className="main-overlay"></div>
    
       <div className="hero-carousel" >
            <video  autoPlay muted loop style={{ width: "100%" }} src={vidBg} />
            

	     </div>

   
      <div className="hero-content">
       <p>You Better Belize It!</p>
       <h1>Feel The Thrill... You Are Here...</h1>
       <a href="/all-tours/">
        Experience Belize
       </a>
      </div>

  
	</div>

    );
}
          
export default Hero;              