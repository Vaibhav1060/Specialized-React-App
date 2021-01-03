import React from 'react'
import "./DemoRacer29.scss";
import {Link} from "react-router-dom";

export default function DemoRacer29() {
    return (
        <div className="card-demo-racer29">
            <Link to="/demoracer29" className="card-link"><div className="card-image-demo-racer29"></div></Link>
            <div className="card-info-demo-racer29">
            <Link to="/demoracer29" className="card-link">  <p className="card-name-demo-racer29">CardFuseExpert29</p></Link>
                <p className="card-price-demo-racer29">$6500</p>
                <div className="card-color-demo-racer29"></div>
            </div>
            
        </div>
    )
}
