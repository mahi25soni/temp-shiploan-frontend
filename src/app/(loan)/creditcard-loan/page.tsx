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
    name: 'current_credit',
    label: 'Current Credit',
    minValue: 0,
    maxValue: 10000000, // In Rupees
    step: 1,
    type: "currency"
  },
  {
    name: 'monthly_payment',
    label: 'Monthly Payment',
    minValue: 0,
    maxValue: 100000, // In months
    step: 1,
    type: "currency"
  },
  {
    name: 'interest_rate',
    label: 'Annual Interest Rate',
    minValue: 0,
    maxValue: 15, // In Percentage
    step: 0.1,
    type: "percentage"
  },

]

const values = [
  { id: 1, label_name: 'Old total cost', value: 1000, type: 'currency' },
  { id: 2, label_name: 'New total cost', value: 2000, type: 'currency' },
  { id: 3, label_name: 'Saving', value: 1000, type: 'currency' }
]
interface LenderInfo {
  id: string,
  bank_name: string,
  logo: string,
  lender_link: string,
  values: {
    id: number,
    label_name: string,
    value: number
    type: string
  }[]
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
      current_credit: 0,
      monthly_payment: 0,
      interest_rate: 0,

    },
    onSubmit: (values) => {
      setSuggestedLoanData({
        amount: values?.current_credit,
        tenure: values?.monthly_payment,
        roi: values?.interest_rate
      })
      setSuggestLoan(true)
    },
  })
  const [lenderComparisonArray, setLenderComparisonArray] = useState<LenderInfo[]>([])
  const [lenderArray, setLenderArray] = useState<LenderInfo[]>([])

  const handleSuggestedLenders = async () => {
    const { data } = await axios.post("/calculate/credit-card-loan", { ...formik.values })

    const StructuredData = data?.data.map((item: any) => {
      return {
        id: item?.id,
        bank_name: item?.bank_name,
        lender_link: "temp link",
        logo: item?.logo,
        values: [
          { id: 1, label_name: 'Current card cost', value: item?.current_card_cost, type: 'currency' },
          { id: 1, label_name: 'New card cost', value: item?.new_card_cost, type: 'currency' },
          { id: 1, label_name: 'Saving', value: item?.saving, type: 'currency' },

        ]
      }
    })
    setLenderArray(StructuredData)
    setSuggestLenders(true)

  }
  return (

    < div className='min-h-screen w-full bg-light-blue pb-5' >
      <PageWrapper heading='Take Control of Your Credit Card Debt' altText='Background Image' bgColor='#D5E8ED' mainImage='/credit cards.svg' description='Estimate your savings from transferring balances and reducing high-interest payments. Understanding your options empowers you to break free from debt and regain financial stability.'>

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
