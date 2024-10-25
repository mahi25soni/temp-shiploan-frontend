import React from "react";

const LoanCalculator = () => {
  return (
    <div className="flex w-[360px] flex-col gap-5">
      <div className="rounded-32 bg-white border-basic p-8 h-[300px] text-4xl backdrop-blur-md shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col gap-4 w-full">
        <div className="text-light-gray font-semibold text-[18px] leading-[21.78px]">
            Home Loan Balancer Tranfer
        </div>
      </div>
      <button className="w-full rounded-32 bg-light-gray p-4 text-[18px] font-bold text-yellow-orange lg:w-[238px]">
        Start Saving
      </button>
    </div>
  );
};

export default LoanCalculator;
