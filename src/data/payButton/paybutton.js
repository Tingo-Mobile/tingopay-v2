import React  from 'react'
import { usePaystackPayment } from 'react-paystack';

const config = {
      reference: (new Date()).getTime().toString(),
      currency: 'NGN',
      channel: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
      email: "godwincahua@gmail.com",
      amount: 20000,
      publicKey: 'pk_test_15e87923f40efe4c23c75dbf54ace5378d88bc3a',
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
