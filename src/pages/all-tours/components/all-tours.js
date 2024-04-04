import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"

import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/tours-header.png"

function AllTours() {
 
    const data = useStaticQuery(graphql`
    query TourListings{
          allGraphCmsItemTours {
            edges {
              node {
                id
                tourTitle
                category
                displayPrice
                tourLocation
                slug
                tourDescription {
                  html
                  text
                  raw
                }
                tourImage {
                  id
                  imageAltText
                  imageTitleText
                  galleryImage {
                    gatsbyImageData(placeholder: NONE, quality: 60)
                    url
                  }
                }
              }
            }
          }
      }
    
  `);


  return (  
    <div className='all-tours'>
      <div className='content-header'>
      <div className="header-overlay"></div>
        <StaticImage src={headerImg} quality={60} formats={["auto", "webp", "avif"]} />
         <div className='header-cont'>
            <h1>All Tours</h1>
         </div>
      </div>
      <div className='tour-main'>
        <div className='tours-cont'>
            <h1>Our Experiences</h1>
            <p>Belize will exceed your expectations: it’s more natural, exciting and colourful than what can be seen on our monitors or telephone screens. Whatever your passion, you’ll be able to Belize it with us. Plus, sharing a trip here with people who mean the most to you, will create lifelong memories of breath-taking beauty, dramatic scenery and an incredible admiration for Belize’s vegetation, cave systems and the second largest barrier reef of the western hemisphere.</p>
        </div>
        <div className='tours-grid'>
        {data.allGraphCmsItemTours.edges.map(({ node: blockMap }) => ( 
                          
                        
                          <div className="data-wrapper">
                              <Link key={blockMap.slug} to={`/${blockMap.slug}`}>
                              <div className='overlay-tour'></div>
                              <div className="item-box">
                                  <div className="image-field">
                                      <img src={blockMap.tourImage.galleryImage.url} alt={blockMap.tourImage.imageAltText} />
                                  </div>
                                  <div className="text-box">
                                       <span className="title"> <h2>{blockMap.tourTitle}</h2></span>
                                      
                                      <div id="price">
                                      <p>{blockMap.displayPrice}</p>
                                      </div>
                                     
                                      <div className="primary-info">
                                      
                                      <span className="location">
                                          
                                          <div dangerouslySetInnerHTML={{ __html: blockMap.tourDescription.html }} /> 
                                          <a href="">View Tour</a>
                                      </span>
                                      </div>
                                  </div>
                                
                              </div>
                              </Link>
                          </div>
                       
                         
                          ))} 
        </div>
      </div>
    </div>
  

  );

}

export default AllTours
