import React from 'react';

const LenderComparison = () => {
  return (
    <div className="p-6 w-[329px] md:w-[1250px]  rounded-[32px] bg-white border border-gray-300 m-6 md:m-14  mx-auto ">
      <table className=" w-full  bg-white border border-gray-300 text-center">
        <thead>
          <tr className="">
            <th className="py-4 px-6 font-bold text-[24px] md:text-[64px] border-b border-gray-300">Name</th>
            <th className="py-4 px-6 font-bold text-[24px] md:text-[64px] border-b border-gray-300">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2} className="py-3 gap-[64px] text-[14px] md:text-[32px]  border-t border-gray-300">ROI</td>
          </tr>
          <tr>
            <td className="py-3 px-2 md:px-6 font-bold text-[14px] md:text-[32px] border-t border-gray-300">8.99-29.99%</td>
            <td className="py-3 px-2 md:px-6 font-bold text-[14px] md:text-[32px] border-t border-gray-300">7.99-29.99%</td>
          </tr>
          <tr>
            <td colSpan={2} className="py-3 gap-[64px] text-[14px] md:text-[32px] border-t border-gray-300">Amount</td>
          </tr>
          <tr>
            <td className="py-3 px-2 md:px-6 font-bold text-[14px] md:text-[32px] border-t border-gray-300">10L - 50L</td>
            <td className="py-3 px-2 md:px-6font-bold text-[14px] md:text-[32px] border-t border-gray-300">25L - 70L</td>
          </tr>
          <tr>
            <td colSpan={2} className="py-3 gap-[64px] text-[14px] md:text-[32px]  border-t border-gray-300">Eligibility</td>
          </tr>
          <tr>
            <td className="py-3 px-2 md:px-6 font-bold text-[14px] md:text-[32px] border-t border-gray-300">10L - 50L</td>
            <td className="py-3 px-2 md:px-6 font-bold text-[14px] md:text-[32px] border-t border-gray-300">25L - 70L</td>
          </tr>
          <tr>
            <td colSpan={2} className="py-3 gap-[64px] text-[14px] md:text-[32px] border-t border-gray-300">Disbursement Period</td>
          </tr>
          <tr>
            <td className="py-3 px-2 md:px-6 font-bold text-[14px] md:text-[32px] border-t border-gray-300">10L - 50L</td>
            <td className="py-3 px-2 md:px-6 font-bold text-[14px] md:text-[32px] border-t border-gray-300">25L - 70L</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LenderComparison;
