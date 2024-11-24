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
import axios from "../../../axios"
import DebtLoanCalculator from '@/components/CalculaterComponent/DebtLoanCalculator';


const InputRangeData = [
  {
    name: 'current_balance',
    label: 'Current Balance',
    minValue: 0,
    maxValue: 10000000, // In Rupees
    step: 1,
    type: "currency"
  },
  {
    name: 'monthly_payment',
    label: 'Monthly Payment',
    minValue: 0,
    maxValue: 10000000, // In Rupees
    step: 1,
    type: "currency"
  },
  {
    name: 'remaining_tenure',
    label: 'Remaining Payment Tenure',
    minValue: 0,
    maxValue: 120, // In months
    step: 1,
    type: "time"
  },
  {
    name: 'interest',
    label: 'Annual Interest Rate',
    minValue: 0,
    maxValue: 15, // In Percentage
    step: 0.1,
    type: "percentage"
  }
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

const something = {
  "first_label": "Total Saving",
  "second_label": "Current Total Interest",
  "third_label": "Consolidated Total Interest",
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
      loan_term: 0,
      calculators: [{ monthly_payment: 0, remaining_tenure: 0, interest: 0, current_balance: 0 }],
    },
    onSubmit: (values) => {
      setSuggestedLoanData({
        amount: 10000,
        tenure: 10000,
        roi: 10000
      })

      setSuggestLoan(true)
      setSuggestLenders(false)
      setLenderComparison(false)
    },
  })
  const [lenderComparisonArray, setLenderComparisonArray] = useState<LenderInfo[]>([])
  const [lenderArray, setLenderArray] = useState<LenderInfo[]>([])

  const handleSuggestedLenders = async () => {
    const { data } = await axios.post("/calculate/debt-consolidation", { ...formik?.values })


    const StructuredData = data?.data.map((item: any) => {
      return {
        id: item?.id,
        bank_name: item?.bank_name,
        lender_link: "temp link",
        logo: item?.logo,
        values: [
          { id: 1, label_name: 'Current Interest', value: item?.current_interest, type: 'currency' },
          { id: 1, label_name: 'New Interest', value: item?.new_interest, type: 'currency' },
          { id: 1, label_name: 'Saving', value: item?.saving, type: 'currency' },

        ]
      }
    })

    setLenderArray(StructuredData)
    setSuggestLenders(true)

  }

  const addCalculator = () => {
    formik.setFieldValue("calculators", [
      ...formik.values.calculators,
      { amount: 0, payment: 0, interest: 0 },
    ]);
  };

  const removeCalculator = (index: number) => {
    const updatedCalculators = formik.values.calculators.filter(
      (_, idx) => idx !== index
    );
    formik.setFieldValue("calculators", updatedCalculators);
  };


  return (


    <div className='min-h-screen w-full bg-light-purple pb-5'>
      <PageWrapper heading='Unlock Your Savings Potential' altText='Background Image' bgColor='#FBEED9' mainImage='/money and pie chart.svg' description='Calculate how consolidating your debts can simplify payments and save you money. With clear insights, you can make informed decisions that could lead to a brighter financial future.'>


        <DebtLoanCalculator InputDataList={InputRangeData} formik={formik} heading='Debt Consolidation Calculator' addCalculator={addCalculator} removeCalculator={removeCalculator}></DebtLoanCalculator>






      </PageWrapper>
      {suggestLoan && <SuggestedLoan {...suggestedLoanData} handleSuggestedLenders={handleSuggestedLenders} />}



      {suggestLenders && <SuggestedLenders lenderArray={lenderArray}
        setLenderComparisonArray={setLenderComparisonArray} setLenderComparison={setLenderComparison} lenderComparisonArray={lenderComparisonArray} />}


      {lenderComparison && lenderComparisonArray?.length > 0 && <LenderComparison data={lenderComparisonArray}></LenderComparison>}


      <div className='w-full py-[50px]'>
        <BlogListing />

      </div>
    </div>

  )
}

export default DebtConsolidation