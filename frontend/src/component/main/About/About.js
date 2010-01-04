import React from "react";
import AboutCard from "./AboutCard";
import AboutConstant from "./AboutConstant";



const About = () => {
   return(
      <AboutCard 
       heading= {AboutConstant[0].heading}
       info= {AboutConstant[0].info}
      /> 
   )
}
    

export default About