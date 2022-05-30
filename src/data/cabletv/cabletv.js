import React, { useEffect } from 'react';
import Select from "react-select";
import { useFormik } from 'formik';
import * as yup from "yup";
import { ErrorMessage } from '../../common';



const initialValues = {
    type: 'RENEW_PAYTV_SUBSCRIPTION',
    provider: '',
    cable_package: '',
    customer_number: '',
    email: '',
    amount: ''
  }

  const validationSchema = yup.object().shape({
    provider: yup.string().required("Cable vendor is required"),
    cable_package: yup.string().required("Cable Package is required"),
    customer_number: yup.number().typeError("Please provide a valid smart card number").required("Smart Card number is required"),
    email: yup.string().email("Please provide a valid email address").required("Email address  is required"),
    amount: yup.number().typeError("Amount is Number Only").required("Min amount of N50 is required"),
  });


const Cabletv = ({setIsValid,setFormData}) => {

    const handleSubChange = (field,value) => {
        formik.setFieldValue(field, value)
        console.log(formik.values)
    };

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

// to capture all input from the field and send to the button
    useEffect (( ) => {
        setFormData(formik.values)
    }, [formik.values,setFormData])


    const cableVendor = [
        {
            value: 'gotv',
            label: 'GoTV'
        },
        {
            value: 'dstv',
            label: 'DSTV'
        },
        {
            value: 'startime',
            label: 'StarTime'
        },
    ];

    const cablePackage = [
        {
            value: 'gotvSupa',
            label: 'Gotv Supa (N5,500)'
        },

        {
            value: 'gotvmax',
            label: 'Gotv Max (N4,150)'
        },

        {
            value: 'gotvjolli',
            label: "Gotv Jolli ( N2,800)"
        },

        {
            value: 'gotvjinga',
            label: "Gotv Jinga ( N1,900)"
        },

        {
            value: 'gotvsmallie',
            label: "Gotv Smallie (N, 900)"
        },

        {
            value: 'dstvcompact',
            label: "DSTV Compact (N9,000)"
        },
        {
            value: 'dstvpremium',
            label: "DSTV Premium (N21,000)"
        },
        {
            value: 'dstvcompactplus',
            label: "DSTV Compact Plus (N14,250)"
        },
        {
            value: 'dstvconfam',
            label: "DSTV Confam (N5,300)"
        },
        {
            value: 'dstvyanga',
            label: "DSTV Yanga (N2,950)"
        },
        {
            value: 'dstvpadi',
            label: "DSTV Padi (N2,150)"
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
                        theme={(theme) => ({
                        ...theme,
                        borderRadius: 4,
                        borderWidth: 1,
                        colors: {
                            ...theme.colors,
                            primary25: '#F89A1F',
                            primary: '#F89A1F'
                        },
                        })}
                        type="RENEW_PAYTV_SUBSCRIPTION"
                        placeholder="Select Vendor"
                        name="provider"
                        onChange={(e)=>handleSubChange('provider',e.label)}
                        className='payElect' 
                        options={cableVendor}
                        />
                        <ErrorMessage message={formik.errors?.provider} 
                            touched={formik.touched?.provider}
                        />
                    </div>
                    <div>
                        <label>Choose Package</label>
                        <Select
                        theme={(theme) => ({
                        ...theme,
                        borderRadius: 4,
                        colors: {
                            ...theme.colors,
                            primary25: '#F89A1F',
                            primary: '#F89A1F',
                        },
                        })}  className='payElect' options={cablePackage} styles={{overflowY: 'scroll'}}
                        type="text"
                        placeholder="Select Package"
                        onChange={(e)=>handleSubChange('cable_package',e.label)}
                        name="cable_package"
                        />
                        <ErrorMessage message={formik.errors?.cable_package} 
                            touched={formik.touched?.cable_package}
                        />
                    </div>    
                </div>
                <div className='d-flex form-group-input'>
                    <div>
                        <label>Card Number</label>
                        <input type="text" maxLength={11} name='customer_number' className='form-control payElect' placeholder='08138885517' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.customer_number}
                        />
                        <ErrorMessage message={formik.errors.customer_number} 
                            touched={formik.touched.customer_number}
                        />
                    </div>
                    <div>
                        <label>Amount</label>
                        <input type="text"  name='amount' className='form-control payElect' placeholder='N2,000' 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.amount}
                        />
                        <ErrorMessage message={formik.errors.amount} 
                            touched={formik.touched.amount}
                        />
                    </div>
                </div>
                <div>
                    <label>Email Address</label>
                    <input type="email" name='email' className='form-control' placeholder='hello@tingopay.com' 
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

export default Cabletv