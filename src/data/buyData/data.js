import React, { useEffect } from 'react';
import { useFormik } from 'formik'; 
import * as yup from "yup";
import { ErrorMessage } from '../../common';
import ReactSelect from 'react-select';


const initialValues = {
    country: 'NG',
    type: 'BUY_DATA',
    provider: '',
    account: '',
    amount: '',
    email: '',
  }

  const validationSchema = yup.object().shape({
    provider: yup.string().required('Network Provider is required'),
    amount: yup.number().required("Amount is required"),
    account: yup.number().typeError("Please provide a valid phone number").required("Phone number is required"),
    email: yup.string().email("Please provide a valid email address").required("Email address  is required"),
  });

const Data = ({setIsValid,setFormData}) => {

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

    const network_provider = [
        {
            value: 'mtn',
            label: 'MTN'
        },

        {
            value: 'Airtel',
            label: 'AIRTEL'
        },
        {
            value: 'glo',
            label: 'GLO'
        },
        {
            value: 'etisalat',
            label: 'ETISALAT'
        }
    ]

    return (
        <>
            <div className='col-lg-12 col-sm-12' id='buy-airtimeForm'>
                <div className='form-group'>
                    <div>
                        <label>Network Provider</label>
                        <ReactSelect 
                        placeholder="Select Network"
                        name="provider"
                        onChange={(e)=>handleSubChange('provider',e.label)}
                        options={network_provider}
                        />
                        <ErrorMessage message={formik.error?.provider} 
                        touched={formik.touched?.provider}/>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <label>Amount</label>
                            <input 
                            type="" 
                            max={11} 
                            name='amount' 
                            className='form-control payElect' 
                            placeholder='N2,000' 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.amount}
                            />
                            <ErrorMessage message={formik.errors.amount} 
                                touched={formik.touched.amount}
                            />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input 
                            type="" 
                            max={11} 
                            name='account' 
                            className='form-control payElect' 
                            placeholder='+2348138885517' 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.account}
                            />
                            <ErrorMessage message={formik.errors.account} 
                                touched={formik.touched.account}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Email Address</label>
                        <input 
                        type="email" 
                        maxLength={100} 
                        name='email' 
                        className='form-control' 
                        placeholder='hello@tingopay.com' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        />
                        <ErrorMessage message={formik.errors.email} 
                            touched={formik.touched.email}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Data