import React, { createContext } from "react";


const Card = createContext;



const ServicesCard = () => {
    return (

        <div className="content">
            <div className="website">
                <div className="web">
                          <div className="servicetype">
                           
                                <h3 className="serviceh3" id="supper">PERSONAL<p>#25,000</p></h3>
                                   <p className="pack">Website update</p>
                                   <p className="pack" id="ye">Website security </p>
                                   <p className="pack" id="blue">Malware removal</p>
                                   <p className="pack" id="red">Database optimization</p>
                                   <p className="pack" id="purple">Page optimization</p>
                                   <p className="pack" id="yell">Basic changes</p>
                                   <p className="pack" id="yellow">Quarterly review</p>
                                   <p className="pack" id="gree">Hosting</p>
                                   <p className="pack" id="red">Mobile app update</p>
                                   
                                   <button className="hbutton" id="b2">Requst</button>
                          </div>
                </div>

            </div>

        </div>

    );
}


export default ServicesCard;