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
            <p>Experience an unparalleled connection to the rich and diverse jungles of Belize, home to the majestic Maya Mountains and an extensive network of cave systems and underground rivers. This extraordinary ecosystem boasts over 4,000 species of flowering plants, including rare orchids and towering trees. The jungle teems with wildlife, offering a haven for 145 species of mammals, such as jaguars and howler monkeys, 139 species of reptiles, and an astonishing 500 species of birds, making it a birdwatcher’s paradise.

Belize’s jungle is not only a biodiversity hotspot but also a place of profound spiritual significance. The dense canopy and hidden caves were sacred to the ancient Maya, who saw these lands as the dwelling place of powerful deities. This delicate paradise invites you to explore its wonders and connect with nature on a deeper, spiritual level.</p>
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
