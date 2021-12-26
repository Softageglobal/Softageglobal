import React, { useState } from "react";
import axios from "axios";
import background from "../../images/background.jpg";
import tel from "../../images/tel.png";
import gmail from "../../images/gmail.png";
import locate from "../../images/locate.png";
import insta from "../../images/insta.png";
import face from "../../images/face.png";
import twi from "../../images/twi.png";
import yout from "../../images/yout.png";
import whatsapp from "../../images/whatsapp.png";
import "./contact.css";



function Contact () {

   const[input, setInput] = useState({
      fName: "",
      lName: "",
      Email: "",
      phone: "",
      massage: ""
   })

     function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
           
         return{
            ...prevInput,

            [name]: value
         }
      })
     }

    function handleClick(event) {
       event.preventDefault();
       console.log(input);
       const newcontact= {
         fName: input.fName,
         lName: input.lName,
         Email: input.email,
         phone: input.numbers,
         massage: input.massage
       }
       axios.post("http://localhost:3001/create", newcontact)
    }



   return(
    <div className="footer" style={{backgroundImage:`url(${background})`}}>
       <h1 className="contacthead">Contact Us </h1> 
       <p className="contactheadp"> Would you like us to do anything for you? Kindly leave a massage</p>
           <div className="contact-container">
                   <div className="contact-info">
                      <h4 className="h">Contact Information</h4>
                        <p className="contactp">We are available here</p>
                         <div className="icon-text">
                         <img className="fa" src={tel} alt="tel" />
                          <span>+2349030545602</span>
                         </div>
                         <div className="icon-text">
                         <img className="fa" src={gmail} alt="tel" />
                          <span>softage@gmail.com</span>
                         </div>
                         <div className="icon-text">
                         <img className="fa" src={locate} alt="tel" />
                          <span>12 Ibukun Oluwa Street Ilupeju Lagos</span>
                         </div>
                         <div className="social-media"> 
                         <a href="contect" className="icon-circle">
                         <img className="fa" src={face} alt="tel" />
                         </a>
                         <a href="content" className="icon-circle">
                         <img className="fa" src={twi} alt="tel" />
                         </a>
                         <a href="content" className="icon-circle">
                         <img className="fa" src={insta} alt="tel" />
                         </a>   
                         <a href="content" className="icon-circle">
                         <img className="fa" src={yout} alt="tel" />
                         </a>
                         <a href="content" className="icon-circle">
                         <img className="fa" src={whatsapp} alt="tel" />
                         </a>
                       </div>
                       </div>
                <form>
                     <div className="col">
                        <div className="form-group">
                           <label>First Name</label>
                           <input onChange={handleChange} name="fName" value={input.fName} autoComplete="off" type="text"/>
                        </div>
                        <div className="form-group">
                        <label>last Name</label>
                        <input onChange={handleChange} name="lName" value={input.lName} autoComplete="off" type="text"/>
                     </div>
                     </div>
                     <div className="col">
                        <div className="form-group">
                           <label>E-mail</label>
                           <input onChange={handleChange} name="Email" value={input.email} autoComplete="off" type="email"/>
                        </div>
                        <div className="form-group">
                        <label>phone number</label>
                        <input onChange={handleChange} name="phone" value={input.numbers} autoComplete="off" type="TEL"/>
                     </div>
                     </div>
                     <label className="label-radio">What would you like us to do for you?</label>
                     <div id="radio-b">
                           <div className="radio-buttons">
                               <input type="radio" id="websites" name="type" value="web"/><label for="website">website and mobile application</label>
                           </div>
                           <div className="radio-buttons">
                              <input type="radio" id="teaching" name="type" value="teaching"/><label for="teaching">teach you how to code</label>
                           </div>
                           <div className="radio-buttons">
                              <input type="radio" id="idea" name="type" value="idea"/>
                              <label  for="idea">Help build your idea</label>
                           </div>
                        </div>
                        <div className="col">
                        <div className="form-group">
                           <label>Massage</label>
                           <textarea onChange={handleChange} name="massage" value={input.massage} autoComplete="off"></textarea>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-group">
                           <button onClick={handleClick} className="hbutton">Submit</button>
                        </div>
                        </div>
                </form>        
             </div>
 </div>
   );
}


export default Contact