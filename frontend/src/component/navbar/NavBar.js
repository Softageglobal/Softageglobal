import React, { useState } from "react";
import logo9_14_12718 from "../../images/logo9_14_12718.png";
import menu from "../../images/menu.png";
import {Link} from "react-router-dom";
import "./nav.css"



const Navbar = () => {
       
     const [navlinkopen, navlinktoggle] = useState(false);

     const handle = () => {
        navlinktoggle (!navlinkopen);
     };

const renderClasses = () => {
   let classes = "navlink";

   if (navlinkopen) {
      classes += "active"
   }
    return classes
}
    return( 
      <div  className="nav">
        
          <div className="logo">
          <img src ={logo9_14_12718}  alt="mylogo"/>
          </div>
          <ul  className={ renderClasses()} id="nav-link">
             <Link to="/About">
             <li>About</li>
             </Link>
             <Link to="/Services">
               <li>Services</li>
             </Link>
             <Link to="/Product">
               <li>Product</li>
             </Link>
             <Link to="/Contact">
               <li>Contact us</li>
             </Link>
          </ul>
          <div onClick={handle} className="menu-icons">
          <img className="logo2" src ={menu}  alt="menubar" />
          </div>
        </div>
    );
};


export default Navbar;