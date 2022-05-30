import React from 'react';
import { FaApple, FaAppStore, FaFacebook, FaGooglePlay, FaInstagram, FaLinkedinIn, FaMapPin, FaPhoneSquareAlt } from 'react-icons/fa';
import { BTN } from '../..';

const footer = () => {
    return ( 
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-6'>
                        <div className='footer-inner-content'>
                            <h4>TingoPay.com</h4>
                            <p>Buy Airtime, Data, Pay Electricity bill, Cable-TV Subscription, Internet Bills, 
                                Water Bills, Church Offerings, School Fees, Send and Receive money, Collect payment 
                                from your customers and a whole lot more, TingoPay offer an all-in-one simple and 
                                convenient bill payment solution with awesome discounts.
                            </p>
                            <div className='d-flex footer-social-link'>
                                <a href='https://facebook.com/tingopay'><FaFacebook className='social-icon'/></a>
                                <a href='https://linkedin.com/tingopay'><FaLinkedinIn className='social-icon' /></a>
                                <a href='https://instagram.com/tingopay'><FaInstagram  className='social-icon'/></a>
                            </div>
                        </div>   
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <div className='footer-inner-content'>
                            <h4>Contact</h4>
                                <div className='goals-inner-content'>
                                    <div className='footer-icon'>
                                        <span><FaPhoneSquareAlt/> </span>
                                    </div>
                                    <h5 className='text-white'>Help Line</h5>
                                    <p>+23481388877777</p>
                                </div>
                                <div className='goals-inner-content'>
                                    <div className='footer-icon'>
                                        <span><FaMapPin/> </span>
                                    </div>
                                    <h5 className='text-white'>Address</h5>
                                    <p>3rd floor, No. 22 Koforidua street, Zone 2, Wuse Abuja - Nigeria</p>
                                </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6 '>
                        <h4>Benefits</h4>
                        <div>
                            <p>No monthly fees</p>
                            <p>Get Paid Early</p>
                            <p>Security and control</p>
                            
                        </div>
                        <div className='d-flex downloadBtn'>
                            <div style={{marginRight: '5px'}}>
                                <BTN 
                                    btnText={<p style={{marginBottom: '-1px'}}> <FaGooglePlay />  Google Play</p>}
                                />
                            </div>
                            <div>
                                <BTN 
                                    btnText={<p style={{marginBottom: '-1px'}}> <FaApple />  Apple Store</p>}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row row-cols-1 row-cols-md-1 g-4 copy-right'>
                    <div className='col d-flex justify-content-between footer-copy-right'>
                        <h4 className='text-white'>(c) Copyright @2022  <a href='https://tingomobile.com' className='text-white'>Tingo Mobile Plc. </a>  All Rights Reserved</h4>
                        <span>Privacy Policy | Terms and condition</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer