import React, { Component } from 'react';
import SeerbitCheckout from "seerbit-reactjs";




export default class checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          public_key: process.env.REACT_APP_SEERBIT_SBPB_KEY,
          amount: 100,
          tranref: new Date().getTime(),
          customization: {
            theme: {
              border_color: "#F89A1F",
              background_color: "#F89A1F",
              button_color: "#fff",
            },
            payment_method: ["card", "account", "transfer", "wallet"],
            display_fee: true, // true 
            display_type: "embed", //inline
            logo: "logo_url | base64", 
          }
        };
      }
    
      close = (close) => {
        console.log(close);
      };
      callback = (response) => {
        console.log(response);
      };
    
      checkProgress = (progress)=>{
        console.log(progress)
      }

  render() {
  
    return (
        <SeerbitCheckout
        className={this.props.className}
        type='div'
        tranref={'TPY888555'}
        currency={"NGN"}
        description={"Payment"}
        country={"NG"}
        clientappcode="app1"
        public_key={process.env.REACT_APP_SEERBIT_SBPB_KEY}
        callback={this.callback}
        close={this.close}
        scriptStatus={this.checkProgress}
        amount={this.state.amount}
        tag={"button"}
        full_name={"Ahua Godwin"}
        email={"godwin.ahua@tingomobile.com.ng"}
        mobile_no={"+2348138885517"}
        customization={this.state.customization}
        version={"1"}
        title={'Pay Now'}
      />
    )
  }
}
