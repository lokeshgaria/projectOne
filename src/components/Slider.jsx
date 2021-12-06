import React from "react";
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import "../css/Slider.css"
 
const sliderArray = [
    {
        id:1,
        img : "https://images.pexels.com/photos/2909099/pexels-photo-2909099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        caption : "Let your walls tell the story",
    },
   
    // {
    //     id:2,
    //     img : "https://images.pexels.com/photos/9361599/pexels-photo-9361599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1940",
        
    // }
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
