import React from 'react';


interface LenderInfo {
  id: string,
  bank_name: string,
  logo: string,
  lender_link: string,
  values: {
    id: number,
    label_name: string,
    value: number
    type: string
  }[]
}

interface props {
  data?: LenderInfo[]
}

const LenderComparison = ({ data }: props) => {
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
              <th className="py-4 px-6 font-bold text-[18px] lg:text-[30px] border-b border-gray-300">{data?.[0]?.bank_name}</th>
              <th className="py-4 px-6 font-bold text-[18px] lg:text-[30px] border-b border-gray-300">{data?.[1]?.bank_name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2} className="py-3 gap-[64px] text-[14px] lg:text-[24px] lg:leading-[38.73px]  border-t border-gray-300">{data?.[0].values?.[0].label_name}</td>
            </tr>
            <tr>
              <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[24px] lg:leading-[38.73px] border-t border-gray-300">
                {data?.[0].values?.[0].value}
              </td>
              <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[24px] lg:leading-[38.73px] border-t border-gray-300">
                {data?.[1]?.values?.[0].value ? data?.[1]?.values?.[0].value : ""}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="py-3 gap-[64px] text-[14px] lg:text-[24px] lg:leading-[38.73px] border-t border-gray-300">{data?.[0].values?.[1].label_name}</td>
            </tr>
            <tr>
              <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[24px] lg:leading-[38.73px] border-t border-gray-300">
                {data?.[0].values?.[1].value}
              </td>
              <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[24px] lg:leading-[38.73px] border-t border-gray-300">
                {data?.[1]?.values?.[1].value ? data?.[1]?.values?.[1].value : ""}

              </td>
            </tr>
            <tr>
              <td colSpan={2} className="py-3 gap-[64px] text-[14px] lg:text-[24px] lg:leading-[38.73px]  border-t border-gray-300">{data?.[0].values?.[1].label_name}</td>
            </tr>
            <tr>
              <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[24px] lg:leading-[38.73px] border-t border-gray-300">
                {data?.[0].values?.[2].value}
              </td>
              <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[24px] lg:leading-[38.73px] border-t border-gray-300">
                {data?.[1]?.values?.[2].value ? data?.[1]?.values?.[2].value : ""}

              </td>
            </tr>
            {/* <tr>
              <td colSpan={2} className="py-3 gap-[64px] text-[14px] lg:text-[24px] lg:leading-[38.73px] border-t border-gray-300">Disbursement Period</td>
            </tr>
            <tr>
              <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[24px] lg:leading-[38.73px] border-t border-gray-300">{data?.[0]?.disbursement}</td>
              <td className="py-3 px-2 lg:px-6 font-bold text-[14px] lg:text-[24px] lg:leading-[38.73px] border-t border-gray-300">{data?.[1]?.disbursement}</td>
            </tr> */}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default LenderComparison;
