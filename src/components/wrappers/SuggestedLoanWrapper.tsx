import Image from 'next/image'
import React, { ReactNode } from 'react'

interface SuggestedLoanWrapperProps {
    bgColor: string;
    mainImage: string;
    altText: string;
    children: ReactNode;
  }

const SuggestedLoanWrapper = (data: SuggestedLoanWrapperProps ) => {
  return (
    <div
    className="m-auto flex  lg:h-[1192px] h-full w-full  flex-row items-center justify-start"
    style={{
      background: `${data?.bgColor}`,
    }}
  >
    <div className="flex w-full  flex-col items-center gap-10 justify-start  lg:flex-row lg:justify-center lg:gap-20">
      <div className="relative min-h-[292px] w-[282px] lg:h-[544px] lg:w-[526px]">
        <Image
          src={data?.mainImage}
          layout="fill"
          objectFit="fill"
          alt={data?.altText}
        />
      </div>
        {data?.children}
    </div>
  </div>
  )
}

export default SuggestedLoanWrapper