import React from 'react'
import Hero from "../../Components/Hero/Hero"
import Story from "../../Components/Story/Story"
import Explore from "../../Components/Explore/Explore"
import Finnless from '../../Components/Finnless/Finnless'
import Video from "../../Components/Video/Video"
import Instagram from "../../Components/Instagram/Instagram"
import Footer from "../../Components/Footer/Footer";

export default function Home() {
    return (
        <div>
           <Hero />
           <Story />
           <Explore />
           <Finnless />
           <Video />
           <Instagram />
          
        </div>
    )
}
