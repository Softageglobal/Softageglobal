import React, {useEffect, useState} from "react";
import SliderContent from "./SliderContent";
import imageSlider from "./imageSlider";
import Arrows from "./arrow";
import "./slider.css";



const len = imageSlider.length -1;


function Slider(props) {
    
    const[activeIndex, setActiveIndex] = useState(0);

    useEffect (() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex +1);
        },   10000);
        return()  => clearInterval(interval);

    }, [activeIndex]);
    
    return (
        
        <div className="slider-container">
    
         <SliderContent activeIndex={activeIndex} imageSlider={imageSlider}/>
         <Arrows 
             prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1) }
            nexSlide={() =>
               setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
             />
             </div>
    );
};


export default Slider