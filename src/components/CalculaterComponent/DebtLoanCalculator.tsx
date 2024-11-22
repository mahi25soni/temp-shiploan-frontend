"use client";
import { FormikProps } from "formik";
import React, { useEffect, useState } from "react";
import InputRange from "../atoms/InputRange";
import Image from "next/image";

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

const DebtLoanCalculator = (data: LoanCalculatorProps) => {

    const [dropdownLoan, setDropdownloan] = useState()


    const handleDropdown = () => {

    }

    const handleSubmition = () => {
        console.log("The formik values are", data?.formik?.values)


    }
    return (
        <div className="flex w-[360px] flex-col gap-5 lg:w-[521px]">
            <div className="rounded-32 bg-white border-basic p-8 text-[38px] backdrop-blur-md shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col gap-4 w-full">
                <div className="text-light-gray font-semibold text-[18px] leading-[21.78px]">
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
                            <div className="">
                                <Image src={"/CaretDown.svg"} width={16} height={16} alt="Dropdown Icon" />

                            </div>
                        </div>

                        {data?.InputDataList?.length > 0 && data?.InputDataList?.map((item, inputIndex) => {
                            return <InputRange key={inputIndex} SingleInputData={item} formik={data?.formik} loanIndex={index} />
                        })}
                    </div>
                })}


                <div className="flex justify-between items-center w-full h-12 p-2">
                    <div className="text-sm leading-[16.94px] font-normal">
                        Add another loan
                    </div>
                    <div className="" onClick={() => data?.addCalculator()}>
                        <Image src={"/PlusCircle.svg"} width={16} height={16} alt="Dropdown Icon" />

                    </div>
                </div>






            </div>
            <button className="w-full rounded-32 bg-light-gray p-4 text-[20px] font-bold text-yellow-orange" onClick={handleSubmition}>
                Start Saving
            </button>
        </div>
    );
}

export default DebtLoanCalculator