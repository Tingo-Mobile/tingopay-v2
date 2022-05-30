import React, { useEffect } from 'react';
import Select from "react-select";
import { useFormik } from 'formik';
import * as yup from "yup";
import { ErrorMessage } from '../../common';



const initialValues = {
    country: 'NG',
    type: 'BUY_POWER',
    provider: '',
    account_type: '',
    account: '',
    email: '',
    amount: '',
    phone_number: ''
  }

  const validationSchema = yup.object().shape({
    provider: yup.string().required("Please select Vendor"),
    account_type: yup.string().required("Please select Package"),
    account: yup.number().typeError("Please provide a valid meter number").required("Meter number is required"),
    email: yup.string().email("Please provide a valid email address").required("Email address  is required"),
    amount: yup.number().typeError("Amount is Number Only").required("Min amount of N1000 is required"),
    phone_number: yup.number().typeError("Please enter a valid phone number").required("Phone number is required")
  });


const PayElectricity = ({setIsValid, setFormData}) => {


    const formik = useFormik({
        initialValues,
        initialErrors: initialValues,
        validationSchema
    });

    useEffect (( ) => {
        if (setIsValid) {
            setIsValid(formik.isValid)
        } 
    }, [formik.isValid,setIsValid])

    useEffect (( ) => {
        setFormData(formik.values)
    }, [formik.values,setFormData])


const handleSubChange = (field,value) => {
    formik.setFieldValue(field, value)
    console.log(formik.values)
};

    const vendor = [
        {
            value: 'eko_electric',
            label: 'Eko Electric'
        },
        {
            value: 'ikeja_electric',
            label: 'Ikeja Electric'
        },
        {
            value: 'abuja_electric',
            label: 'Abuja Electric'
        },
    ];

    const electricityPackage = [
        {
            value: 'prepaid',
            label: 'Prepaid'
        },
        {
            value: 'postpaid',
            label: 'Postpaid'
        },
    ]

        
  return (
    <>
        <div className='col-lg-12 col-sm-12' id='buy-airtimeForm'>
            <div className='form-group'>
                <div className='d-flex'>
                    <div>
                        <label>Choose Vendor</label>
                        <Select 
                        placeholder="Select Vendor"
                        name="provider"
                        className='payElect'
                        onChange={(e)=>handleSubChange('provider',e.label)}
                        options={vendor}
                        />
                        <ErrorMessage message={formik.error?.provider} 
                        touched={formik.touched?.provider}/>
                    </div>
                    <div>
                        <label>Choose Package</label>
                        <Select name='account_type' 
                        placeholder="Select Package"
                        className='payElect'
                        onChange={(e)=>handleSubChange('account_type',e.label)} 
                        options={electricityPackage} 
                        />
                        <ErrorMessage message={formik.error?.provider} 
                        touched={formik.touched?.provider}/>
                    </div>    
                </div>
                <div className='d-flex form-group-input'>
                    <div>
                        <label>Meter Number</label>
                        <input type="tel" max={11} name='account' className='form-control payElect' placeholder='08138885517' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.account}
                        />
                        <ErrorMessage message={formik.errors.account} 
                        touched={formik.touched.account}/>
                    </div>
                    <div>
                        <label>Amount</label>
                        <input type="text" maxLength={11}  name='amount' className='form-control payElect' placeholder='N2,000' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.amount}
                        />
                        <ErrorMessage message={formik.errors.amount} 
                        touched={formik.touched.amount}/>
                    </div>
                </div>
                <div className='d-flex'>
                    <div>
                        <label>Email Address</label>
                        <input type="email" name='email' className='form-control payElect' placeholder='hello@tingopay.com' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        />
                        <ErrorMessage message={formik.errors.email}
                        touched={formik.touched.email} />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input type="tel" name='phone_number' className='form-control payElect' placeholder='+2348138885517' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone_number}
                        />
                        <ErrorMessage message={formik.errors.phone_number}
                        touched={formik.touched.phone_number} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PayElectricity