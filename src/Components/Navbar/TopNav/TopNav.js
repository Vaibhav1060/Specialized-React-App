import React from 'react'
import {FaMapMarkerAlt} from "react-icons/fa"
import {Link} from "react-router-dom"

export default function TopNav() {
    return (
        <div className="topnav">
            <div className="topnav-col1">
                <p className="topnav-col1-text">free shipping on all orders above $150</p>

            </div>
            <div className="topnav-col2">
                <div className="topnav-col-retailer">
                <Link to='/retailers' className='topnav-retailer-link'>
                <FaMapMarkerAlt />
                    <p className="topnav-retailer-text">Find Retailer</p>
                                </Link>
                   
                </div>
                <div className="topnav-col-language">
                    <div className="topnav-col-language-image"></div>
                   <p>EN</p>

                </div>
                <div className="topnav-col-register">
                  <Link to="/signin">  <button className="topnav-col-register-btn">Sign In</button></Link>

                </div>
               
            </div>
            
        </div>
    )
}