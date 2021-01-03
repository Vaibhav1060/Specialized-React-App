import React from 'react'
import "./SectionBikesSWorks.scss";
import Demo8 from "../../Cards/Demo8/Demo8";
import EpicEvo from "../../Cards/EpicEvo/EpicEvo";
import Jumper29 from "../../Cards/Jumper29/Jumper29";
import Demo8Frame from "../../Cards/Demo8Frame/Demo8Frame";





export default function SectionBikesSWorks() {
    return (
        <div className="card-container">
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
