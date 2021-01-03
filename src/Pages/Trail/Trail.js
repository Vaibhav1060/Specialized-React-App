import React from 'react'
import CardStumpJumperPro29 from "../../Components/Cards/CardStumpJumperPro29/CardStumpJumperPro29"
import CardStumpJumperExpert29 from "../../Components/Cards/CardStumpJumperExpert29/CardStumpJumperExpert29"
import CardStumpJumperExpert27 from "../../Components/Cards/CardStumpJumperExpert27/CardStumpJumperExpert27"
import CardFuseExpert29 from "../../Components/Cards/CardFuseExpert29/CardFuseExpert29";
import CardFuseExpert27 from "../../Components/Cards/CardFuseExpert27/CardFuseExpert27";
import Banner from "../../Reusable/Banner/Banner";

export default function Trail() {
    return (
        
        <div className="card-container">
            <Banner hero="banner-trail" text="TRAIL"/>
            <p className="section-title">Trail</p>
          
            <div className="card-flex"> 
                <CardStumpJumperPro29 />
                <CardStumpJumperExpert29 />
                <CardStumpJumperExpert27 />
                <CardFuseExpert29 />
                <CardFuseExpert27 />
            </div>
        </div>
    )
}
