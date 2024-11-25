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
import Faq from '@/components/Faq/Faq';


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
    maxValue: 120, // In months
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
  logo: string,
  lender_link: string,
  values: {
    id: number,
    label_name: string,
    value: number
    type: string
  }[]
}

interface SuggestLoanInterface {
  id: number,
  label_name: string,
  value: number,
  type: string
}

const HomeLoan = () => {
  const [suggestLoan, setSuggestLoan] = useState(false)
  const [suggestLenders, setSuggestLenders] = useState(false)
  const [lenderComparison, setLenderComparison] = useState(false)
  const [suggestedLoanData, setSuggestedLoanData] = useState<SuggestLoanInterface[]>([])
  const formik = useFormik({
    initialValues: {
      outstanding_amount: 0,
      tenure: 0,
      current_roi: 0,

    },
    onSubmit: (values) => {
      const some = {
        amount: values?.outstanding_amount,
        tenure: values?.tenure,
        roi: values?.current_roi
      }
      setSuggestedLoanData([
        { id: 1, label_name: 'Outstanding Amount', value: values?.outstanding_amount, type: 'currency' },
        { id: 2, label_name: 'Payment Tenure', value: values?.tenure, type: 'time' },
        { id: 3, label_name: 'Rate of Interest', value: values?.current_roi, type: 'percentage' },
      ])
      setSuggestLoan(true)
      setSuggestLenders(false)
      setLenderComparison(false)

    },

  })

  const [lenderComparisonArray, setLenderComparisonArray] = useState<LenderInfo[]>([])
  const [lenderArray, setLenderArray] = useState<LenderInfo[]>([])

  const handleSuggestedLenders = async () => {
    const { data } = await axios.post("/calculate/home-loan", { ...suggestedLoanData, type: 'Home Loan' })


    const StructedData = data?.data.map((item: any) => {
      return {
        id: item?.id,
        bank_name: item?.bank_name,
        lender_link: "temp link",
        logo: item?.logo,
        values: [
          { id: 1, label_name: 'Interest Rate', value: item?.interest_rate, type: 'percentage' },
          { id: 1, label_name: 'Current EMI', value: item?.current_emi, type: 'currency' },
          { id: 1, label_name: 'New EMI', value: item?.new_emi, type: 'currency' },

        ]
      }
    })

    console.log("some data is ", StructedData)

    setLenderArray(StructedData)
    setSuggestLenders(true)

  }
  return (
    <div className='min-h-full w-full bg-light-green pb-5'>
      <PageWrapper heading='Maximize Your Home Loan Saving' altText='Background Image' bgColor='#D1E6DF' mainImage='/small house in winter forest.svg' description='Discover the savings you can achieve by transferring your home loan to a lower rate. Visualizing potential savings helps you take the next step toward more manageable monthly payments.'>

        <LoanCalculator InputDataList={InputRangeData} formik={formik} heading='Home Loan Balance Transfer'></LoanCalculator>


      </PageWrapper>
      {suggestLoan && <SuggestedLoan loanData={suggestedLoanData} handleSuggestedLenders={handleSuggestedLenders} />}
      {suggestLenders && <SuggestedLenders lenderArray={lenderArray} setLenderComparisonArray={setLenderComparisonArray} setLenderComparison={setLenderComparison} lenderComparisonArray={lenderComparisonArray} />}
      {lenderComparison && lenderComparisonArray?.length > 0 && <LenderComparison data={lenderComparisonArray}></LenderComparison>}

      <div className='w-full py-[50px]'>
        <BlogListing />

      </div>
      <Faq category='HomeLoan' />

    </div>

  );
};

export default HomeLoan;
