import React from "react";
import logo9_14_12718 from "../../images/logo9_14_12718.png";
import slider4 from "../../images/slider4.jpg";
import slider5 from "../../images/slider5.jpg";
import slider6 from "../../images/slider6.jpg";
import "./about.css"




const About = () =>  (
        <div className="content">
        <div className="about">
        <div className="name" id="ala">
            <img className="image-logo" src ={logo9_14_12718}  alt="softage logo"/>
               <div className="story" >
                <h2>Our Name</h2>
                   <p>Softage as the name implies is a team of software 
                   Engineers dedicated to sorting, analyzing and providing
                   perfect solutions to the chanllenges and problems faced by
                   mankind. Through the building of modern technology software and gadgets,
                    We work day and night transforming ideas into usable software
                    apps and gadgets thereby making life experience better and
                    lovable.
                    We also build and maintain website for people for a very low cost
                    </p>
                    </div>
            </div>
            <div className="name">
            <img className="image-logo2" src ={slider6}  alt="softage logo"/> 
               <div className="story2">
                <h2>Discovering problems In modern Day Businesses</h2>
                   <p>Softage also looks into modern day Businesses and occupation of life,
                      with the intention of making Business more profitable and stress 
                      free. We belive in making everyone happy and feeling special because,
                      we grow bigger and stronger when everyone is happy.<br></br>
                      It also create room for innovations and success.
                      
                    </p>
                    </div> 
            </div>
            <div className="name">
            <img className="image-logo2" src ={slider5}  alt="softage logo"/>  
               <div className="story2">
                <h2> Problems Solving</h2>
                   <p>At Softage, when ever we discover challenges in businesses or human life, 
                      we view it as an important opportunity 
                      to show case our essiential tech skills.
                      We create solutions to life`s big problems ranging from Business, to life Enhancement
                      Materials, such as computers and medical equipment. <br></br>
                      One big way we do this is through educting on how to use technology to solve complexed issues. We offer online tutorials 
                      and even one on one lessons to those willing to learn how to code.
                    </p>
                    </div>
            </div>
            <div className="name">
            <img className="image-logo2" src ={slider4}  alt="softage logo"/>  
            <div className="story2">
             <h2>Making The World Happy</h2>
                <p>Softage has a common and import' goal MAKE EVERYONE HAPPY. Therefore,
                   we view it as a priviledge when poeple from all part of the world tap
                   into our success story and become one of many who have either learned to
                   use technology from us, or used our service to build and maintain websites and mobile
                   apps. 
                 </p>
                 </div>
            </div>
        </div>
    </div>  
 );
    

export default About