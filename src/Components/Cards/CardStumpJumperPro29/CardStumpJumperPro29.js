import React from 'react'
import "./CardStumpJumperPro29.scss";
import {Link} from "react-router-dom";

export default function CardStumpJumperPro29() {
    return (
        <div className="card-stump-jumper-pro29">
            <Link to="/stumpjumperpro" className="card-link"> <div className="card-image-stump-jumper-pro29"></div> </Link>
            <div className="card-info-stump-jumper-pro29">
            <Link to="/stumpjumperpro" className="card-link"> <p className="card-name-stump-jumper-pro29">CardStumpJumperPro29</p></Link>
                <p className="card-price-stump-jumper-pro29">$6500</p>
                <div className="card-color-stump-jumper-pro29"></div>
            </div>
            
        </div>
    )
}
