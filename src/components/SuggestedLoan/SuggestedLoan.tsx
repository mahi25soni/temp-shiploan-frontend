import React from 'react'
import MainHeading from '../atoms/MainHeading';

interface SuggestedLoanProps {
    amount: number,
    tenure: number,
    roi: number,
    handleSuggestedLenders: (value: void) => void;
}

const SuggestedLoan = (data: SuggestedLoanProps) => {
    return (
        <div className='flex  flex-col items-center gap-4 justify-start  lg:flex-row lg:justify-between w-full lg:px-[134px]  lg:pb-[122px] pb-10 pt-10'>
            <div className='px-5 lg:px-10 lg:w-[561px]'>
                <MainHeading heading={"Congratulations! You can save"} />
            </div>
            <div className="rounded-32 bg-white border-basic p-8 text-4xl backdrop-blur-md shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col gap-5 w-[361px] lg:w-[521px]">
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
                            Rate of interest
                        </div>
                        <div className='text-sm font-medium text-[#333333]'>
                            {data?.roi}{" %"}
                        </div>
                    </div>
                </div>

                <div className='border border-[#33333326] w-full'></div>

                <div className='flex flex-col gap-4 '>
                    <button className="w-full rounded-32 bg-light-gray p-4 text-[18px] font-bold text-yellow-orange border border-light-gray  leading-[21.78px]" onClick={() => data?.handleSuggestedLenders()}>
                        Reduce Debt
                    </button>
                    <button className="w-full rounded-32 bg-transparent p-4 text-[18px] font-bold text-light-gray border border-light-gray  leading-[21.78px]">
                        Get full report
                    </button>
                </div>


            </div>
        </div>

    )
}

export default SuggestedLoan