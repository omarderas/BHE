import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/jungle-header.png"

function JungleAdventures() {
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
    <div className='jungle-main'>
     <div className='content-header'>
         <div className="header-overlay"></div>
            <StaticImage src={headerImg} quality={60} formats={["auto", "webp", "avif"]} />
            <div className='header-cont'>
                <h1>Jungle Adventures</h1>
         </div>
      </div>
      <div className='jungle-main'>
        <div className='jungle-cont'>
            <h1>Our Experiences</h1>
            <p>Get closer than you ever thought possible to the most impressive jungles of the Americas, the Maya Mountains with the myriad of cave systems and underground rivers, over 4,000 different flowering plants, 145 species of mammals, 139 species of reptiles and over 500 species of birds – Belize’s jungle is a delicate paradise with a spiritual touch!</p>
        </div>
        <div className='tours-grid'>
        {data.allGraphCmsItemTours.edges.map(({ node: blockMap }) => ( 
          <>
                  {blockMap.category.includes("Jungle_Adventures")
                          ? 
                        
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
                          :
                          <></>
                          }
                         </>
                ))} 
        </div>
      </div>
    </div>
  )
}

export default JungleAdventures
