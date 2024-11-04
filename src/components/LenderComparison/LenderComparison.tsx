import React from 'react';


interface LenderInfo {
  id: string,
  name: string,
  roi: string,
  amount: string,
  eligibility: string,
  disbursement: string
}

interface props {
  data?: LenderInfo[]
}

const LenderComparison = ({data} : props) => {
  return (
    <div className="lg:px-[134px] flex justify-center  my-5 flex-col gap-6 items-center">
               <div className='flex items-center justify-between w-[353px] lg:w-full'>

      <div className='font-bold text-base lg:text-5xl lg:leading-[60px] '>
      Lender Comparison
      </div>
               </div>
      <div className='p-6  w-[353px]  lg:w-full  rounded-[32px] bg-white border border-gray-300 shadow-[0_2px_8px_rgba(0,0,0,0.25)]  '>
      <table className=" w-full  bg-white border border-gray-300 text-center table-fixed">
        <thead>
          <tr className="">
            <th className="py-4 px-6 font-bold text-[24px] lg:text-[64px] border-b border-gray-300">{data?.[0]?.name}</th>
            <th className="py-4 px-6 font-bold text-[24px] lg:text-[64px] border-b border-gray-300">{data?.[1]?.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2} className="py-3 gap-[64px] text-[14px] lg:text-[32px] lg:leading-[38.73px]  border-t border-gray-300">ROI</td>
          </tr>
          <tr>
            <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[32px] lg:leading-[38.73px] border-t border-gray-300">{data?.[0]?.roi}</td>
            <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[32px] lg:leading-[38.73px] border-t border-gray-300">{data?.[1]?.roi}</td>
          </tr>
          <tr>
            <td colSpan={2} className="py-3 gap-[64px] text-[14px] lg:text-[32px] lg:leading-[38.73px] border-t border-gray-300">Amount</td>
          </tr>
          <tr>
            <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[32px] lg:leading-[38.73px] border-t border-gray-300">{data?.[0]?.amount}</td>
            <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[32px] lg:leading-[38.73px] border-t border-gray-300">{data?.[1]?.amount}</td>
          </tr>
          <tr>
            <td colSpan={2} className="py-3 gap-[64px] text-[14px] lg:text-[32px] lg:leading-[38.73px]  border-t border-gray-300">Eligibility</td>
          </tr>
          <tr>
            <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[32px] lg:leading-[38.73px] border-t border-gray-300">{data?.[0]?.eligibility}</td>
            <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[32px] lg:leading-[38.73px] border-t border-gray-300">{data?.[1]?.eligibility}</td>
          </tr>
          <tr>
            <td colSpan={2} className="py-3 gap-[64px] text-[14px] lg:text-[32px] lg:leading-[38.73px] border-t border-gray-300">Disbursement Period</td>
          </tr>
          <tr>
            <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[32px] lg:leading-[38.73px] border-t border-gray-300">{data?.[0]?.disbursement}</td>
            <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[32px] lg:leading-[38.73px] border-t border-gray-300">{data?.[1]?.disbursement}</td>
          </tr>
        </tbody>
      </table>
      </div>

    </div>
  );
}

export default LenderComparison;
