import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { BTN } from '../..'

const cta = () => {
  return (
    <div className='cta'>
        <div className='container'>
            <div className='row '>
                <div className='d-flex col-lg-12 col-sm-12 justify-content-between'>
                    <h3 className='text-white'>Download TingoPay app to get started</h3>
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
        </div>
    </div>
  )
}

export default cta