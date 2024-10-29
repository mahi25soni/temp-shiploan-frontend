"use client";
import { CarouselSampleData } from "@/testdata/carousel-data";
import Image from "next/image";
import React, { useState } from "react";

interface SlideDataInterface {
  title: string;
  desc: string;
  bgImage: string;
  bgColor: string;
}

const slides: SlideDataInterface[] = CarouselSampleData

const CarouselWrapper = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };


  return (
    <div className="relative h-[915px] w-full text-black md:h-[970px]"
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
            className={`absolute inset-0 top-40 flex items-center justify-center transition-opacity duration-700 ease-in-out ${activeSlide === index ? "opacity-100" : "opacity-0"
              } lg:mx-20 lg:top-0 lg:grid lg:grid-cols-12 lg:pl-[100px] lg:pr-[20px]`}
          >
            <div className="flex h-[300px] w-[334px] flex-col items-start justify-start gap-6 rounded-32 border border-basic bg-white p-5 text-center lg:col-span-6 lg:h-max lg:w-[494px] lg:text-left xl:col-span-5">
              <div className="line-clamp-2 text-[32px] font-bold leading-[48px] lg:text-[48px] lg:leading-[72px]">
                {slide?.title}
              </div>
              <div className="line-clamp-3 text-[18px] leading-5 lg:line-clamp-none">
                {slide?.desc}
              </div>
              <button className="w-full rounded-32 bg-light-gray p-4 description-text-18  font-bold text-yellow-orange lg:w-[238px]">
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
        <div className="relative w-[42px] h-[52px] lg:w-[101.65px] lg:h-[125.85px]">
          <Image src="/LeftSignDesktop.svg" fill alt="Left Sign "/>
        </div>
      </button>

      <button
        type="button"
        className="group absolute end-0 top-24 z-30 flex h-full cursor-pointer items-center justify-center px-4 lg:top-0"
        onClick={handleNext}
      >

                <div className="relative w-[42px] h-[52px] lg:w-[101.65px] lg:h-[125.85px]">
          <Image src="/RightSignDesktop.svg" fill alt="Right Sign "/>
        </div>
      </button>
    </div>
  );
};

export default CarouselWrapper;
