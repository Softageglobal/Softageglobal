import React from "react";
import "./about.css";



const AboutCard = (props) =>  {

    return(
          <div className="content">
               <div className="about">
                     <div className="name" id="ala">
                     <div className="story" >
                         <h2>{props.heading}</h2>
                         <p>{props.info}</p>
                  </div>
               </div>
              </div>
         </div>
    )}

export default AboutCard;