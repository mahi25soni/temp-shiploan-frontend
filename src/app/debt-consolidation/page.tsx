"use client";
import LoanCalculator from '@/components/CalculaterComponent/LoanCalculator'
import LenderComparison from '@/components/LenderComparison/LenderComparison';
import SuggestedLoan from '@/components/SuggestedLoan/SuggestedLoan';
import SuggestedLenders from '@/components/SuggestesLenders/SuggestedLenders';
import PageWrapper from '@/components/wrappers/PageWrapper'
import SuggestedLoanWrapper from '@/components/wrappers/SuggestedLoanWrapper';
import { LenderSampleData } from '@/testdata/lender-data';
import { useFormik } from 'formik'
import React, { useState } from 'react'

const InputRangeData = [
  {
    name: 'amount',
    label: 'Amount',
    minValue: 0,
    maxValue: 10000000, // In Rupees
    step: 1,
    type: "currency"
  },
  {
    name: 'payment',
    label: 'Payment Tenure',
    minValue: 0,
    maxValue: 60, // In months
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


interface LenderInfo {
  id: string,
  name: string,
  roi: string,
  amount: string,
  eligibility: string,
  disbursement: string
}

const DebtConsolidation = () => {

  const [suggestLoan, setSuggestLoan] = useState(false)
  const [suggestLenders, setSuggestLenders] = useState(false)
  const [lenderComparison, setLenderComparison] = useState(false)

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
      setSuggestedLoanData({
        amount: values.amount,
        tenure: values.payment,
        roi: values.interest
      })
      setSuggestLoan(true)
    },
  })
  const [lenderComparisonArray, setLenderComparisonArray] = useState<LenderInfo[]>([])
  const [lenderArray, setLenderArray] = useState<LenderInfo[]>(LenderSampleData)
  return (


    <div className='min-h-screen w-full bg-light-purple pb-5'>
      <PageWrapper heading='How Debt Consolidation works' altText='Background Image' bgColor='#FBEED9' mainImage='/money and pie chart.svg' description='Lorem ipsum dolor sit amet consectetur. Semper sed malesuada quisque orci tincidunt lectus sollicitudin quam. Convallis in nisl odio enim arcu neque. Nulla ipsum venenatis volutpat eu. Venenatis nisi.'>

        <LoanCalculator InputDataList={InputRangeData} formik={formik} heading='Debt Consolidation Calculator'></LoanCalculator>


      </PageWrapper>
      {suggestLoan && <SuggestedLoan {...suggestedLoanData} setSuggestedLenders={setSuggestLenders} />}
      {suggestLenders && <SuggestedLenders lenderArray={lenderArray} setLenderComparisonArray={setLenderComparisonArray} setLenderComparison={setLenderComparison} lenderComparisonArray={lenderComparisonArray} />}
      {lenderComparison && lenderComparisonArray?.length > 0 && <LenderComparison data={lenderComparisonArray}></LenderComparison>}
    </div>

  )
}

export default DebtConsolidation