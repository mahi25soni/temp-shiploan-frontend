import LoanCalculator from '@/components/CalculaterComponent/LoanCalculator'
import PageWrapper from '@/components/wrappers/PageWrapper'
import React from 'react'

const DebtConsolidation = () => {
  return (
    <PageWrapper heading='How Debt Consolidation works' altText='Background Image' bgColor='#FDEFF0' mainImage='/money and pie chart.png' description='Lorem ipsum dolor sit amet consectetur. Semper sed malesuada quisque orci tincidunt lectus sollicitudin quam. Convallis in nisl odio enim arcu neque. Nulla ipsum venenatis volutpat eu. Venenatis nisi.'>

        <LoanCalculator ></LoanCalculator>

    </PageWrapper>
  )
}

export default DebtConsolidation