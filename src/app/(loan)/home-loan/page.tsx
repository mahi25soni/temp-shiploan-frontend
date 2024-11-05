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
    name: 'outstanding_amount',
    label: 'Outstanding Amount',
    minValue: 0,
    maxValue: 100000, // In Rupees
    step: 1,
    type: "currency"
  },
  {
    name: 'tenure',
    label: 'Tenure',
    minValue: 0,
    maxValue: 18, // In months
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
  disbursement: string
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
    <div className='min-h-full w-full bg-light-green pb-5'>
      (<PageWrapper heading='Balance Transfer on a Home Loan' altText='Background Image' bgColor='#D1E6DF' mainImage='/small house in winter forest.svg' description='Lorem ipsum dolor sit amet consectetur. Semper sed malesuada quisque orci tincidunt lectus sollicitudin quam. Convallis in nisl odio enim arcu neque. Nulla ipsum venenatis volutpat eu. Venenatis nisi.'>

        <LoanCalculator InputDataList={InputRangeData} formik={formik} heading='Home Loan Balance Transfer'></LoanCalculator>
        {suggestLoan && <SuggestedLoan {...suggestedLoanData} setSuggestedLenders={setSuggestLenders} />}

      </PageWrapper>)
      {suggestLenders && <SuggestedLenders lenderArray={lenderArray} setLenderComparisonArray={setLenderComparisonArray} setLenderComparison={setLenderComparison} lenderComparisonArray={lenderComparisonArray}/>}
      {lenderComparison && lenderComparisonArray?.length > 0 && <LenderComparison data={lenderComparisonArray}></LenderComparison>}
    </div>

  );
};

export default HomeLoan;
