import React from 'react'
import {Link} from "react-router-dom"

export default function Explore() {
    return (
        <div className="explore">
        <p className="explore-title">EXPLORE OUR BIKES</p>

        <div className='explore-wrap'>
            <Link to='/trail' className='explore-window explore-window1'>
                <div className='explore-innerwindow'></div>
                <p className='explore-innerwindow-text'>TRAIL</p>
            </Link>
            <Link to='/trail' className='explore-window explore-window2'>
                <div className='explore-innerwindow'></div>
                <p className='explore-innerwindow-text'>DownHill</p>
            </Link>
            <Link to='/trail' className='explore-window explore-window3'>
                <div className='explore-innerwindow'></div>
                <p className='explore-innerwindow-text'>S-Works</p>
            </Link>
           
        </div>
    </div>
    )
}