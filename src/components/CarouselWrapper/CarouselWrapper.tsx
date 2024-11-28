"use client";
import { useNavbar } from "@/context/contextApi";
import { CarouselSampleData } from "@/testdata/carousel-data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SlideDataInterface {
  title: string;
  desc: string;
  bgImage: string;
  bgColor: string;
  redirectUrl: string,
  tab: string,
  ctaName: string;
}

const slides: SlideDataInterface[] = CarouselSampleData

const CarouselWrapper = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { setSelectedTab } = useNavbar()

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Automatically change the slide every 4 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4000ms (4 seconds)

    // Clear the interval when the component unmounts or the slide changes
    return () => clearInterval(slideInterval);
  }, [activeSlide]);


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
              } lg:top-0 lg:grid lg:grid-cols-12 lg:pl-[222px] lg:pr-[50px]`}
          >
            <div className="flex h-[300px] w-[334px] flex-col items-start justify-start gap-6 rounded-32 border border-basic bg-white p-5 text-center lg:col-span-6 lg:h-max lg:min-w-[456px] lg:text-left xl:col-span-5 xl:w-4/5 xl:h-max">
              <div className="line-clamp-2 text-[32px] font-bold leading-[48px] lg:text-[48px] lg:leading-[72px]">
                {slide?.title}
              </div>
              <div className="line-clamp-3 text-[18px] leading-[1.3rem] lg:line-clamp-none">
                {slide?.desc}
              </div>
              <Link href={slides[activeSlide]?.redirectUrl} key={index} className="w-full" onClick={() => setSelectedTab(slides[activeSlide]?.tab)}>
                <button className="w-full rounded-32 bg-light-gray p-4 description-text-18  font-bold text-yellow-orange lg:w-[238px]  transition-all duration-400 ease-in-out  hover:scale-[102%] hover:shadow-[0_0_2px_2px_rgba(0,0,0,0.4)]">
                  {slide?.ctaName}
                </button>
              </Link>
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
        className="group absolute start-0 top-24 z-30 flex h-full cursor-pointer items-center justify-center  pl-2 lg:pl-8 lg:top-0"
        onClick={handlePrev}
      >
        <div className="w-[42px] h-[52px] lg:w-[60px] lg:h-[70px] border-2 lg:border-[4.84px] rounded-32 lg:rounded-[77.45px] flex justify-center items-center border-light-range bg-white">
          <FaChevronLeft className="text-range-line text-[20px] lg:text-[35px]" />
        </div>


      </button>

      <button
        type="button"
        className="group absolute end-0 top-24 z-30 flex h-full cursor-pointer items-center justify-center pr-2 lg:pr-8 lg:top-0"
        onClick={handleNext}
      >

        <div className="w-[42px] h-[52px] lg:w-[60px] lg:h-[70px] border-2 lg:border-[4.84px] rounded-32 lg:rounded-[77.45px] flex justify-center items-center border-light-range bg-white">
          <FaChevronRight className="text-range-line text-[20px] lg:text-[35px]" />
        </div>
      </button>
    </div>
  );
};

export default CarouselWrapper;
