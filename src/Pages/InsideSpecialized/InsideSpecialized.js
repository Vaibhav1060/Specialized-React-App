import React from 'react';
import './InsideSpecialized.scss';
import InsideFamily from './InsideFamily/InsideFamily';
import FamilyMobile from './FamilyMobile/FamilyMobile';
import InsidePoster1 from './InsidePoster1/InsidePoster1';
import InsideGrey1 from './InsideGrey1/InsideGrey1';
import InsidePoster2 from './InsidePoster2/InsidePoster2';
import InsidePoster3 from './InsidePoster3/InsidePoster3';
import InsideGrey2 from './InsideGrey2/InsideGrey2';
import InsidePoster3Mobile from './InsidePoster3Mobile/InsidePoster3Mobile';
import InsideVideo from './InsideVideo/InsideVideo';
import InsideCareer from './InsideCareer/InsideCareer';

export default function InsideSpecialized() {
    return (
        <div className='InsideSpecialized'>
            <div className='InsideWrap'>

                
                <InsideFamily />
                <FamilyMobile />

                <InsidePoster1 />

                <InsideGrey1 />

                <InsidePoster2 />

                <InsidePoster3 />
                <InsidePoster3Mobile />

                <InsideGrey2 />

                <InsideVideo />

                <InsideCareer />


            </div>
        </div>
    )
}