import React from 'react';
import './DemoAlloy27.scss';
import HeroDescription from "../../../../Reusable/HeroDescription/HeroDescription";
import ItemCardDemoAlloy27 from '../../../../Reusable/ItemCard/ItemCardDemoAlloy27/ItemCardDemoAlloy27';
import DemoAlloy27Description from './DemoAlloy27Description/DemoAlloy27Description';
import ItemSpecs from "../../../../Reusable/ItemSpecs/ItemSpecs";

export default function DemoAlloy27() {
    return (
        <div className='ItemPage-DemoAlloy27'>
          

            <div className='DemoRacer29Wrap'>

                <HeroDescription hero="HeroDemoAlloy27"/>
                <ItemCardDemoAlloy27 />
                <DemoAlloy27Description />
                <ItemSpecs />

            </div>
        </div>
    )
}