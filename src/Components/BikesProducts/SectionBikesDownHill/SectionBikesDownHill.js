import React from 'react'
import DemoRacer29 from  "../../Cards/DemoRacer29/DemoRacer29";
import DemoExpert29 from "../../Cards/DemoExpert29/DemoExpert29";
import DemoAlloy27 from "../../Cards/DemoAlloy27/DemoAlloy27";


export default function SectionBikesTrail() {
    return (
        <div className="card-container">
            <p className="section-title">DownHill</p>
            <div className="card-flex"> 
               <DemoRacer29 />
               <DemoExpert29 />
               <DemoAlloy27 />
            </div>
        </div>
    )
}
