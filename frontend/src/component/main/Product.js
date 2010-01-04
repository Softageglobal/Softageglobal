import React from "react";
import currency from "../../images/currency.png";
import ebook from "../../images/ebook.png";
import learn from "../../images/learn.jpg";
import "./product.css"


const Product =() =>  (
    <div className="content">
    <div className="product-background">
    <div className="aboutTitle">
    <h1>OUR PRODUCTS</h1> 
             </div>
    <div className="product-page">
     <div className="product">
     <div className="currency">
     <h2>WEB SERVICE</h2>
     <img className="ebook ebookc" src ={currency}  alt="softage logo"/>
     <p className="product-p">Checkout our free currency converter website<br></br> with live update on currency matters</p>
     <button className="hbutton">visit</button>
     </div>
     </div>
     <div className="product">
     <div className="currency">
     <h2>BOOKS</h2>
     <img className="ebook" src ={ebook}  alt="softage logo"/>
     <p className="product-p" id="eb">Complete web development  course for <br></br>everyone
            at a very affordable price </p>
            <button className="hbutton" >Request</button>
    </div>
     </div>
     <div className="product">
     <div className="currency">
     <h2>TRAINING</h2>
     <img className="learnpic" src ={learn}  alt="softage teach tutorials"/>
     <p className="product-p">How would you like a one-on-one leason<br></br> on mobile and web development?</p>
     <button className="hbutton">Request</button>
     </div>
     </div>
     </div>
     </div>
 </div>
    
);


export default Product