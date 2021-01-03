import React from 'react';
import './EpicEvo.scss';
import EpicEvoCarousel from './EpicEvoCarousel/EpicEvoCarousel';
import ItemCardEpicEvo from '../../../../Reusable/ItemCard/ItemCardEpicEvo/ItemCardEpicEvo';
import EpicEvoDescription from './EpicEvoDescription/EpicEvoDescription';
import ItemSpecs from "../../../../Reusable/ItemSpecs/ItemSpecs";

export default function ItemPageEpicEvo() {
    return (
        <div className='ItemPage-EpicEVO'>
           

            <div className='EPICEVOWrap'>

                <EpicEvoCarousel />
                <ItemCardEpicEvo />
                <EpicEvoDescription />
                <ItemSpecs />

            </div>
        </div>
    )
}