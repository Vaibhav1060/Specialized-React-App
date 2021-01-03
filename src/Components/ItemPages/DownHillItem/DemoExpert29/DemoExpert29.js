import React from 'react';
import './DemoExpert29.scss';
import ItemSpecs from '../../../../Reusable/ItemSpecs/ItemSpecs';
import DemoExpert29Carousel from './DemoExpert29Carousel/DemoExpert29Carousel';
import ItemCardDemoExpert29 from '../../../../Reusable/ItemCard/ItemCardDemoExpert29/ItemCardDemoExpert29';
import DemoExpert29Description from './DemoExpert29Description/DemoExpert29Description';

export default function DemoExpert29() {
    return (
        <div className='ItemPage-DemoExpert29'>
       

            <div className='DemoRacer29Wrap'>

                <DemoExpert29Carousel />
                <ItemCardDemoExpert29 />
                <DemoExpert29Description />
                <ItemSpecs />

            </div>
        </div>
    )
}