import React from 'react';
import './FuseExpert27.scss';

import ItemCardFuseExpert27 from '../../../../Reusable/ItemCard/ItemCardFuseExpert27/ItemCardFuseExpert27';
import FuseExpert27Description from './FuseExpert27Description/FuseExpert27Description';
import ItemSpecs from '../../../../Reusable/ItemSpecs/ItemSpecs';
import HeroDescription from '../../../../Reusable/HeroDescription/HeroDescription';

export default function FuseExpert27() {
    return (
        <div className='ItemPage-StumpJumperExpert27'>

          

            <div className='StumpJumperExpert29Wrap'>

                <HeroDescription hero="HeroFuseExpert27"/>
                <ItemCardFuseExpert27 />
                <FuseExpert27Description />
                <ItemSpecs />


            </div>
        </div>
    )
}