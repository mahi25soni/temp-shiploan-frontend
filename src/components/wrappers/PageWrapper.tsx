import Image from "next/image";
import React, { ReactNode } from "react";
import MainHeading from "../atoms/MainHeading";

interface PageWrapperProps {
  bgColor: string;
  mainImage: string;
  altText: string;
  heading: string;
  description: string;
  children: ReactNode;
}

const PageWrapper = (data: PageWrapperProps) => {
  return (
    <div
      className="m-auto flex  lg:h-[1192px] h-[852px] w-full flex-row items-center justify-center"
      style={{
        background: `${data?.bgColor}`,
      }}
    >
      <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-20">
        <div className="relative h-[292px] w-[282px] lg:h-[544px] lg:w-[526px]">
          <Image
            src={data?.mainImage}
            layout="fill"
            objectFit="fill"
            alt="hero-image"
          />
        </div>
        <div className="flex h-full flex-col items-center px-10 gap-5 lg:w-[500px] lg:items-start">
          <MainHeading heading={data?.heading} align="left" />
          <div className="description-text-18">
            {data?.description}
          </div>
          {data?.children}
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
