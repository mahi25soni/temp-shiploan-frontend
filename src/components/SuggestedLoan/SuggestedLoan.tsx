import React from 'react'

interface SuggestedLoanProps {
    amount : number,
    tenure : number,
    roi : number,
}

const SuggestedLoan = (data: SuggestedLoanProps) => {
  return (
    <div className="rounded-32 bg-white border-basic p-8 text-4xl backdrop-blur-md shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col gap-5 w-[361px] lg:w-full">
                <div className="text-light-gray font-semibold text-[18px] leading-[21.78px]">
            Suggested Loan
        </div>

        <div className='border border-[#33333326] w-full'></div>

        <div className='flex flex-col gap-4 w-full '>
            <div className='flex justify-between items-center'>
                <div className='text-sm leading-[16.94px] text-[#48454C]'>
                    Amount
                </div>
                <div className='text-sm font-medium text-[#333333]'>
                    {"Rs "}{data?.amount}
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='text-sm leading-[16.94px] text-[#48454C]'>
                    Tenure
                </div>
                <div className='text-sm font-medium text-[#333333]'>
                {data?.tenure}{' months'}
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='text-sm leading-[16.94px] text-[#48454C]'>
                    Amount
                </div>
                <div className='text-sm font-medium text-[#333333]'>
                    {data?.roi}{" %"}
                </div>
            </div>
        </div>

        <div className='border border-[#33333326] w-full'></div>

        <div className='flex flex-col gap-4 '>
        <button className="w-full rounded-32 bg-light-gray p-4 text-[18px] font-bold text-yellow-orange border border-light-gray  leading-[21.78px]">
                Reduce Debt
              </button>
              <button className="w-full rounded-32 bg-transparent p-4 text-[18px] font-bold text-light-gray border border-light-gray  leading-[21.78px]">
                Get full report
                </button>
        </div>


    </div>
  )
}

export default SuggestedLoan