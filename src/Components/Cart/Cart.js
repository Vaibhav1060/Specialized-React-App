import React from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';

export default function Cart() {
    return (
        <div className='Cart'>
            <div className='CartWrap'>

                <div className='Cart-Header'>
                    <p className='Cart-HeaderTitle'>SHOPPING CART</p>
                    {/* <Link to='/bikes' className='Cart-HeaderShopLink'>Continue Shopping</Link> */}
                </div>

                <div className='cart-digitalcart'>

                    <p className='cart-digitalcart-Title'>Your Shopping Cart is Empty</p>

                    <p className='cart-digitalcart-Text'>Nothin' to see here.</p>

                    <p className='cart-digitalcart-Text'>Check out your wishlist items.</p>

                    <div className='cart-digitalcart-Button'>VIEW WISH LIST</div>

                    <Link to='/bikes' className='cart-digitalcart-ShopLink'>Continue Shopping</Link>

                </div>

                <div className='cart-infosectionRow'>
                    <div className='cart-infosection'>
                        <p className='cart-infosection-Title'>Contact Us</p>
                        <p className='cart-infosection-Info'>8:00am - 6:00pm MST, Monday-Friday</p>
                        <p className='cart-infosection-Info'>877-808-8154</p>
                        <p className='cart-infosection-Info Underline'>ridercare@specialized.com</p>
                    </div>
                    <div className='cart-infosection'>
                        <p className='cart-infosection-Title'>Helpful Links</p>
                        <p className='cart-infosection-Link'>Frequently Asked Questions</p>
                        <p className='cart-infosection-Link'>Return Policy</p>
                        <p className='cart-infosection-Link'>Warranty Policy</p>
                    </div>
                    <div className='cart-infosection'>
                        <p className='cart-infosection-Title'>We Accept</p>
                        <div className='cart-infosection-paymentMethodWrap'>
                            <div className='cart-infosection-paymentMethod paymentIcon1'></div>
                            <div className='cart-infosection-paymentMethod paymentIcon2'></div>
                            <div className='cart-infosection-paymentMethod paymentIcon3'></div>
                            <div className='cart-infosection-paymentMethod paymentIcon4'></div>
                            <div className='cart-infosection-paymentMethod paymentIcon5'></div>
                        </div>
                        
                    </div>
                </div>

                

            </div>
        </div>
    )
}