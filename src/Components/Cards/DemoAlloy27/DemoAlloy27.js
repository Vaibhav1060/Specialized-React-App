import React from 'react'
import "./DemoAlloy27.scss";
import {Link} from "react-router-dom"

export default function DemoAlloy27() {
    return (
        <div className="card-demo-alloy27">
            <Link to="/demoalloy27" className="card-link"><div className="card-image-demo-alloy27"></div></Link>
            <div className="card-info-demo-alloy27">
            <Link to="/demoalloy27" className="card-link"> <p className="card-name-demo-alloy27">CardFuseExpert29</p></Link>
                <p className="card-price-demo-alloy27">$6500</p>
                <div className="card-color-demo-alloy27"></div>
            </div>
            
        </div>
    )
}
