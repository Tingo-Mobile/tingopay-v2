import React  from 'react'
import { usePaystackPayment } from 'react-paystack';

const config = {
      reference: (new Date()).getTime().toString(),
      currency: 'NGN',
      channel: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
      email: "godwincahua@gmail.com",
      amount: 20000,
      publicKey: process.env.REACT_APP_SEERBIT_PAYSTACK_KEY,
}

const PayButton = ({isValid=false,formData}) => {

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    alert('payment successful ' + reference)
  }

  const onClose = () => {
    alert('payment cancelled')
  }

const handlePayment = () => {
  initializePayment(onSuccess, onClose)
}

  console.log(formData)

  return (
    
    <div style={{marginTop: '3rem'}}>
        <button  disabled={!isValid} onClick={handlePayment} className="pay-now-btn" >Pay Now</button>
    </div>
  )
}

export default PayButton
