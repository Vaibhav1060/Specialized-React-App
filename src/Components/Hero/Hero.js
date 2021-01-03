import React from 'react';
import {Link} from "react-router-dom";

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-container">
                <div className="hero-main">
                    <h1 className="hero-main-text">We Have <span className="hero-main-textspan">The Work</span></h1>
                    <p className="hero-main-text-para-first">Its All Fun And Games Until You Catch </p>
                    <p className="hero-main-text-para">too Much Air</p>
                    <Link to="/demo" className="hero-main-link" to="/Demo">Demo 8 FSR</Link>

                </div>
                <div className="hero-primary">
                    <p className="hero-primary-text-first">Take A Deeper Look At The</p>
                    <p className="hero-primary-text">2019 S-WORKS LINE-UP</p>

                </div>

            </div>
            
        </div>
    )
}