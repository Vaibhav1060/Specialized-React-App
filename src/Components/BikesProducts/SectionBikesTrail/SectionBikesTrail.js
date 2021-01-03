import React from 'react'
import CardStumpJumperPro29 from "../../Cards/CardStumpJumperPro29/CardStumpJumperPro29"
import CardStumpJumperExpert29 from "../../Cards/CardStumpJumperExpert29/CardStumpJumperExpert29"
import CardStumpJumperExpert27 from "../../Cards/CardStumpJumperExpert27/CardStumpJumperExpert27"
import CardFuseExpert29 from "../../Cards/CardFuseExpert29/CardFuseExpert29";
import CardFuseExpert27 from "../../Cards/CardFuseExpert27/CardFuseExpert27";

export default function SectionBikesTrail() {
    return (
        <div className="card-container">
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
