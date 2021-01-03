import React from 'react'
import Banner from "../../Reusable/Banner/Banner"
import "./Bikes.scss";
import BikesMenu from "../../Components/BikesMenu/BikesMenu"
import BikesProducts from "../../Components/BikesProducts/BikesProducts"


export default function Bikes() {
    return (
        <>
           <Banner hero="banner-bikes" text="BIKES"/>
           <div className="bikes">
           <BikesMenu />
           <BikesProducts />
      
           </div>

            
        </>
    )
}
