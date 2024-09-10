import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Row, Col, Carousel } from "react-bootstrap"
import { graphql } from "gatsby"
import "./details.scss"
import Layout from "../components/layout"
import Seo from "../components/seo" 



export const query = graphql`
query ToursDeferredQuery($slug: String!) {
    graphCmsItemTours(slug: { eq: $slug }) {
        id
        slug
        tourTitle
        tourLocation
        displayPrice 
        tourPrice{
          html
          text
          raw
        }
        
        tourDescription {
            html
            raw
            text
          }
          
          tourGallery {
            id
            imageAltText
            imageTitleText
            galleryImage {
              gatsbyImageData(placeholder: NONE, quality: 60)
              
              url
            }
          }
          tourDuration {
            html
            text
            raw
          }
          tourUtilities {
            html
            raw
            text
          }
          tourIncludes {
            html
            raw
            text
          }
    }
}
  
`
const ToursDeferred = ({data, index}) => {

    return (
        <Layout>
            <Seo title={data.graphCmsItemTours.tourTitle + " at " + data.graphCmsItemTours.tourLocation + ' with Patrick Tour Belize'} />


            <div className="tours-deferred">
                <Row>
                    


                <Col sm={{ span:7, order: 'first' }} xs={{ order: 'first' }} id="right">
                        <div className="image-gallery">
                            <Carousel fade key={index}>
                                {(data.graphCmsItemTours.tourGallery || []).map((galleryMap, id) => (
                                    <Carousel.Item key={id}>
                                        <img 
                                            src={galleryMap.galleryImage.url} 
                                            alt={galleryMap.imageAltText} 
                                            className="d-block w-100"
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>                            
                        </div>
                    </Col>
                    <Col sm={{ span:5, order: 'last' }} xs={{ order: 'last' }} id="left">
                        <div className="text-field" key={index}>
                            <h2>{data.graphCmsItemTours.tourTitle}</h2>
       
                            <h4>{data.graphCmsItemTours.tourLocation}</h4>
                            <div dangerouslySetInnerHTML={{ __html: data.graphCmsItemTours.tourDescription.html }} />
                        </div>
                        <div className="contact-cta tours">
                         <h3>Tour Prices</h3>
                         <div dangerouslySetInnerHTML={{ __html: data.graphCmsItemTours.tourPrice.html }} />
                        </div>                   
                        <div className="contact-cta tours">
                         <h3>Tour Duration</h3>
                         <div dangerouslySetInnerHTML={{ __html: data.graphCmsItemTours.tourDuration.html }} />
                        </div>
                        <div className="contact-cta tours">
                         <h3>Tour Includes</h3>
                         <div dangerouslySetInnerHTML={{ __html: data.graphCmsItemTours.tourIncludes.html }} />
                        </div>
                        <div className="contact-cta tours">
                         <h3>What to Bring</h3>
                         <div dangerouslySetInnerHTML={{ __html: data.graphCmsItemTours.tourUtilities.html }} />
                        </div>
                        <div className="contact-cta tours">
                         <h3>Book Tour</h3>
                         <div class="elfsight-app-a081b12f-cf14-4c88-a498-719916708cd1" data-elfsight-app-lazy></div>
                    </div>
                    <div className="contact-cta tours">
                         <h3>Cancellation Policy</h3>
                         <div><p>Belize Hummingbird Expeditions requests a 50% deposit on services reserved to confirm a reservation. The final payment is due 21 days prior to the arrival date. A full refund is provided less than US$ 50.00 or BZ$ 100.00 for administrative costs for cancellations received 21 days or more prior to arrival date. A refund of 50% applies to cancellations received 15-20 days prior to the arrival date. No refunds are offered for cancellations received 14 days or less prior to the arrival date.<br /><br />

                         Belize Hummingbird Expeditions cannot be held responsible or liable for cancellations due to reasons beyond our control such as natural disasters, including but not limited to heavy rains, flooding, storms, or hurricanes. At whatever time possible another similar available tour can be substituted for tour cancellation.</p></div>
                    </div>
                    </Col>
                    
                </Row>
            </div>
        </Layout>
        );
    };
    
export default ToursDeferred;
