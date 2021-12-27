import React from "react";
import { Link } from "react-router-dom";


function SliderContent({ activeIndex, imageSlider }) {
    return (
        <div className="banner">
            <div className="slider">
        <section>
            
            {imageSlider.map((slide, index) => (
                <div
                key={index}
                className={index === activeIndex? "slides active" : "inactive"}>
                <img id="slideImg" src={slide.urls }  alt=""/>
                <div className="overlay">
                <div className="title">
                  <h1>LET YOUR PASSION PAY YOU!</h1>
                  <h3>Spacialist in Mobile and Web Development Services</h3>
                  <div className="bigbutton">
                     <Link to="/services">
                     <button className="hbutton" type="button" id="b2">Get Website</button>
                    </Link>
                    <Link to="/Contact">
                    <button className="hbutton" type="button" id="b2">Join Us</button>
                    </Link>
                  </div>
                </div>
            </div>
                </div>
                
              
            ))}
        </section>
             </div>
        </div>
    );
}
     


export default SliderContent