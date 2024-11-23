import React, { useState } from 'react';
import MainHeading from '../atoms/MainHeading';
import Image from 'next/image';

interface SuggestedLoanProps {
    amount: number;
    tenure: number;
    roi: number;
    handleSuggestedLenders: (value: void) => void;
}

const SuggestedLoan = (data: SuggestedLoanProps) => {
    const [showAlert, setShowAlert] = useState(false);

    return (
        <div className='flex flex-col items-center gap-4 justify-start lg:flex-row lg:justify-between w-full lg:px-[134px] lg:pb-[122px] pb-10 pt-10'>
            <div className='px-5 lg:px-10 lg:w-[561px]'>
                <MainHeading heading={"Congratulations! You can save"} />
            </div>
            <div className="rounded-32 bg-white border-basic p-8 text-4xl backdrop-blur-md shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col gap-5 w-[361px] lg:w-[521px]">
                <div className="text-light-gray font-semibold text-[18px] leading-[21.78px]">
                    Suggested Loan
                </div>

                <div className='border border-[#33333326] w-full'></div>

                <div className='flex flex-col gap-4 w-full'>
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

                <div className='flex flex-col gap-4'>
                    <button
                        className="w-full rounded-32 bg-light-gray p-4 text-[18px] font-bold text-yellow-orange border border-light-gray leading-[21.78px]"
                        onClick={() => data?.handleSuggestedLenders()}
                    >
                        Reduce Debt
                    </button>
                    <button
                        className="w-full rounded-32 bg-transparent p-4 text-[18px] font-bold text-light-gray border border-light-gray leading-[21.78px]"
                        onClick={() => setShowAlert(true)}
                    >
                        Get full report
                    </button>
                </div>
            </div>

            {/* Alert Section */}
            {showAlert && (
                <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-6 w-[90%] max-w-sm z-50">
                    <div className="text-lg font-semibold mb-4">Get Full Report</div>
                    <div className="flex h-12 items-center justify-start gap-3">
                        <input
                            type="email"
                            placeholder="Enter your e-mail address"
                            className="h-full w-[270px] rounded-lg border border-basic bg-white px-4 py-3"
                        />
                        <button className="flex h-full w-12 items-center justify-center text-yellow-orange bg-black rounded-lg">
                            <Image
                                src="EnvelopeOpen.svg"
                                alt="Email button"
                                width={16}
                                height={16}
                            />
                        </button>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg w-full"
                        onClick={() => setShowAlert(false)}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default SuggestedLoan;
