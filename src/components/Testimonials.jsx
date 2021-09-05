import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../css/Testimonials.css";
 
import Testimonial1 from "../Assets/testimonial/testimonial.jpg";
import Testimonial2 from "../Assets/testimonial/testimonial2.jpg";
import Testimonial3 from "../Assets/testimonial/testimonial3.jpg";
import user1 from "../Assets/testimonial/userImg.png";

const arrayData = [Testimonial1, Testimonial2, Testimonial3];

function Testimonials() {
  return (
    <div className="testimonial">
      <h1>Testimonials</h1>

      <Carousel>
        {arrayData.map((values, index) => (
          <Carousel.Item key={index}>
            <Row className="testimonial_bg">
              <Col>
                <img src={values} alt="" className="img_fluid" />
              </Col>
              <Col className="testimonial__right">
                <div className="testimonial__details">
                  <p>
                    FlexStone is the beginning of a new era in Architect design.
                    Awesome design. Unique Collection. Innovation in stone
                    design. Perfection in work. Best Quality. Punctual in
                    project completion. Updating & Upgrading stone design every
                    time. Cooperative & helping team. Thank you Flexstone team
                    for the excellent work for my home. Working pattern is
                    excellent. I think that Home is incomplete without Flexstone
                    design. Awesome work.{" "}
                  </p>

                  <div className="details__footer">
                    <div className="testimonialImg">
                      <img src={user1} alt="userIMg" className="img_fluid" />
                    </div>

                    <div className="userDetails">
                      <span className="userName">Dr. Arvind jain</span>
                      <span className="userAddress">Ahmedabad</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

    
    </div>
  );
}

export default Testimonials;
