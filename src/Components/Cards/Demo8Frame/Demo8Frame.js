import React from 'react'
import "./Demo8Frame.scss";
import {Link} from "react-router-dom";

export default function Demo8() {
    return (
        <div className="card-demo-8">
           <Link to="/" className="card-link"> <div className="card-image-demo-8frame"></div></Link>
            <div className="card-info-demo-8frame">
               <Link to="/" className="card-link"> <p className="card-name-demo-8frame">CardFuseExpert29</p></Link>
                <p className="card-price-demo-8frame">$6500</p>
                <div className="card-color-demo-8frame"></div>
            </div>
            
        </div>
    )
}
