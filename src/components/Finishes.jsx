import React from 'react'
import "../css/Finishes.css";
//finishes images
import crystal from "../Assets/finishes/crystal.png"
import sandblast from "../Assets/finishes/sandblast.png"
import concrete from "../Assets/finishes/concrete.png"
import patina from "../Assets/finishes/patina.png"
//clients images
 
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

const clients = ["https://static.wixstatic.com/media/aefe5e_3bc11534ae4445f394a85b262fe5277b~mv2.png/v1/fill/w_147,h_52,al_c,q_85,usm_0.66_1.00_0.01/aefe5e_3bc11534ae4445f394a85b262fe5277b~mv2.webp"  , "https://static.wixstatic.com/media/aefe5e_24a43ad4c75a43338eb430ec3a391791~mv2.png/v1/fill/w_159,h_89,al_c,q_85,usm_0.66_1.00_0.01/aefe5e_24a43ad4c75a43338eb430ec3a391791~mv2.webp" , "https://static.wixstatic.com/media/aefe5e_b592ebd7aa854fb9b98a785afe1278c6~mv2.png/v1/fill/w_147,h_132,al_c,q_85,usm_0.66_1.00_0.01/aefe5e_b592ebd7aa854fb9b98a785afe1278c6~mv2.webp" , "https://static.wixstatic.com/media/aefe5e_990d256523c3451f8e6e1577cc4f81b4~mv2.png/v1/fill/w_147,h_52,al_c,q_85,usm_0.66_1.00_0.01/aefe5e_990d256523c3451f8e6e1577cc4f81b4~mv2.webp" , "https://static.wixstatic.com/media/aefe5e_a908b17d091143eb8db1aab1f3888058~mv2.png/v1/fill/w_146,h_81,al_c,q_85,usm_0.66_1.00_0.01/aefe5e_a908b17d091143eb8db1aab1f3888058~mv2.webp"]

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
