import React from 'react'
import "./EpicEvo.scss";
import {Link} from "react-router-dom";

export default function EpicEvo() {
    return (
        <div className="card-epic-evo">
           <Link to="/epicevo" className="card-link"> <div className="card-image-epic-evo"></div></Link>
            <div className="card-info-epic-evo">
               <Link to="/epicevo" className="card-link"> <p className="card-name-epic-evo">CardFuseExpert29</p></Link>
                <p className="card-price-epic-evo">$6500</p>
                <div className="card-color-epic-evo"></div>
            </div>
            
        </div>
    )
}
