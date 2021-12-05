import React from "react";
import "../css/UniqueColor.css";
 


const stonesCard = [
     
    {
        img : "https://icestoneusa.com/wp-content/uploads/2020/09/New-forest-fern-768x1024.jpg",
        title : " Forest Fern"
    },
    {
        img : "https://icestoneusa.com/wp-content/uploads/2020/07/GothamGreyLarge-View-.jpg",
        title : "Gotham Grey"
    },
    {
        img : "https://icestoneusa.com/wp-content/uploads/2020/07/Latte_LargeView.jpg",
        title : "Latte"
    },
    {
        img : "https://icestoneusa.com/wp-content/uploads/2020/07/MoroccanRed_Large-View.jpg",
        title : "Moroccan Red"
    },
    {
        img : "https://icestoneusa.com/wp-content/uploads/2020/07/PearlGrey_Large-View.jpg",
        title : "Pearl Grey"
    },
    {
        img : "https://icestoneusa.com/wp-content/uploads/2015/04/SagePearl_Med-View_web.jpg",
        title : "Sage Pearl"
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
