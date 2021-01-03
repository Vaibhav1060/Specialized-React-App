import React from 'react'
import "./DemoExpert29.scss";
import {Link} from "react-router-dom"

export default function DemoExpert29() {
    return (
        <div className="card-demo-expert29">
           <Link to="/demoexpert29" className="card-link"><div className="card-image-demo-expert29"></div></Link> 
            <div className="card-info-demo-expert29">
            <Link to="/demoexpert29" className="card-link"><p className="card-name-demo-expert29">CardFuseExpert29</p></Link>
           <p className="card-price-demo-expert29">$6500</p>
                <div className="card-color-demo-expert29"></div>
            </div>
            
        </div>
    )
}
