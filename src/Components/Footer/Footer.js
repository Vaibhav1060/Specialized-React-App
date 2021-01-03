import React from 'react'
import {FaTwitter,FaInstagram,FaFacebook,FaYoutube} from "react-icons/fa"
import {Link} from "react-router-dom"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col1">
                    <form className="footer-newsletter">
                        <input className="footer-newsletter-input" type="text" placeholder="Join Our NewsLetter"></input>
                        <button type="submit" className="footer-newsletter-button">JOIN</button>
                    </form>
                    <p>By submitting Your Email<span className="footer-col1-span1">You Agree to</span>
                    <span className="footer-col1-span2">Terms & Condition</span></p>


                </div>
                <div className="footer-col2">
                    <ul className="footer-col2-list1">
                        <li className="footer-col2-list1-Item">Contact Us</li>
                        <li className="footer-col2-list1-Item">FAQ's</li>
                        <li className="footer-col2-list1-Item">Returns</li>
                        <li className="footer-col2-list1-Item">Waranty</li>
                        <li className="footer-col2-list1-Item">Test the Best</li>
                        <li className="footer-col2-list1-Item">Bicycle Registration</li>
                    </ul>
                    <ul className="footer-col2-list2">
                        <li className="footer-col2-list2-Item">Safety Notification</li>
                        <li className="footer-col2-list2-Item">Term Of Use</li>
                        <li className="footer-col2-list2-Item">CounterFeit Awarness</li>
                        <li className="footer-col2-list2-Item">Careers</li>

                    </ul>
                    
                </div>
                <div className="footer-col3">
                    <Link to="/" className="footer-link">FIND A RETAILER</Link>
                    <ul className="footer-col3-list">
                        <li className="footer-col3-list-icon"><FaTwitter/></li>
                        <li className="footer-col3-list-icon"><FaInstagram/></li>
                        <li className="footer-col3-list-icon"><FaFacebook/></li>
                        <li className="footer-col3-list-icon"><FaYoutube/></li>

                    </ul>
                    
                </div>
            </div>
            <div className="footer-copyright">
            <div className="footer-copyright-top">
                        <p className="footer-copyright-text">Privacy Policy</p>
                        <p className="footer-copyright-text">Transparency Act</p>
                    </div>
                    <p className="footer-copyright-bottom">© 2020. Specialized Bicycle Components. All Rights Reserved</p>

            </div>
        </footer>
    )
}