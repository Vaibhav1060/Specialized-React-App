import React, { Component } from 'react';
import './StumpJumperPro29.scss';
import HeroDescription from "../../../../Reusable/HeroDescription/HeroDescription";
import ItemCard from '../../../../Reusable/ItemCard/ItemCardStumpJumperPro/ItemCardStumpJumperPro';
import StumpJumperProDescription from './StumpJumperDescription/StumpJumperProDescription';
import ItemSpecs from '../../../../Reusable/ItemSpecs/ItemSpecs';
import StumpJumperProVideo from './StmpJumperProVideo/StumpJumperProVideo';

export default class StumpJumperPro29 extends Component {
    render() {
        return (
            <div className='ItemPage-StumpJumperPro29'>

               


                <div className='StumpJumperPro29Wrap'>


                    <HeroDescription hero="HeroStumpPro"/>
                    <ItemCard />
                    <StumpJumperProDescription />
                    <StumpJumperProVideo />
                    <ItemSpecs />
                    


                </div>
            </div>
        )
    }
}