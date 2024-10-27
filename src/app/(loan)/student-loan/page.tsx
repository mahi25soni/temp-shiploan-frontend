"use client";
import LoanCalculator from '@/components/CalculaterComponent/LoanCalculator'
import PageWrapper from '@/components/wrappers/PageWrapper'
import { useFormik } from 'formik'
import React from 'react'

const InputRangeData = [
  {
    name : 'outstanding_amount',
    label : 'Outstanding Amount',
    minValue : 0,
    maxValue : 100000, // In Rupees
    step : 1000,
    type : "currency"
  },
  {
    name : 'tenure',
    label : 'Tenure',
    minValue : 0,
    maxValue : 18, // In months
    step : 1,
    type : "time"
  },
  {
    name : 'current_roi',
    label : 'Current ROI',
    minValue : 0,
    maxValue : 15, // In Percentage
    step : 0.1,
    type : "percentage"
  },
  {
    name : 'emi',
    label : 'EMI',
    minValue : 0,
    maxValue : 100000, // In Rupees
    step : 1000,
    type : "currency"
  },
  {
    name : 'proposed_emi',
    label : 'Proposed EMI',
    minValue : 0,
    maxValue : 15, // In Rupees
    step : 0.1,
    type : "percentage"
  }
]

const StudentLoan = () => {
  const formik  = useFormik({
    initialValues : {
      outstanding_amount : 0,
      tenure : 0,
      current_roi : 0,
      emi : 0,
      proposed_emi : 0,
    },
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
    },
  })
  return (
    <PageWrapper heading='Balance Transfer on Credit Card Debt' altText='Background Image' bgColor='#FBEED9' mainImage='/laptop composition video.png' description='Lorem ipsum dolor sit amet consectetur. Semper sed malesuada quisque orci tincidunt lectus sollicitudin quam. Convallis in nisl odio enim arcu neque. Nulla ipsum venenatis volutpat eu. Venenatis nisi.'>

    <LoanCalculator InputDataList={InputRangeData} formik={formik}></LoanCalculator>

   
    

</PageWrapper>
  );
};

export default StudentLoan;
