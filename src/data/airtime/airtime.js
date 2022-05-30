import React, { useEffect } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ErrorMessage } from "../../common";
import Select from "react-select";

const initialValues = {
    country: 'NG',
    type: 'BUY_AIRTIME',
    provider: '',
    account: '',
    bundle_code: '34821',
    amount: '',
    recurrence: 'ONCE'
  }

  const validationSchema = yup.object().shape({
    provider: yup.string().required(),
    account: yup.number().typeError("Please provide a valid phone number").required("Phone number is required"),
    amount: yup.number().typeError("Please provide a amount").required("Min. amount of N50 is required").positive(),
  });

const Airtime = ({setIsValid, setFormData}) => {
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
            <div className="col-lg-12 col-sm-12">
                <div className="form-group">
                    <div>
                        <label>Network Provider</label>
                        <Select 
                        placeholder="Select Network"
                        name="provider"
                        onChange={(e)=>handleSubChange('provider',e.label)}
                        options={network_provider}
                        />
                        <ErrorMessage message={formik.error?.provider} 
                        touched={formik.touched?.provider}/>
                    </div>
                    <div className="d-flex">
                        <div>
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                max={11}
                                name="account"
                                className="form-control payElect"
                                placeholder="+2348138885517"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.account}
                            />
                            <ErrorMessage message={formik.errors.account} 
                                touched={formik.touched.account}
                            />

                        </div>
                        <div>
                            <label>Amount</label>
                            <input
                                type="number"
                                name="amount"
                                className="form-control payElect"
                                placeholder="N2,000"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.amount}
                            />
                            <ErrorMessage message={formik.errors.amount} 
                                touched={formik.touched.amount}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Airtime;
