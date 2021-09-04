import React from 'react'
import Hand from "../Assets/hand.png"
import ban from "../Assets/ban.png"
import clock from "../Assets/clock.png"
import trio from "../Assets/trio.jpg"
import makeM from "../Assets/makeM.png"
import recycle from "../Assets/recycle.png"
import "../css/brands.css";
 
const logo = [ 
    {
        img : Hand,
        title : "Handmade"
    },
    {
        img : recycle,
        title : "upcycled Raw Material"
    },
    {
        img : makeM,
        title : "Made In India"
    },
    {
        img : trio,
        title : "Diverse Range"
    },
    {
        img : ban,
        title : "Weather Resistant"
    },{
        img : clock,
        title : "Easy & Fast Application"
    }
]
function Brands() {
    return (
        <div className="brands">
            <div className="brandRow">
                {
                    logo.map((values , index) => (
                        <div className="brand__Card">
                        <img src={values.img} alt="image1"></img>
    
                        <p>{values.title}</p>
                    </div>
                    ))
                }
             
            </div>
        </div>
    )
}

export default Brands
