"use client";
import { CarouselSampleData } from "@/testdata/carousel-data";
import Image from "next/image";
import React, { useState } from "react";

interface SlideDataInterface {
    title: string;
    desc: string;
    bgImage : string;
    bgColor: string;
}

const slides : SlideDataInterface[] = CarouselSampleData

const CarouselWrapper = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  console.log("asl;fj;lsfdjsdkf ", slides[activeSlide])

  return (
    <div   className="relative h-[915px] w-full text-black md:h-[970px]"
  style={{
    background: `linear-gradient(to bottom, ${slides[activeSlide]?.bgColor}, rgba(255, 255, 255, 0.7))`
  }}>
      <div className="absolute left-1/2 top-20 m-auto h-[400px] w-[350px] -translate-x-1/2 transform lg:hidden">
        <Image
          src={slides[activeSlide]?.bgImage}
          alt="money and pie chart"
          fill
          className="h-full w-full object-fit"
        />
      </div>
      <div className="relative h-full w-full overflow-hidden rounded-lg md:h-full">
        {slides?.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 top-40 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            } xl:pl-[180px lg:top-0 lg:grid lg:grid-cols-12 lg:pl-[100px] lg:pr-[20px]`}
          >
            <div className="flex h-[300px] w-[334px] flex-col items-start justify-start gap-6 rounded-32 border border-basic bg-white p-5 text-center lg:col-span-6 lg:h-max lg:w-[494px] lg:text-left xl:col-span-5">
              <div className="line-clamp-2 text-[32px] font-bold leading-[48px] lg:text-[48px] lg:leading-[72px]">
                {slide?.title}
              </div>
              <div className="line-clamp-3 text-[18px] leading-5 lg:line-clamp-none">
                    {slide?.desc}
              </div>
              <button className="w-full rounded-32 bg-light-gray p-4 text-[18px] font-bold text-yellow-orange lg:w-[238px]">
                Start Saving
              </button>
            </div>
            <div className="relative hidden h-full w-full lg:col-span-6 lg:block lg:h-3/4 xl:col-span-7 xl:h-full">
              <Image
                src={slide?.bgImage}
                alt="money and pie chart"

                fill
                className="h-full w-full object-fit"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        type="button"
        className="group absolute start-0 top-24 z-30 flex h-full cursor-pointer items-center justify-center px-4 lg:top-0"
        onClick={handlePrev}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-light-range bg-white text-range-text hover:border-range-line">
          <svg
            className="h-4 w-4 text-range-text rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        className="group absolute end-0 top-24 z-30 flex h-full cursor-pointer items-center justify-center px-4 lg:top-0"
        onClick={handleNext}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-light-range bg-white text-range-text hover:border-range-line">
          <svg
            className="h-4 w-4 text-range-text rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default CarouselWrapper;
