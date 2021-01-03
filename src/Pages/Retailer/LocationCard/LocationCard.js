import React from 'react';
import './LocationCard.scss';

export default function LocationCard({ number, name, address1, address2, address3, storeUrl, backgroundColor }) {
    return (
        <div className='locationcard'>
            <div className='locationcard-Wrap'>
                <div className='locationcard-NumberColumn'>
                    <p className='locationcard-Number'>{ number }</p>
                </div>
                <div className='locationcard-StoreColumn'>
                    <p className='locationcard-StoreName'>{ name }</p>
                    <p className='locationcard-Address'>{ address1 }</p>
                    <p className='locationcard-Address'>{ address2 }</p>
                    <p className='locationcard-Address'>{ address3 }</p>
                    <p className='locationcard-Links'>Get Directions</p>
                    <p className='locationcard-Links'>{ storeUrl }</p>
                </div>
                <div className='locationcard-HoursColumn'>
                    <p className='locationcard-HoursTitle'>STORE HOURS</p>
                    <p className='locationcard-Hours'>Sunday: 12:00 PM - 5:00 PM</p>
                    <p className='locationcard-Hours'>Monday: 11:00 AM - 7:00 PM</p>
                    <p className='locationcard-Hours'>Tuesday: 11:00 AM - 7:00 PM</p>
                    <p className='locationcard-Hours'>Wednesday: 11:00 AM - 7:00 PM</p>
                    <p className='locationcard-Hours'>Thursday: 11:00 AM - 7:00 PM</p>
                    <p className='locationcard-Hours'>Friday: 11:00 AM - 7:00 PM</p>
                    <p className='locationcard-Hours'>Saturday: 10:00 AM - 6:00 PM</p>
                </div>
            </div>
        </div>
    )
}
