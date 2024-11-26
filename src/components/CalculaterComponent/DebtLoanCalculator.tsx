"use client";
import { FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import InputRange from "../atoms/InputRange";
import Image from "next/image";


const LoanTermField = {
    name: 'loan_term',
    label: 'Loan Repayment Term',
    minValue: 0,
    maxValue: 18, // In months
    step: 1,
    type: "time"
}


interface LoanCalculatorBasicData {
    name: string,
    label: string,
    minValue: number,
    maxValue: number,
    step: number,
    type: string

}

interface LoanCalculatorProps {
    InputDataList: LoanCalculatorBasicData[],
    formik: FormikProps<any>,
    heading: string,
    addCalculator: (value: void) => void,
    removeCalculator: (value: number) => void
}

interface loanFieldInterface {
    amount: number,
    payment: number,
    interest: number
}

interface LoanCalculatorProps {

}

const DebtLoanCalculator = (data: LoanCalculatorProps) => {

    const [dropdownLoan, setDropdownLoan] = useState<{
        [key: number]: Boolean
    }>({});


    const handleDropdown = (index: any) => {
        setDropdownLoan((prevState) => {
            return {
                ...prevState,
                [index]: !prevState[index]
            }
        })
    };




    return (
        <div className="flex w-[360px] flex-col gap-5 lg:w-[521px]">
            <div className="rounded-32 bg-white border-basic p-8 text-[38px] backdrop-blur-md shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col gap-4 w-full">
                <div className="text-light-gray font-bold text-[20px] leading-[21.78px]">
                    {data?.heading}
                </div>

                {data?.formik?.values?.calculators.map((loadField: loanFieldInterface, index: number) => {
                    return <div className="flex flex-col gap-5 w-full p-2" key={index}>
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-2">
                                <div className="text-sm leading-[16.94px] font-normal">
                                    Loan {index + 1}
                                </div>
                                <Image src={"/Trash.svg"} width={16} height={16} alt="Delete Icon" onClick={() => data?.removeCalculator(index)} />
                            </div>
                            <div onClick={() => handleDropdown(index)} className="cursor-pointer">
                                <div
                                    className={`transition-transform duration-300 ${!dropdownLoan[index] ? "rotate-180" : ""
                                        }`}
                                >
                                    <Image src="/CaretDown.svg" width={16} height={16} alt="Dropdown Icon" />
                                </div>
                            </div>
                        </div>

                        {!dropdownLoan[index] && data?.InputDataList?.length > 0 && data?.InputDataList?.map((item, inputIndex) => {
                            return <InputRange key={inputIndex} SingleInputData={item} formik={data?.formik} loanIndex={index} />
                        })}
                    </div>
                })}





                <div className="flex justify-between items-center w-full h-12 p-2  font-semibold">
                    <div className="text-sm leading-[16.94px]">
                        Add another loan
                    </div>
                    <div className="" onClick={() => data?.addCalculator()}>
                        <Image src={"/PlusCircle.svg"} width={16} height={16} alt="Dropdown Icon" className="font-bold" />

                    </div>
                </div>

                <InputRange SingleInputData={LoanTermField} formik={data?.formik} />





            </div>
            <button className="w-full rounded-32 bg-light-gray p-4 text-[20px] font-bold text-yellow-orange transition-all duration-400 ease-in-out  hover:scale-[102%] hover:shadow-[0_0_2px_2px_rgba(0,0,0,0.4)]" onClick={() => data?.formik?.handleSubmit()}>
                Start Saving
            </button>
        </div>
    );
}

export default DebtLoanCalculator