import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./../less/footer.scss";

import  FaFacebookF  from "../images/faFacebookF";
import  FaInstagram  from "../images/FaInstagram";

const MainLogo = "../images/bhe-Logo.png";
     

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
                <div className="col-sm-6">
                    <ul className="footer-nav">
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Experiences</a>
                        </li>
                        <li>
                            <a href="">Green Belize</a>
                        </li>
                        <li>
                            <a href="">Meet The Team</a>
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
                                   
                                    <a href="https://www.facebook.com/profile.php?id=100092220665142" target="_blank"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/upsidedowntoursbz/" target="_blank"><FaInstagram /></a>
                                 
                                </li>
                            
                    </ul>
                </div>
            </div>

            <div className="col-sm-4 second">
                <div className="footer-content">
                    <h1>Contact Us</h1>
                    <p>
                        Tel:
                   
                     <a href="tel:5016345385"> +(501) 634-5385</a>
                    </p>
                    <p>
                        Email:
                    
                    <a href="mailto:info@upsidedowntours.com"> info@upsidedowntours.com</a>
                    </p>
                    <p>
                        Hours:
                   
                    <a href=""> Mon - Sun, 8:00am to 4:00pm CST</a>
                    </p>
                </div>
            </div>
            <div className="col-sm-4">
               <div className="footer-content">
                        <h1>Quick Links</h1>

               
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

