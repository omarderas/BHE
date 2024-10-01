import * as React from "react"
import { Link } from "gatsby"
import "./../less/header.scss";
import "./../less/main.scss";
import { StaticImage } from "gatsby-plugin-image"
import Sticky from 'react-sticky-el';
import  FaFacebookF  from "../images/faFacebookF";
import  FaInstagram  from "../images/FaInstagram";

const MainLogo = "../images/bhe-main-new.png";


const Header = ({ siteTitle }) => (
 
 <header>
    <div className="top-bar row">
      <div className="contents">
             
      <div className="col-sm-6">
<ul className="social">
    <li>
      <a href="https://www.facebook.com/profile.php?id=100092220665142" target="_blank">
          <FaFacebookF/>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/upsidedowntoursbz/" target="_blank">
      <FaInstagram/>
      </a>
    </li>

</ul>
      </div>
      <div className="col-sm-6 social">
      <div className="contact-block">


          <a href="tel:635-8683" id="address">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <span>TEL: +501 634-5385 </span>
          </a>
          <a href="mailto:info@upsidedowntours.com" id="cell">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <span>Email: info@upsidedowntours.com</span>
          </a>
        </div>
      </div>

      </div>
    </div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">  
  <StaticImage src={MainLogo} quality={60} formats={["auto", "webp", "avif"]} />
   <div id="header-name">Belize Hummingbird Expeditions</div>
  </a>
  

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/all-tours/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Experience Belize
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
       
        <a class="dropdown-item" href="/all-tours/">Bucket List Experiences</a>
        <a class="dropdown-item" href="/jungle-adventures/">Jungle Adventures</a>
        <a class="dropdown-item" href="/cave-adventures/">Cave Adventures</a>
        <a class="dropdown-item" href="/mayan-ruins/">Mayan Ruins</a>
        
        <a class="dropdown-item" href="/family-holidays/">Family Holidays</a>
        <a class="dropdown-item" href="/sustainable-travel/">Sustainable Travel</a>
          <a class="dropdown-item" href="/private-services/">Private Services</a>
      

          
             
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/all-tours" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Tours
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="/all-tours">View All Tours</a>
        <a class="dropdown-item" href="/cave-tubing-in-st-hermans-blue-hole-national-park-in-belize/">Cave Tubing</a>
        <a class="dropdown-item" href="/7-mile-cave-tubing-the-caves-branch-river-in-belize/">7-Mile Cave Tubing</a>
        <a class="dropdown-item" href="/7-mile-cave-kayaking-the-caves-branch-river-in-belize/">7-Mile Cave Kayaking</a>
        <a class="dropdown-item" href="/cave-exploration-and-camping-hummingbird-highway-in-belize/">Cave Exploration & Camping</a>

        <a class="dropdown-item" href="/tikal-peten-department-in-northern-guatemala-belize-tour/">Tikal's Mayan Glory</a>

        <a class="dropdown-item" href="/birding-tour-in-belize/">Birding</a>
      
  
       

          
             
        </div>
      </li>
 
      <li class="nav-item">
        <a class="nav-link" href="/about-us">About Us</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="/contact-us">Contact Us</a>
      </li>
    </ul>
   
   
  </div>

</nav>
  </header>
  
)

export default Header
