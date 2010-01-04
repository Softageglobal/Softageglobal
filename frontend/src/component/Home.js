import React from "react";
import Navbar from "./navbar/NavBar";
import Services from "./main/Services";
import About from "./main/About/About";
import Product from "./main/Product";
import Slider from "./header/Slider";
import Contact from "./footer/Contact";




const Home =() =>  (
    <div>
  <Navbar />
  <Slider />
  <About />
  <Product />
  <Services />
  <Contact />
  </div>
    
);


export default Home