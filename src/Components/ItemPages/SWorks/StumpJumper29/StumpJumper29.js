import React from 'react';
import './StumpJumper29.scss';
import HeroDescription from '../../../../Reusable/HeroDescription/HeroDescription';
import ItemCardStumpJumper29 from '../../../../Reusable/ItemCard/ItemCardStumpJumper29/ItemCardStumpJumper29';
import StumpJumper29Description from './StumpJumper29Description/StumpJumper29Description';
import ItemSpecs from '../../../../Reusable/ItemSpecs/ItemSpecs';

export default function StumpJumper29() {
    return (
        <div className='ItemPage-SWStumpJumper29'>
            

            <div className='SWStumpJumper29Wrap'>

                <HeroDescription hero="HeroStumpJumper29"/>
                <ItemCardStumpJumper29 />
                <StumpJumper29Description />
                <ItemSpecs />


            </div>
        </div>
    )
}