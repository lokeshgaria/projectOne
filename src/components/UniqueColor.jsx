import React from "react";
import "../css/UniqueColor.css";
import Timber from "../Assets/stones/Timber.jpg"
import stone1 from "../Assets/stones/stone1.jpg"
import stone2 from "../Assets/stones/stone2.jpg"
import stone3 from "../Assets/stones/stone3.jpg"
import stone4 from "../Assets/stones/stone4.jpg"
import stone5 from "../Assets/stones/stone5.jpg"
import stone8 from "../Assets/stones/stone8.jpg"
import stone7 from "../Assets/stones/stone7.jpg"


const stonesCard = [
    {
        img : stone1,
        title : "cloudy white"
    },
    {
        img : stone2,
        title : "European Sand"
    },
    {
        img : stone3,
        title : "graphite"
    },
    {
        img : stone4,
        title : "mocha"
    },
    {
        img : stone5,
        title : "statuario"
    },
    {
        img : Timber,
        title : "timber"
    },
    {
        img : stone7,
        title : "uncolored"
    },
    {
        img : stone8,
        title : "brick red"
    },
     

]
function UniqueColor() {
  return (
    <div className="unique">
      <div className="OurUniqDiv">
        <h1>OUR UNIQUE COLOR SYSTEM</h1>

        <div className="cardRow">
            {
                stonesCard.map((values , index) => (
                    <div className="main_card" key={index}>
                    <div className="Card__img">
                        <img src={values.img} alt="timber"></img>
                    </div>
                     <div className="card__name">
                         <span>
                             {values.title}
                         </span>
                     </div>
                </div>
                ))
            }
        
        </div>
      </div>
    </div>
  );
}

export default UniqueColor;
