import React from 'react'
import DemoRacer29 from  "../../Components/Cards/DemoRacer29/DemoRacer29";
import DemoExpert29 from "../../Components/Cards/DemoExpert29/DemoExpert29";
import DemoAlloy27 from "../../Components/Cards/DemoAlloy27/DemoAlloy27";
import Banner from "../../Reusable/Banner/Banner";


export default function DownHill() {
    return (
        <div className="card-container">
            <Banner hero="banner-downhill" text="DOWNHILL"/>
            <p className="section-title">DownHill</p>
            <div className="card-flex"> 
            
               <DemoRacer29 />
               <DemoExpert29 />
               <DemoAlloy27 />
               
            </div>
        </div>
    )
}
