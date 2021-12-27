import { Link } from "react-router-dom";
import "./services.css"







const Services =() =>  (
    <div className="content">
         <div className="website">
         <div className="aboutTitle">
         <h1>SERVICES</h1> 
                  </div>
                       <div className="webservice">
                               <div id="green">
                                <div  className="serviceHead">
                                <h2 className="serviceh1">WEB DEVELOPMENT SERVICES</h2>
                                </div>
                                 <Link to="/Maintaince">
                                   <button className="hbutton" type="button" id="b2">View Package</button>
                                </Link>
                                </div>
                                   <div id="green">
                                <div  className="serviceHead">
                                <h2 className="serviceh1">MOBILE DEVELOPMENT SERVICES</h2>
                                </div>
                                 <Link to="/Maintaince">
                                   <button className="hbutton" type="button" id="b2">View Package</button>
                                </Link>
                                </div>
                           
                              <div id="green">
                                <div  className="serviceHead">
                                <h2 className="serviceh1">MAINTANCE SERVICES</h2>
                                </div>
                                 <Link to="/Maintaince">
                                   <button className="hbutton" type="button" id="b2">View Package</button>
                                </Link>
                                </div>
                         </div>

      </div>
 </div>
    
);


export default Services