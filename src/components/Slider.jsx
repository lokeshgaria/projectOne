import React from "react";
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import slider1 from "../Assets/Navbar/slider1.jpg";
import slider2 from "../Assets/Navbar/slider2.jpg";
import "../css/Slider.css"
 
const sliderArray = [
    {
        id:1,
        img : slider1,
        caption : "Let your walls tell the story",
    },
    {
        id:2,
        img : slider2,
        caption : "Add a touch   of elegance",
    }
]
function Slider() {
  return (
    <div className="slider">
      <Carousel prevIcon={false} nextIcon={false}>

          {
              sliderArray.map((values) => (
                <Carousel.Item interval={1200} key={values.id}>
                <img
                  className="d-block w-100 sliderImg"
                  src={values.img}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{values.caption}</h3>
                 
                </Carousel.Caption>
              </Carousel.Item>
              ))
          }
     
      
        
      </Carousel>
    </div>
  );
}

export default Slider;
