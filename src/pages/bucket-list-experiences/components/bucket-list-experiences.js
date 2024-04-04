import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/bucketlist-header.png"

function BucketList() {
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
    <div className='bucket-main'>
        <div className='content-header'>
         <div className="header-overlay"></div>
            <StaticImage src={headerImg} quality={60} formats={["auto", "webp", "avif"]} />
            <div className='header-cont'>
                <h1>Bucket List Experiences</h1>
         </div>
      </div>
      <div className='bucket-main'>
        <div className='bucket-cont'>
            <h1>Our Experiences</h1>
            <p>Unforgettable moments in the Central American Caribbean that only Belize can provide, whether you have dreamed of snorkelling with whale sharks or diving the Great Blue Hole, flying on the fastest zip-line or taking an epic caving adventure!</p>
        </div>
        <div className='tours-grid'>
        {data.allGraphCmsItemTours.edges.map(({ node: blockMap }) => ( 
          <>
                          {blockMap.category.includes("Bucket_List")
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

export default BucketList
