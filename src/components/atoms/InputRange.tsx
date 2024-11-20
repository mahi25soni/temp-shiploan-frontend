"use client";
import React, { useState } from 'react';
import { FormikProps } from 'formik';
import { FaPen } from "react-icons/fa";

interface InputRangeBasicData {
  name: string;
  label: string;
  minValue: number;
  maxValue: number;
  step: number;
  type: string;
}

interface InputRangeProps {
  SingleInputData: InputRangeBasicData;
  formik: FormikProps<any>;
}

const InputRange: React.FC<InputRangeProps> = (data: InputRangeProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLSpanElement>) => {
    const newValue = parseFloat(event.target.textContent || '');
    const isValidNumber =
      !isNaN(newValue) &&
      newValue >= data.SingleInputData.minValue &&
      newValue <= data.SingleInputData.maxValue;

    if (isValidNumber) {
      data.formik.setFieldValue(data.SingleInputData.name, newValue);
    }
    setIsEditing(false);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-between text-base leading-[17px]">
        <label htmlFor={data.SingleInputData.name} className="text-base" >
          {data.SingleInputData.label}
        </label>
        <p
          className="p-1 rounded-lg bg-light-range text-range-text font-medium cursor-pointer"
          onClick={() => setIsEditing(true)}
        >
          {data.SingleInputData.type === 'currency' ? (
            <>
              <FaPen className="inline-block mx-1" />
              Rs{' '}
              <span
                contentEditable={isEditing}
                suppressContentEditableWarning={true}
                onBlur={handleBlur}
                className="outline-none focus:ring-0 cursor-auto text-base" // Add these classes
                style={{
                  border: 'none',
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                {data.formik.values[data.SingleInputData.name]}
              </span>
            </>
          ) : data.SingleInputData.type === 'time' ? (
            <>
              <FaPen className="inline-block mx-1" />

              <span
                contentEditable={isEditing}
                suppressContentEditableWarning={true}
                onBlur={handleBlur}
                className="outline-none focus:ring-0 cursor-auto" // Add these classes
                style={{
                  border: 'none',
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                {data.formik.values[data.SingleInputData.name]}
              </span>{' '}
              mo
            </>
          ) : (
            <>
              <FaPen className="inline-block mx-1" />

              <span
                contentEditable={isEditing}
                suppressContentEditableWarning={true}
                onBlur={handleBlur}
                className="outline-none focus:ring-0 cursor-auto" // Add these classes
                style={{
                  border: 'none',
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                {data.formik.values[data.SingleInputData.name]}
              </span>{' '}
              %
            </>
          )}
        </p>
      </div>
      <input
        type="range"
        max={data.SingleInputData.maxValue}
        min={data.SingleInputData.minValue}
        className="appearance-none w-full h-[3px] bg-range-text rounded-lg cursor-pointer border-none m-0 p-0"
        onChange={(e) =>
          data.formik.setFieldValue(
            data.SingleInputData.name,
            parseFloat(e.target.value)
          )
        }
        value={data.formik.values[data.SingleInputData.name]}
        step={data.SingleInputData.step}
      />
    </div>
  );
};

export default InputRange;
