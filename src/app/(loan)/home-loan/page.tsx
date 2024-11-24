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
  logo: string,
  lender_link: string,
  values: {
    id: number,
    label_name: string,
    value: number
    type: string
  }[]
}

const HomeLoan = () => {
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

  const [lenderComparisonArray, setLenderComparisonArray] = useState<LenderInfo[]>([])
  const [lenderArray, setLenderArray] = useState<LenderInfo[]>([])

  const handleSuggestedLenders = async () => {
    const { data } = await axios.post("/calculate/home-loan", { ...suggestedLoanData, type: 'Home Loan' })


    const StructedData = data?.data.map((item: any) => {
      return {
        id: item?.id,
        bank_name: item?.bank_name,
        first_label: 'Interst Rate',
        second_label: 'Current EMI',
        third_label: 'New EMI',
        first_value: item?.interest_rate,
        second_value: item?.current_emi,
        third_value: item?.new_emi,
        logo: item?.logo
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
      {suggestLoan && <SuggestedLoan {...suggestedLoanData} handleSuggestedLenders={handleSuggestedLenders} />}
      {suggestLenders && <SuggestedLenders lenderArray={lenderArray} setLenderComparisonArray={setLenderComparisonArray} setLenderComparison={setLenderComparison} lenderComparisonArray={lenderComparisonArray} />}
      {lenderComparison && lenderComparisonArray?.length > 0 && <LenderComparison data={lenderComparisonArray}></LenderComparison>}

      <div className='w-full py-[50px]'>
        <BlogListing />

      </div>
    </div>

  );
};

export default HomeLoan;
