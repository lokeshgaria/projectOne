import React from 'react'
import "../css/Finishes.css";
//finishes images
import crystal from "../Assets/finishes/crystal.png"
import sandblast from "../Assets/finishes/sandblast.png"
import concrete from "../Assets/finishes/concrete.png"
import patina from "../Assets/finishes/patina.png"
//clients images
import AAI from "../Assets/finishes/AAI.png"
import lodha from "../Assets/finishes/lodha.png"
import tata from "../Assets/finishes/tata.png"
import haldirams from "../Assets/finishes/haldiram.png"
import infosys from "../Assets/finishes/infosys.png"

const finishes = [
    {
        img : crystal,
        title : "Crystal"
    },
    {
        img : sandblast,
        title : "Sandblast"
    },
    {
        img : concrete,
        title : "Corten-Crete"
    },
    {
        img : patina,
        title : "Patina"
    },
]

const clients = [infosys  , lodha , tata , haldirams , AAI]

function Finishes() {
    return (
        <div className="finishes">
          <div className="finishes__heading">
              <h2>FINISHES</h2>

              <div className="finishes__card">
                  {
                      finishes.map((values , index) => (
                        <div className="stone__card" key={index} >
                        <img src={values.img} alt="stone img" />
                         <span>{values.title}</span>
                    </div>
                      ))
                  }
                 
              </div>
              <div className="clients">
              <h2>CLIENTS</h2>

              <div className="clients__card">
                  {
                      clients.map((values ,index) => (
                        <div className="client__card" key={index}  >
                        <img src={values} alt="stone img" />
                         
                    </div>
                      ))
                  }
                 
              </div>
              </div>

          </div>
        </div>
    )
}

export default Finishes;
