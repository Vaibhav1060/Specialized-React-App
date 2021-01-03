import React from 'react'
import "./Demo8.scss";
import {Link} from "react-router-dom";

export default function Demo8() {
    return (
        <div className="card-demo-8">
           <Link to="/demo8" className="card-link"> <div className="card-image-demo-8"></div></Link>
            <div className="card-info-demo-8">
               <Link to="/demo8" className="card-link"> <p className="card-name-demo-8">CardFuseExpert29</p></Link>
                <p className="card-price-demo-8">$6500</p>
                <div className="card-color-demo-8"></div>
            </div>
            
        </div>
    )
}
