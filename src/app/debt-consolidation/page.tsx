"use client";
import LoanCalculator from '@/components/CalculaterComponent/LoanCalculator'
import SuggestedLoan from '@/components/SuggestedLoan/SuggestedLoan';
import PageWrapper from '@/components/wrappers/PageWrapper'
import SuggestedLoanWrapper from '@/components/wrappers/SuggestedLoanWrapper';
import { useFormik } from 'formik'
import React, { useState } from 'react'

const InputRangeData = [
  {
    name: 'amount',
    label: 'Amount',
    minValue: 0,
    maxValue: 100000, // In Rupees
    step: 1000,
    type: "currency"
  },
  {
    name: 'payment',
    label: 'Payment',
    minValue: 0,
    maxValue: 18, // In months
    step: 1,
    type: "time"
  },
  {
    name: 'interest',
    label: 'Interest',
    minValue: 0,
    maxValue: 15, // In Percentage
    step: 0.1,
    type: "percentage"
  }
]

const DebtConsolidation = () => {

  const [suggestLoan, setSuggestLoan] = useState(false)
  const [suggestedLoanData, setSuggestedLoanData] = useState({
    amount: 0,
    tenure: 0,
    roi: 0
  })
  const formik = useFormik({
    initialValues: {
      amount: 0,
      payment: 0,
      interest: 0,
    },
    onSubmit: (values) => {
      console.log("the button has been clicked")
      setSuggestedLoanData({
        amount: values.amount,
        tenure: values.payment,
        roi: values.interest
      })
      setSuggestLoan(true)
    },
  })
  return (
    suggestLoan ?
      <SuggestedLoanWrapper altText='Background Image' bgColor='#FDEFF0' mainImage='/money and pie chart.png'>

        <SuggestedLoan {...suggestedLoanData}></SuggestedLoan>

      </SuggestedLoanWrapper> :
      <PageWrapper heading='How Debt Consolidation works' altText='Background Image' bgColor='#FDEFF0' mainImage='/money and pie chart.png' description='Lorem ipsum dolor sit amet consectetur. Semper sed malesuada quisque orci tincidunt lectus sollicitudin quam. Convallis in nisl odio enim arcu neque. Nulla ipsum venenatis volutpat eu. Venenatis nisi.'>

        <LoanCalculator InputDataList={InputRangeData} formik={formik}></LoanCalculator>

      </PageWrapper>

  )
}

export default DebtConsolidation