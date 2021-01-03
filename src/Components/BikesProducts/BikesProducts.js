import React from 'react'
import SectionBikesTrail from "../BikesProducts/SectionBikesTrail/SectionBikesTrail"
import SectionBikesDownHill from "../BikesProducts/SectionBikesDownHill/SectionBikesDownHill"
import SectionBikesSWorks from "../BikesProducts/SectionBikesSWorks/SectionBikesSWorks"
import "./BikesProducts.scss";

export default function BikesProducts() {
    return (
        <div className="section">
            <SectionBikesTrail />
            <SectionBikesDownHill />
            <SectionBikesSWorks />
            
       
        </div>
    )
}
