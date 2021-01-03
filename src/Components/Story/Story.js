import React from 'react'
import {Link} from "react-router-dom"

export default function Story() {
    return (
        <section className="story">
            <h2 className="story-text">SPECIALIZED MTB</h2>
<div className="story-info">
            <p className="story-info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat laoreet erat, in interdum turpis fringilla ut. Aenean maximus congue diam, sollicitudin ultricies nisi congue sed. Integer id pellentesque justo. In non tempor urna. Proin pellentesque pharetra leo. Duis at volutpat est, nec convallis erat. Morbi blandit nec augue vitae tincidunt. </p>
            <Link to="/insidespecialized" className="story-main-link">Our Story</Link>
            </div>       
        </section>
    )
}