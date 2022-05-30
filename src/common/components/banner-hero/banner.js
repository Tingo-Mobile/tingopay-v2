import React, { useState } from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { BTN } from '../..';
import { Airtime, BuyData, CableSubscription, PayButton, PayElectricity } from '../../../data';



const Banner = () => {

    const [formData, setFormData] = useState ({})
    
    const [isValid, setIsValid ] = useState(false);

    const [ serviceType, setServiceType] = useState('');

    const handleServiceType = (event) => {
        const getForm = event.target.value;
        setServiceType(getForm);
    }

 
  return (
    <>                        
        <div className='main-banner' id='main-banner'>
            <div className="container justify-content-center">
               <div className='row justify-content-center align-items-center '>
                    <div className='col-lg-6'>
                        <div className='main-banner-content'>
                            <h1 className=''>Seamless Payment with TingoPay!</h1>
                            <p>We offer you a fast, reliable and convenient payment solutions at TingoPay.</p>
                        </div>
                        <div className='d-flex downloadBtn'>
                            <div style={{marginRight: '5px'}}>
                                <BTN 
                                     btnText={ <div style={{color:'#fff'}}> <FaApple /> Apple Store</div> }    
                                />
                            </div>
                            <div>
                                <BTN 
                                     btnText={ <div style={{color:'#fff'}}> <FaGooglePlay /> Google Play</div> }
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='main-banner-form'>
                            <div className='content'>
                                <h2>Quick Payment</h2>
                            </div>
                            <form action='' method=''>
                                <div className='row'>
                                    <div className='col-lg-12 col-sm-12'>
                                        <div className='form-group'>
                                            <label>What would you like to do?</label>
                                            <select  onChange={(e)=>(handleServiceType(e))}>
                                                <option value="" defaultValue> select..</option>
                                                <option value="buyAirtime"> Buy Airtime</option>
                                                <option value="buyData"> Buy Data</option>
                                                <option value="payElectricity"> Electricity Bill</option>
                                                <option value="cabletv"> Cable TV Subscription</option>
                                                <option value="jamb">Buy Jamb Pin</option>
                                                <option value="waec">Buy WAEC Pin</option>
                                                <option value="school">School ( Tertiary ) Bill Payment</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    { 
                                    serviceType === 'buyAirtime' && (
                                        <Airtime  setIsValid ={setIsValid} setFormData={setFormData}/>    
                                    )
                                        
                                    }

                                    { 
                                    serviceType === 'buyData' && (
                                        <BuyData  setIsValid ={setIsValid} setFormData={setFormData} /> 
                                    )   
                                    }

                                    { 
                                    serviceType === 'payElectricity' && (
                                        <PayElectricity setIsValid ={setIsValid} setFormData={setFormData} />
                                    )   
                                    }

                                    { 
                                    serviceType === 'cabletv' && (
                                        <CableSubscription  setIsValid ={setIsValid} setFormData={setFormData} />
                                    )   
                                    }
                                   <div className='col-lg-12 col-sm-12'>
                                         <PayButton isValid={isValid} formData={formData}/>
                                     </div> 
                                </div>
                                
                            </form>
                            
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </>
  )
}

export default Banner