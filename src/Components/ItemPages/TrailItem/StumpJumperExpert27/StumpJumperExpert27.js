import React from 'react';
import './StumpJumperExpert27.scss';
import StumpJumperExpert27Carousel from './StumpJumperExpert27Carousel/StumpJumperExpert27Carousel';
import ItemCardStumpJumperExpert27 from '../../../../Reusable/ItemCard/ItemCardStumpJumperExpert27/ItemCardStumpJumperExpert27';
import StumpJumperExpert27Description from './StumpJumperExpert27Description/StumpJumperExpert27Description';
import ItemSpecs from '../../../../Reusable/ItemSpecs/ItemSpecs';

export default function StumpJumperExpert27() {
    return (
        <div className='ItemPage-StumpJumperExpert27'>

          

            <div className='StumpJumperExpert29Wrap'>

                <StumpJumperExpert27Carousel />
                <ItemCardStumpJumperExpert27 />
                <StumpJumperExpert27Description />
                <ItemSpecs />


            </div>
        </div>
    )
}