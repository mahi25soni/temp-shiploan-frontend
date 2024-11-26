import React, { useState } from 'react';
import MainHeading from '../atoms/MainHeading';
import Image from 'next/image';
import formatNumber from '@/utils/numberFormatter';
import { RxCross2 } from 'react-icons/rx';

interface SuggestLoanInterface {
    id: number,
    label_name: string,
    value: number,
    type: string
}
interface MultiSuggestedLoanInterface {
    SingleLoan: SuggestLoanInterface[]
}
interface SuggestedLoanProps {
    debtLoanData?: MultiSuggestedLoanInterface[],
    loanData?: SuggestLoanInterface[],
    handleSuggestedLenders: (value: void) => void;
}

const SuggestedLoan = (data: SuggestedLoanProps) => {
    const [showAlert, setShowAlert] = useState(false);

    const [reportUserName, setReportUserName] = useState("");
    const [reportUserEmail, setReportUserEmail] = useState("");

    return (
        <>
            {showAlert && (
                <div className='fixed top-0 h-full w-full bg-black bg-opacity-45 z-50' onClick={() => setShowAlert(false)}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white shadow-lg rounded-lg p-6 w-[90%] max-w-sm z-50" onClick={(e) => e.stopPropagation()}>

                        <div className='flex flex-col gap-4 w-full'>
                            <div className='flex justify-between items-center'>

                                <div className="text-lg font-semibold">Get Full Report</div>
                                <RxCross2 className='h-6 w-6 cursor-pointer' onClick={() => setShowAlert(false)} />
                            </div>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="h-full w-full rounded-lg border border-basic bg-white px-4 py-3 "
                                value={reportUserName}
                                onChange={(e) => setReportUserName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Enter your e-mail address"
                                className="h-full w-full rounded-lg border border-basic bg-white px-4 py-3 outline-none"
                                value={reportUserEmail}
                                onChange={(e) => setReportUserEmail(e.target.value)}
                            />
                            <button
                                className="w-full rounded-32 bg-light-gray p-4 description-text-18  font-bold text-yellow-orange"

                            >
                                Send Email
                            </button>
                        </div>

                    </div>
                </div>
            )}
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


                        {data?.debtLoanData && data?.debtLoanData?.map((singleLoanData, index) => {
                            return <div className='flex flex-col gap-4 w-full' key={index}>
                                <div className="text-base leading-[16.94px] font-medium">
                                    Loan {index + 1}
                                </div>

                                {singleLoanData?.SingleLoan?.map((loanItem, index) => {
                                    return <div className='flex justify-between items-center' key={index}>
                                        <div className='text-sm leading-[16.94px] text-[#48454C]'>
                                            {loanItem?.label_name}
                                        </div>
                                        <div className='text-sm font-medium text-[#333333]'>
                                            {formatNumber(loanItem?.value, loanItem?.type)}
                                        </div>
                                    </div>
                                })}

                            </div>
                        })}

                        {data?.loanData && data?.loanData?.map((loanItem, index) => {
                            return <div className='flex justify-between items-center' key={index}>
                                <div className='text-sm leading-[16.94px] text-[#48454C]'>
                                    {loanItem?.label_name}
                                </div>
                                <div className='text-sm font-medium text-[#333333]'>
                                    {formatNumber(loanItem?.value, loanItem?.type)}
                                </div>
                            </div>
                        })}

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

            </div>
        </>
    );
};

export default SuggestedLoan;
