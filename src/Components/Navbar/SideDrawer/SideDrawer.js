import React from 'react';
import {FaRegTimesCircle} from "react-icons/fa"
import {Link} from "react-router-dom";



export default function SideDrawer(props) {
    
        let drawerClasses = "sidedrawer";
        if(props.show){
            drawerClasses="sidedrawer open"

        }
        return (
            <div className={drawerClasses}>
                <div className="sidedrawer-close" onClick={props.close}><FaRegTimesCircle /></div>
                <ul className="sidedrawer-list">
               <Link to="/" className="sidedrawer-link"> <li className="sidedrawer-item">Home</li></Link>
               <Link to="/bikes" className="sidedrawer-link"> <li className="sidedrawer-item">Bike</li></Link>
               <Link to="/trail" className="sidedrawer-link"> <li className="sidedrawer-item">Trail</li></Link>
               <Link to="/downhill" className="sidedrawer-link"> <li className="sidedrawer-item">DownHill</li></Link>
               <Link to="/sworks" className="sidedrawer-link"> <li className="sidedrawer-item">S-Works</li></Link>
               <Link to="/insidespecialized" className="sidedrawer-link"> <li className="sidedrawer-item">Inside-Specialized</li></Link>
            </ul>
            </div>
        )
    }