import React from 'react';
import './DemoRacer29.scss';
import ItemSpecs from '../../../../Reusable/ItemSpecs/ItemSpecs';
import DemoRacer29Carousel from './DemoRacer29Carousel/DemoRacer29Carousel';
import ItemCardDemoRacer29 from '../../../../Reusable/ItemCard/ItemCardDemoRacer29/ItemCardDemoRacer29';
import DemoRacer29Description from './DemoRacer29Description/DemoRacer29Description';

export default function ItemPageDemoRacer29() {
    return (
        <div className='ItemPage-DemoRacer29'>
           

            <div className='DemoRacer29Wrap'>

                <DemoRacer29Carousel />
                <ItemCardDemoRacer29 />
                <DemoRacer29Description />
                <ItemSpecs />

            </div>
        </div>
    )
}