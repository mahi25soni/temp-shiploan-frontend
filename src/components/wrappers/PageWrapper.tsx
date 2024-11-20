import Image from "next/image";
import React, { ReactNode } from "react";
import MainHeading from "../atoms/MainHeading";

interface PageWrapperProps {
  bgColor: string;
  mainImage?: string;
  altText?: string;
  heading: string;
  description: string;
  children: ReactNode;
}

const PageWrapper = (data: PageWrapperProps) => {
  return (

    <div className="flex w-full  flex-col items-center gap-10 justify-start  lg:flex-row lg:justify-between lg:gap-20 lg:mt-[125px] lg:items-start lg:px-[134px] lg:pt-[122px]">
      {data?.mainImage && (<div className="relative min-h-[292px] w-[282px] lg:h-[544px] lg:w-[526px] lg:hidden">
        <Image
          src={data?.mainImage}
          layout="fill"
          objectFit="fill"
          alt={data?.altText || "Main Image"}
        />
      </div>)}

      <div className="justify-start flex h-full flex-col items-center px-5 lg:px-10 gap-5 lg:w-[561px] lg:items-start">
        <MainHeading heading={data?.heading} align="left" />
        <div className="text-[18px] leading-[1.3rem] lg:description-text-24">
          {data?.description}
        </div>
        <div className="lg:hidden flex flex-col  gap-10">
          {data?.children}

        </div>

      </div>
      <div className="hidden lg:flex  flex-col  gap-10">
        {data?.children}
      </div>
    </div>
  );
};

export default PageWrapper;
