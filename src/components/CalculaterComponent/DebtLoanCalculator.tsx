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
    heading: string
}

const DebtLoanCalculator = (data: LoanCalculatorProps) => {

    const [dropdownLoan, setDropdownloan] = useState()


    const handleDropdown = () => {

    }
    return (
        <div className="flex w-[360px] flex-col gap-5 lg:w-[521px]">
            <div className="rounded-32 bg-white border-basic p-8 text-[38px] backdrop-blur-md shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col gap-4 w-full">
                <div className="text-light-gray font-semibold text-[18px] leading-[21.78px]">
                    {data?.heading}
                </div>

                <div className="flex flex-col gap-5 w-full p-2">

                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                            <div className="text-sm leading-[16.94px] font-normal">
                                Loan 1
                            </div>
                            <Image src={"/Trash.svg"} width={16} height={16} alt="Delete Icon" />
                        </div>
                        <div className="">
                            <Image src={"/CaretDown.svg"} width={16} height={16} alt="Dropdown Icon" />

                        </div>
                    </div>

                    {data?.InputDataList?.length > 0 && data?.InputDataList?.map((item, index) => {
                        return <InputRange key={index} SingleInputData={item} formik={data?.formik} />
                    })}
                </div>
                <div className="flex flex-col gap-5 w-full p-2">

                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                            <div className="text-sm leading-[16.94px] font-normal">
                                Loan 1
                            </div>
                            <Image src={"/Trash.svg"} width={16} height={16} alt="Delete Icon" />
                        </div>
                        <div className="">
                            <Image src={"/CaretDown.svg"} width={16} height={16} alt="Dropdown Icon" />

                        </div>
                    </div>

                    {/* {data?.InputDataList?.length > 0 && data?.InputDataList?.map((item, index) => {
                        return <InputRange key={index} SingleInputData={item} formik={data?.formik} />
                    })} */}
                </div>
                <div className="flex justify-between items-center w-full h-12 p-2">
                    <div className="text-sm leading-[16.94px] font-normal">
                        Add another loan
                    </div>
                    <div className="">
                        <Image src={"/PlusCircle.svg"} width={16} height={16} alt="Dropdown Icon" />

                    </div>
                </div>






            </div>
            <button className="w-full rounded-32 bg-light-gray p-4 text-[20px] font-bold text-yellow-orange" onClick={() => data?.formik?.handleSubmit()}>
                Start Saving
            </button>
        </div>
    );
}

export default DebtLoanCalculator