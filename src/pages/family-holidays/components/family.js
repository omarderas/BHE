import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/family-header.png"
const travel = "../../../images/travel-img.png"
const reunion = "../../../images/reunion-img.png"
const group = "../../../images/group-img.png"

function Family() {
  return (
    <div className='family-main'>
              <div className='content-header'>
         <div className="header-overlay"></div>
            <StaticImage src={headerImg} quality={60} formats={["auto", "webp", "avif"]} />
            <div className='header-cont'>
                <h1>Family Holidays</h1>
         </div>
      </div>
      <div className='family-main'>
        <div className='family-cont'>
            <h1>Our Experiences</h1>
            <p>Family-friendly resorts and tours, lodges and hotels designed for multigenerational tourism with a wide variety of activities and quality-time opportunities for varied ages exist throughout Belize, it is just a matter of finding the right contacts to help you find the right location based on your family holiday plans.</p>
        </div>
        <div className='family-grid'>
            <div className='row'>
               <div className='col-sm-4'>
               <StaticImage src={travel} quality={60} formats={["auto", "webp", "avif"]} />
               </div>
               <div className='col-sm-8'>
                 <div className='family-cont'>
                    <h1>FAMILY TRAVEL</h1>
                    <p>Sometimes families need private transportation and their own private tour guide which is something that we are happy to arrange if you contact us.</p>
                     <a href="/contact-us">
                      Arrange with Us
                     </a>
                 </div>
               </div>
            </div>
            <div className='row'>
               <div className='col-sm-4'>
               <StaticImage src={reunion} quality={60} formats={["auto", "webp", "avif"]} />
               </div>
               <div className='col-sm-8'>
                 <div className='family-cont'>
                    <h1>BELIZE FAMILY REUNION</h1>
                    <p>We provide tours, transportation/driver and professional guiding services for the Cayo District, Hummingbird Highway, Hopkins and Placencia.</p>
                     <a href="/contact-us">
                      Arrange with Us
                     </a>
                 </div>
               </div>
            </div>
            <div className='row'>
               <div className='col-sm-4'>
               <StaticImage src={group} quality={60} formats={["auto", "webp", "avif"]} />
               </div>
               <div className='col-sm-8'>
                 <div className='family-cont'>
                    <h1>GROUP TRAVEL</h1>
                    <p>Remaining aware that every group is different, have different wants and expectations, we can customize a Belize Expeditions package for you.</p>
                     <a href="/contact-us">
                      Arrange with Us
                     </a>
                 </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Family
