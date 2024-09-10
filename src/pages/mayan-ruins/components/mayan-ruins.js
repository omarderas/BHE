import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/bucketlist-header.png"

function MayanRuins() {
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
                <h1>Mayan Glory</h1>
         </div>
      </div>
      <div className='jungle-main'>
        <div className='jungle-cont'>
            <h1>Our Experiences</h1>
            <p>The Maya ruins of Belize encompass a collection of historically significant pre-Columbian archaeological sites that offer a glimpse into the grandeur of the ancient Maya civilization. Located in the southern Maya lowlands, a key region of the Mesoamerican cultural area, these sites were vibrant centers of activity from the Preclassic period (2000 BCE–200 CE) through to the arrival of the Spanish in the 16th century and beyond.

These archaeological sites, such as Caracol, Xunantunich, and Lamanai, showcase the architectural and cultural achievements of the Maya, including towering temples, intricate carvings, and expansive plazas. They were not only political and economic hubs but also held deep religious significance, serving as venues for ceremonies and rituals that connected the Maya to their gods and the cosmos. Today, these ruins stand as a testament to the resilience and sophistication of the Maya, offering invaluable insights into their way of life and enduring legacy.</p>
        </div>
        <div className='tours-grid'>
        {data.allGraphCmsItemTours.edges.map(({ node: blockMap }) => ( 
          <>
                  {blockMap.category.includes("mayanRuins")
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

export default MayanRuins
