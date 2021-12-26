import React, { useState } from "react";
import "./services.css"

function ShowMore({children, maxCharacter = 8}){

   const [isTruncated, setIsTruncated] = useState(true);

   const resultString = isTruncated ? children.slice(0, maxCharacter) : children;


   function toggleIsTruncated(props) {
      setIsTruncated(!isTruncated);
   }

   return (
      <p className="showmore">
         {resultString}
         <span onClick={toggleIsTruncated} className="show">
            {isTruncated ? "See More" : "Show Less"}
            </span>
      </p>
   );
}


const Services =() =>  (
    <div className="content">
         <div className="website">
         <div className="aboutTitle">
         <h1>SERVICES</h1> 
                  </div>
                       <div className="webservice">
                               <div  className="serviceHead">
                                 <h2>WEB DEVELOPMENT SERVICES</h2>
                                   </div>
                                   <div className="web">
                           <div className="servicetype">
                              <ShowMore>
                                 <h3 className="serviceh3">PERSONAL WEBSITE<p>#50,000</p></h3>
                                    <p className="pack">Free domain  </p>
                                    <p className="pack" id="ye">Social links  </p>
                                    <p className="pack" id="blue">3 Month free web hosting  </p>
                                    <p className="pack" id="red">3 Pages website  </p>
                                    <p className="pack" id="purple"> Optimized mailing system  </p>
                                    <p className="pack" id="yell">99.9% Service uptime</p>
                                    <p className="pack" id="yellow">Google adsense feature </p>
                                    </ShowMore>  
                                    <button className="hbutton" id="b2">Requst</button>
                                   
                           </div>   
                           <div className="servicetype">
                                <ShowMore>
                                   <h3 className="serviceh3" id="Ecomerce">ECOMERCE WEBSITE<p>#150,000</p></h3>
                                   <p className="pack" id="green">Payment system </p>
                                   <p className="pack">Free domain  </p>
                                   <p className="pack" id="black">Social links  </p>
                                   <p className="pack" id="blue">3 Month free web hosting  </p>
                                   <p className="pack" id="red">3 Pages website  </p>
                                   <p className="pack" id="purple"> Optimized mailing system  </p>
                                   <p className="pack" id="yell">99.9% Service uptime</p>
                                   <p className="pack" id="yellow">Google adsense feature </p>
                                   <p className="pack" id="gre">Premium logo</p>
                                   <p className="pack" id="gree">Content management system</p>
                                   <p className="pack" id="green">Mobile responsiveness </p>
                                   </ShowMore>
                                   <button className="hbutton" id="b2">Requst</button> 
                           </div> 
                           <div className="servicetype">
                                    <ShowMore>
                                     <h3 className="serviceh3" id="super">SUPER PARK<p>#199,000</p></h3>
                                     <p className="pack">Free domain name </p>
                                     <p className="pack" id="ye">Social links  </p>
                                     <p className="pack" id="blue">3 Month free web hosting  </p>
                                     <p className="pack" id="red">3 Pages website  </p>
                                     <p className="pack" id="purple"> Optimized mailing system  </p>
                                     <p className="pack" id="yell">99.9% Service uptime</p>
                                     <p className="pack" id="yellow">Google adsense feature </p>
                                     <p className="pack" id="red">SEO</p>
                                     <p className="pack" id="gre">Premium logo</p>
                                     <p className="pack" id="gree">Content management system</p>
                                     <p className="pack" id="green">Mobile responsiveness </p>
                                     <p className="pack" id="yellow">Affiliate system</p>
                                     <p className="pack" id="re">30 Days digital marketing Services</p>
                                     <p className="pack" id="red">Payment system</p>
                                     <p className="pack"> free super Park mobile app</p>
                                     </ShowMore>
                                     <button className="hbutton" id="b2">Requst</button>  
                     </div>
                     </div>     
              </div>
              <div className="webservice">
                           <div  className="serviceHead" id="supper">
                                <h2>MOBILE APP DEVELOPMENT</h2>
                             </div>
                             <div className="web">
                           <div className="servicetype">
                                <ShowMore>
                                 <h3 className="serviceh3" id="supper">PERSONAL WEBSITE<p>#100,000</p></h3>
                                    <p className="pack" id="blue">6 Months hosting</p>
                                    <p className="pack" id="red">Multi-page app</p>
                                    <p className="pack" id="purple"> Optimized mailing system  </p>
                                    <p className="pack" id="yell">99.9% Service uptime</p>
                                    <p className="pack" id="yellow">Google adsense feature </p>
                                    <p className="pack" id="yellow">social media links</p>
                                    </ShowMore>
                                    <button className="hbutton" id="b2">Requst</button>
                           </div>   
                        
                           <div className="servicetype">
                              <ShowMore>
                           <h3 className="serviceh3" id="serviceHead">ECOMERCE Website<p>#100,000</p></h3>
                           <p className="pack" id="blue">6 Months app hosting</p>
                           <p className="pack" id="red">3 Pages website  </p>
                           <p className="pack" id="purple"> Optimized mailing system  </p>
                           <p className="pack" id="yell">99.9% Service uptime</p>
                           <p className="pack" id="yellow">Google adsense feature </p>
                           <p className="pack" id="gre">Premium logo</p>
                           <p className="pack" id="gree">Content management system</p>
                           <p className="pack" id="green">Mobile responsiveness </p>
                           </ShowMore>
                           <button className="hbutton" id="b2">requst</button> 
                   </div> 
                   <div className="servicetype">
                      <ShowMore>
                   <h3 className="serviceh3" id="Ecomerce">SUPER PARK<p>#200,000</p></h3>
                   <p className="pack" id="red">Multi-page app</p>
                   <p className="pack" id="purple"> Optimized mailing system  </p>
                   <p className="pack" id="yell">99.9% Service uptime</p>
                   <p className="pack" id="yellow">Google adsense feature </p>
                   <p className="pack" id="gre">Premium logo</p>
                   <p className="pack" id="gree">Content management system</p>
                   <p className="pack" id="green">Mobile responsiveness </p>
                   <p className="pack" id="yellow">Affiliate system</p>
                   <p className="pack" id="re">30 Days digital marketing Services</p>
                   <p className="pack" id="red">Free supper park website</p>
                   </ShowMore>
                   <button className="hbutton" id="b2">Requst</button>
                </div>  
                </div>      
         </div>
         <div className="webservice">
                           <div  className="serviceHead" id="green">
                                <h2>MAINTANCE SERVICES</h2>
                             </div>
                             <div className="web">
                           <div className="servicetype">
                                <ShowMore>
                                 <h3 className="serviceh3" id="supper">PERSONAL<p>#25,000</p></h3>
                                    <p className="pack">Website update</p>
                                    <p className="pack" id="ye">Website security </p>
                                    <p className="pack" id="blue">Malware removal</p>
                                    <p className="pack" id="red">Database optimization</p>
                                    <p className="pack" id="purple">Page optimization</p>
                                    <p className="pack" id="yell">Basic changes</p>
                                    <p className="pack" id="yellow">Quarterly review</p>
                                    <p className="pack" id="gree">Hosting</p>
                                    </ShowMore>
                                    <button className="hbutton" id="b2">Requst</button>
                           </div>   
                           <div className="servicetype">
                              <ShowMore>
                           <h3 className="serviceh3" id="Ecomerce">ECOMERCE<p>#50,000</p></h3>
                           <p className="pack">Website update</p>
                           <p className="pack" id="ye">Website security </p>
                           <p className="pack" id="blue">Malware removal</p>
                           <p className="pack" id="red">Database optimization</p>
                           <p className="pack" id="purple">Page optimization</p>
                           <p className="pack" id="yell">Basic changes</p>
                           <p className="pack" id="yellow">Quarterly review</p>
                           <p className="pack" id="gree">Hosting</p>
                           </ShowMore>
                           <button className="hbutton" id="b2">Requst</button>  
                   </div> 
                   <div className="servicetype">
                      <ShowMore>
                   <h3 className="serviceh3" id="serviceHead">SUPER Park<p>#90,000</p></h3>
                   <p className="pack">Website update</p>
                   <p className="pack" id="ye">Website security </p>
                   <p className="pack" id="blue">Malware removal</p>
                   <p className="pack" id="red">Database optimization</p>
                   <p className="pack" id="purple">Page optimization</p>
                   <p className="pack" id="yell">Basic changes</p>
                   <p className="pack" id="yellow">Quarterly review</p>
                   <p className="pack" id="gree">Hosting</p>
                   </ShowMore>
                   <button className="hbutton" id="b2">Requst</button>     
                </div> 
                </div>       
          </div>

      </div>
 </div>
    
);


export default Services