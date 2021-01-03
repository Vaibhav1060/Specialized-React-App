import React from 'react'
import {Link} from "react-router-dom";

export default function Video() {
    return (
        <div className="video">
            <div className="video-box">
                <iframe width="80%" title="frames" height="70%" src="https://www.youtube.com/embed/yiNyUvYb7AM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}
