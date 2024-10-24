import Image from "next/image";
import React, { ReactNode } from "react";
import MainHeading from "../atoms/MainHeading";

interface HomePageComponentWrapperProps {
  bgColor: string;
  mainImage: string;
  altText: string;
  heading: string;
  description: string;
  children: ReactNode;
}

const HomePageComponentWrapper = (data: HomePageComponentWrapperProps) => {
  return (
    <div
      className="flex w-full flex-row items-center justify-center m-auto  h-[1192px]"
      style={{
        background: `linear-gradient(to bottom, white 10%, ${data?.bgColor} 10%, ${data?.bgColor} 90%, white 90%)`,
      }}
    >
      <div className="flex w-full flex-col  items-center gap-10 lg:flex-row lg:justify-center lg:gap-20">
        <div className="relative h-[292px] w-[282px] lg:h-[544px] lg:w-[526px]">
          <Image
            src={data?.mainImage}
            layout="fill"
            objectFit="fill"
            alt="hero-image"
          />
        </div>
        <div className="flex flex-col gap-10 w-[500px] h-full items-center lg:items-start">
          <MainHeading heading={data?.heading} />
          <div className="description-text line-clamp-4 hidden lg:block">
            {data?.description}
          </div>
          {data?.children}
        </div>
      </div>
    </div>
  );
};

export default HomePageComponentWrapper;
