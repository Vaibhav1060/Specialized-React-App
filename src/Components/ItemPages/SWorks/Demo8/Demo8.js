import React from 'react';
import './Demo8.scss';
import Demo8Carousel from './Demo8Carousel/Demo8Carousel';
import ItemCardDemo8 from "../../../../Reusable/ItemCard/ItemCardDemo8/ItemCardDemo8";
import Demo8Description from './Demo8Description/Demo8Description';
import ItemSpecs from '../../../../Reusable/ItemSpecs/ItemSpecs';

export default function Demo8() {
    return (
        <div className='ItemPage-Demo8'>
           

            <div className='Demo8Wrap'>

                <Demo8Carousel />
                <ItemCardDemo8 />
                <Demo8Description />
                <ItemSpecs />

            </div>
        </div>
    )
}