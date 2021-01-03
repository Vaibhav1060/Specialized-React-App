import React from 'react'
import "./SWorks.scss";
import Demo8 from "../../Components/Cards/Demo8/Demo8";
import EpicEvo from "../../Components/Cards/EpicEvo/EpicEvo";
import Jumper29 from "../../Components/Cards/Jumper29/Jumper29";
import Demo8Frame from "../../Components/Cards/Demo8Frame/Demo8Frame";
import Banner from "../../Reusable/Banner/Banner";





export default function SectionBikesSWorks() {
    return (
        <div className="card-container">
            <Banner hero="banner-sworks" text="SWorks"/>
            <p className="section-title">SWorks</p>
            <div className="card-flex"> 
               <Demo8 />
               <EpicEvo />
               <Jumper29 />
               <Jumper29 />
               <Demo8Frame />
            </div>
        </div>
    )
}
