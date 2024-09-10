import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/cavesHeader.png"

function CaveAdventures() {
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
                <h1>Cave Adventures</h1>
         </div>
      </div>
      <div className='jungle-main'>
        <div className='jungle-cont'>
            <h1>Our Experiences</h1>
            <p>Belize's extensive river systems have carved intricate networks of caves and caverns into the limestone bedrock over millennia. Some of these larger caves remain accessible by river, offering visitors the unique experience of exploring them by floating on inner tubes or navigating through on kayaks.

Many of these caves held deep spiritual significance for the ancient Maya, who believed they served as portals to Xibalba, the Maya underworld. These sacred sites were often used for rituals, providing a mystical connection between the earthly realm and the spiritual world beyond.</p>
        </div>
        <div className='tours-grid'>
        {data.allGraphCmsItemTours.edges.map(({ node: blockMap }) => ( 
          <>
                  {blockMap.category.includes("caveTours")
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

export default CaveAdventures
