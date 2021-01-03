import React from 'react'
import "./Jumper29.scss";
import {Link} from "react-router-dom";

export default function Jumper29() {
    return (
        <div className="card-jumper-29">
          <Link to="/stumpjumper29" className="card-link">  <div className="card-image-jumper-29"></div></Link>
            <div className="card-info-jumper-29">
               <Link to="/stumpjumper29" className="card-link"> <p className="card-name-jumper-29">CardStumpJumper29</p></Link>
                <p className="card-price-jumper-29">$52500</p>
                <div className="card-color-jumper-29"></div>
            </div>
            
        </div>
    )
}
