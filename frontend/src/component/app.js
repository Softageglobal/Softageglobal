import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from './main/About';
import Product from "./main/Product";
import Services from "./main/Services";
import Home from "./Home";
import Contact from './footer/Contact';
import Webdev from './main/Webdev';
import Mobiledev from './main/Mobiledev';
import Maintance from './main/Maintance';

const App = () => {
     return (
            
             <Router>
                 <Routes>
             <Route path="/" element={<Home />} />
             <Route path="About" element={<About />} />
             <Route path="Services" element={<Services />} />
             <Route path="Contact" element={<Contact />} />
             <Route path="Product" element={<Product />} />
             <Route path="/Webdev" element={<Webdev />} />
             <Route path="/Mobiledev" element={<Mobiledev />} />
             <Route path="/Maintaince" element={<Maintance />} />
               </Routes>
             </Router>
    );
 }
  export default App;