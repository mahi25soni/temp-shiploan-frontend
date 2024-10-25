"use client";
import React from 'react'
import { FormikProps } from 'formik'

interface InputRangeBasicData  {
    name : string,
    label : string,
    minValue : number,
    maxValue : number,
  }
  
  interface InputRangeProps {
    SingleInputData : InputRangeBasicData,
    formik : FormikProps<any>,
  }

const InputRange = (data : InputRangeProps) => {
    console.log("The data inside input range is", data)
  return (
    <div className='w-full flex flex-col gap-4'>
        <div className='flex justify-between text-sm leading-[17px]'>
            <label htmlFor={data?.SingleInputData?.name} className=''>{data?.SingleInputData?.label}</label>
            <span className='p-1 rounded-lg bg-light-range text-range-text font-medium'>{data?.formik?.values[data?.SingleInputData?.name]}</span>
        </div>
        <input 
        type="range" 
        max={data?.SingleInputData?.maxValue} 
        min={data?.SingleInputData?.minValue} 
        className="appearance-none w-full h-[3px] bg-range-text rounded-lg cursor-pointer border-none m-0 p-0"
        onChange={(e) => data?.formik.setFieldValue(data?.SingleInputData?.name, e.target.value)}
        value={data?.formik?.values[data?.SingleInputData?.name]}
    />
    </div>
  )
}

export default InputRange