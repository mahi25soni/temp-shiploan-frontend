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
    className="flex w-full flex-row items-center justify-center m-auto h-[1225px]"
    style={{
      background: `linear-gradient(to top, ${data?.bgColor}, rgba(255, 255, 255, 0.7))`
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
        <div className="flex flex-col gap-10 lg:w-[500px] h-full items-center lg:items-start">

          <MainHeading heading={data?.heading} />
          <div className="description-text-14 line-clamp-4 hidden lg:block">
            {data?.description}
          </div>
          {data?.children}
        </div>
      </div>
    </div>
  );
};

export default HomePageComponentWrapper;
