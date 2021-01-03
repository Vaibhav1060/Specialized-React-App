

import React from 'react'
import {Link,NavLink} from "react-router-dom"

import {FaMapMarkerAlt} from "react-icons/fa"

export default function DownNav({click}){
   

    // let SearchFieldClasses = 'FullNav-SearchDrawer';
    // if(searchState){
    //     SearchFieldClasses = 'FullNav-SearchDrawer ActiveSearch';
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

  
    return (
        <>
        <div className="navbar">
             <div className="navbar-hamburger" onClick={click}>
                <div className="navbar-hamburger-line"></div>
                <div className="navbar-hamburger-line"></div>
                <div className="navbar-hamburger-line"></div>

            </div>
           <Link to="/"> <div className="navbar-logo"></div></Link>
            <ul className="navbar-list">
               <li className="navbar-item"><Link to="/"  className="navbar-link">Home</Link></li>
               <li className="navbar-item"><Link to="/bikes" className="navbar-link">Bikes</Link></li>
               <li className="navbar-item"><Link to="/trail" className="navbar-link">Trail</Link></li>
               <li className="navbar-item"><Link to="/downhill" className="navbar-link">DownHill</Link></li>
               <li className="navbar-item"><Link to="/sworks" className="navbar-link">S-Works</Link></li>
               <li className="navbar-item"><Link to="/insidespecialized" className="navbar-link">Inside Specialized</Link></li>
              
              
           </ul>
            <div className="navbar-icon">
                <div className="navbar-icon-search"></div>
                <Link to="/retailers"> <FaMapMarkerAlt className="navbar-markers" /></Link>
                <Link to="/signin"><div className="navbar-user"></div></Link>
                <Link to="/cart"> <div className="navbar-icon-cart"></div></Link>
            </div>

           
        </div>
        
     </>
        
    )
}

