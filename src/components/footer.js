import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./../less/footer.scss";

import  FaFacebookF  from "../images/faFacebookF";
import  FaInstagram  from "../images/FaInstagram";

const MainLogo = "../images/bhe-main-new.png";
     

function Footer() {
	return (
    <div className="footer">
        
        <div className="footer-wrapper">
            <div className="row blurb">
                
            </div>
            <div className="row top">
                <div className="col-sm-6">
                <a class="footer-brand" href="#">  <StaticImage src={MainLogo} quality={60} formats={["auto", "webp", "avif"]} /></a>
                </div>
                <div className="col-sm-6 sec">
                    <ul className="footer-nav">
                        <li>
                            <a href="/about-us/">About</a>
                        </li>
                        <li>
                            <a href="/all-tours/">Experiences</a>
                        </li>
                        <li>
                            <a href="">Green Belize</a>
                        </li>
                        <li>
                            <a href="/contact-us/">Contact Us</a>
                        </li>
                   
                    </ul>
                </div>
            </div>
        <div className="row">
            <div className="col-sm-4">
                <div className="footer-content">
               <h1>About BHE</h1>
                <p>At Belize Hummingbird Expeditions, we lead the way with almost three decades of experience in adventure tourism.</p>
                    <ul className="social">
                                <li>
                                   
                                    <a href="https://www.facebook.com/profile.php?id=61572286466977" target="_blank"><FaFacebookF /></a>
                                    <a href=""><FaInstagram /></a>
                                 
                                </li>
                            
                    </ul>
                </div>
            </div>

            <div className="col-sm-4 second">
                <div className="footer-content">
                    <h1>Contact Us</h1>
                    <p>
                        Tel:
                   
                     <a href="tel:5016357172"> +(501) 635-7172</a>
                    </p>
                    <p>
                        Email:
                    
                    <a href="mailto:bzhummingbirdexpeditions@yahoo.com"> bzhummingbirdexpeditions@yahoo.com</a>
                    </p>
                    <p>
                        Hours:
                   
                    <a href=""> Mon - Sun, 8:00am to 4:00pm CST</a>
                    </p>
                </div>
            </div>
            <div className="col-sm-4">
               <div className="footer-content">
                        <h1>Adventures</h1>
                        <p>

                          <a href="/cave-tubing-in-st-hermans-blue-hole-national-park-in-belize/"> Cave Tubing</a>
                        </p>  
                        <p>

                          <a href="/7-mile-cave-kayaking-the-caves-branch-river-in-belize/"> 7-Mile Cave Kayaking</a>
                        </p> 
                        <p>

                          <a href="/7-mile-cave-tubing-the-caves-branch-river-in-belize/"> 7-Mile Cave Tubing</a>
                        </p> 
                        <p>

                          <a href="/mayan-ruins/"> Mayan Ruins</a>
                        </p> 
                        <p>

                          <a href="/atm-cave-in-belize/"> ATM</a>
                        </p> 
               
                </div>
            </div>

        </div>
        <div className="footer-copyright">
            <p>Copyright © {new Date().getFullYear()} Belize Hummingbird Expeditions. All Rights Reserved. Belize.<a href="https://belbytedesigns.com/" target="_blank"> [ Powered by Belbyte Designs ]</a></p>
        </div>
        </div>
        
       
	</div>
    

    );
}

export default Footer;

