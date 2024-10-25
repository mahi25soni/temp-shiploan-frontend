"use client";
import LoanCalculator from '@/components/CalculaterComponent/LoanCalculator'
import PageWrapper from '@/components/wrappers/PageWrapper'
import { useFormik } from 'formik'
import React from 'react'

const InputRangeData = [
  {
    name : 'amount',
    label : 'Amount',
    minValue : 0,
    maxValue : 100000, // In Rupees
    step : 1000,
    type : "currency"
  },
  {
    name : 'payment',
    label : 'Payment',
    minValue : 0,
    maxValue : 18, // In months
    step : 1,
    type : "time"
  },
  {
    name : 'interest',
    label : 'Interest',
    minValue : 0,
    maxValue : 15, // In Percentage
    step : 0.1,
    type : "percentage"
  }
]

const DebtConsolidation = () => {

  const formik  = useFormik({
    initialValues : {
      amount : 0,
      payment : 0,
      interest : 0,
    },
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
    },
  })
  return (
    <PageWrapper heading='How Debt Consolidation works' altText='Background Image' bgColor='#FDEFF0' mainImage='/money and pie chart.png' description='Lorem ipsum dolor sit amet consectetur. Semper sed malesuada quisque orci tincidunt lectus sollicitudin quam. Convallis in nisl odio enim arcu neque. Nulla ipsum venenatis volutpat eu. Venenatis nisi.'>

        <LoanCalculator InputDataList={InputRangeData} formik={formik}></LoanCalculator>

    </PageWrapper>
  )
}

export default DebtConsolidation