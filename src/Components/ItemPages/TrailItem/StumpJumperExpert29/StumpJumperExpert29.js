import React, { Component } from 'react';
import './StumpJumperExpert29.scss';
import StumpJumperExpert29Carousel from './StumpJumperExpert29Carousel/StumpJumperExpert29Carousel';
import ItemCardStumpJumperExpert29 from '../../../../Reusable/ItemCard/ItemCardStumpJumperExpert29/ItemCardStumpJumperExpert29';
import StumpJumperExpertDescription from './StumpJumperExpertDescription/StumpJumperExpert29Description';
import ItemSpecs from '../../../../Reusable/ItemSpecs/ItemSpecs';

export default class StumpJumperExpert29 extends Component {
    render() {
        return (
            <div className='ItemPage-StumpJumperExpert29'>

          

            <div className='StumpJumperExpert29Wrap'>

                <StumpJumperExpert29Carousel />
                <ItemCardStumpJumperExpert29 />
                <StumpJumperExpertDescription />
                <ItemSpecs />

            </div>
        </div>
        )
    }
}
