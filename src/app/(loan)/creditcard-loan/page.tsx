"use client";
import BlogListing from '@/components/BlogListing/BlogListing';
import LoanCalculator from '@/components/CalculaterComponent/LoanCalculator'
import LenderComparison from '@/components/LenderComparison/LenderComparison';
import SuggestedLoan from '@/components/SuggestedLoan/SuggestedLoan';
import SuggestedLenders from '@/components/SuggestesLenders/SuggestedLenders';
import PageWrapper from '@/components/wrappers/PageWrapper'
import SuggestedLoanWrapper from '@/components/wrappers/SuggestedLoanWrapper';
import { LenderSampleData } from '@/testdata/lender-data';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import axios from "../../../../axios"

const InputRangeData = [
  {
    name: 'outstanding_amount',
    label: 'Outstanding Amount',
    minValue: 0,
    maxValue: 10000000, // In Rupees
    step: 1,
    type: "currency"
  },
  {
    name: 'tenure',
    label: 'Payment Tenure',
    minValue: 0,
    maxValue: 60, // In months
    step: 1,
    type: "time"
  },
  {
    name: 'current_roi',
    label: 'Current ROI',
    minValue: 0,
    maxValue: 15, // In Percentage
    step: 0.1,
    type: "percentage"
  },

]

interface LenderInfo {
  id: string,
  bank_name: string,
  interest_rate: number,
  current_emi: number,
  new_emi: number,
  logo: string
}

const CreditCardLoan = () => {
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
      outstanding_amount: 0,
      tenure: 0,
      current_roi: 0,

    },
    onSubmit: (values) => {
      setSuggestedLoanData({
        amount: values?.outstanding_amount,
        tenure: values?.tenure,
        roi: values?.current_roi
      })
      setSuggestLoan(true)
    },
  })
  const [lenderComparisonArray, setLenderComparisonArray] = useState<LenderInfo[]>(LenderSampleData)
  const [lenderArray, setLenderArray] = useState<LenderInfo[]>([])

  const handleSuggestedLenders = async () => {
    const { data } = await axios.post("/calculate/loan-emi", { ...suggestedLoanData, type: 'Credit Card Loan' })

    setLenderArray(data?.data)
    setSuggestLenders(true)

  }
  return (

    < div className='min-h-screen w-full bg-light-blue pb-5' >
      <PageWrapper heading='Balance Transfer on Credit Card Debt' altText='Background Image' bgColor='#D5E8ED' mainImage='/credit cards.svg' description='Lorem ipsum dolor sit amet consectetur. Semper sed malesuada quisque orci tincidunt lectus sollicitudin quam. Convallis in nisl odio enim arcu neque. Nulla ipsum venenatis volutpat eu. Venenatis nisi.'>

        <LoanCalculator InputDataList={InputRangeData} formik={formik} heading='Credit Card Balance Transfer'></LoanCalculator>

      </PageWrapper>
      {suggestLoan &&
        <SuggestedLoan {...suggestedLoanData} handleSuggestedLenders={handleSuggestedLenders} />}

      {suggestLenders && <SuggestedLenders lenderArray={lenderArray} setLenderComparisonArray={setLenderComparisonArray} setLenderComparison={setLenderComparison} lenderComparisonArray={lenderComparisonArray} />}

      {lenderComparison && lenderComparisonArray?.length > 0 && <LenderComparison data={lenderComparisonArray}></LenderComparison>}

      <div className='w-full py-[50px]'>
        <BlogListing />

      </div>
    </div >

  );
};

export default CreditCardLoan;
