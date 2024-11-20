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
  {
    name: 'emi',
    label: 'EMI',
    minValue: 0,
    maxValue: 100000, // In Rupees
    step: 1,
    type: "currency"
  },
  {
    name: 'proposed_emi',
    label: 'Proposed EMI',
    minValue: 0,
    maxValue: 15, // In Rupees
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
  disbursement: string,
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
      emi: 0,
      proposed_emi: 0,
    },
    onSubmit: (values) => {
      setSuggestedLoanData({
        amount: 10000,
        tenure: 15,
        roi: 10.1
      })
      setSuggestLoan(true)
    },
  })
  const [lenderComparisonArray, setLenderComparisonArray] = useState<LenderInfo[]>([])
  const [lenderArray, setLenderArray] = useState<LenderInfo[]>(LenderSampleData)
  return (

    < div className='min-h-screen w-full bg-light-blue pb-5' >
      <PageWrapper heading='Balance Transfer on Credit Card Debt' altText='Background Image' bgColor='#D5E8ED' mainImage='/credit cards.svg' description='Lorem ipsum dolor sit amet consectetur. Semper sed malesuada quisque orci tincidunt lectus sollicitudin quam. Convallis in nisl odio enim arcu neque. Nulla ipsum venenatis volutpat eu. Venenatis nisi.'>

        <LoanCalculator InputDataList={InputRangeData} formik={formik} heading='Credit Card Balance Transfer'></LoanCalculator>


      </PageWrapper>
      {suggestLoan &&
        <SuggestedLoan {...suggestedLoanData} setSuggestedLenders={setSuggestLenders} />}
      {suggestLenders && <SuggestedLenders lenderArray={lenderArray} setLenderComparisonArray={setLenderComparisonArray} setLenderComparison={setLenderComparison} lenderComparisonArray={lenderComparisonArray} />}
      {lenderComparison && lenderComparisonArray?.length > 0 && <LenderComparison data={lenderComparisonArray}></LenderComparison>}

      <div className='w-full py-[50px]'>
        <BlogListing />

      </div>
    </div >

  );
};

export default CreditCardLoan;
