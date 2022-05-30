import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { BTN } from '../..'
import { MobileApp } from '../../../assets/import'

const steps = () => {
  return (
    <div className='app-step'>
        <div className='container'>
            <div className='row goals'>
                <div className='col-lg-7'>
                    <h3 className='text-tingo'>Start paying with TingoPay in 3 steps</h3>
                    <div className='goals-inner-content'>
                        <div className='number'>
                            <span>1</span>
                        </div>
                        <h4 className='text-tingo'>Download TingoPay Mobile App</h4>
                        <p>Download TingoPay mobile app Free on your mobile device.</p>
                    </div>
                    <div className='goals-inner-content'>
                        <div className='number'>
                            <span>2</span>
                        </div>
                        <h4 className='text-tingo'>Sign-up a Free account</h4>
                        <p>Create your free TingoPay account to make free payment</p>
                    </div>
                    <div className='goals-inner-content'>
                        <div className='number'>
                            <span>3</span>
                        </div>
                        <h4 className='text-tingo'>Start Paying</h4>
                        <p>Pick the type of bill you want to pay, find the vendor and pay with a clicks.</p>
                    </div>
                    <div className='d-flex downloadBtn pt-2'>
                            <div style={{marginRight: '5px'}}>
                                <BTN 
                                    btnText={<div> <FaGooglePlay />  Google Play</div>}
                                />
                            </div>
                            <div>
                                <BTN 
                                    btnText={<div> <FaApple />  Apple Store</div>}
                                />
                            </div>
                        </div>
                </div>
                <div className='col-lg-5'>
                    <img src={MobileApp} alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default steps