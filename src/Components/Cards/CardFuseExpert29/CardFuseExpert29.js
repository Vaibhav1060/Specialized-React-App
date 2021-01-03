import React from 'react'
import "./CardFuseExpert29.scss";
import {Link} from "react-router-dom"

export default function CardFuseExpert29() {
    return (
        <div className="card-fuse-expert29">
           <Link to="/" className="card-link">  <div className="card-image-fuse-expert29"></div></Link>
            <div className="card-info-fuse-expert29">
            <Link to="/" className="card-link">   <p className="card-name-fuse-expert29">CardFuseExpert29</p></Link>
                <p className="card-price-fuse-expert29">$6500</p>
                <div className="card-color-fuse-expert29"></div>
            </div>
            
        </div>
    )
}
