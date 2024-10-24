import BlogListing from "@/components/BlogListing/BlogListing";
import CarouselWrapper from "@/components/CarouselWrapper/CarouselWrapper";
import HomePageComponentWrapper from "@/components/wrappers/HomePageComponentWrapper";
import Image from "next/image";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <CarouselWrapper />
      <BlogListing />
      <HomePageComponentWrapper
        bgColor={"#D1E6DF"}
        mainImage="/looking through resumes.png"
        heading="Compare lenders to find the right one"
        description="Lorem ipsum dolor sit amet consectetur. Diam sed mattis facilisis eget tellus dui augue sagittis ultricies. Scelerisque elit duis in tortor. Volutpat elit neque in sem nulla quam imperdiet. Mi nisl sem amet odio."
        altText="kuchh bhi rakhlo"
      >
        <button className="w-[270px] rounded-32 bg-light-gray p-4 text-[18px] font-bold text-yellow-orange">
          Start Saving
        </button>
      </HomePageComponentWrapper>
      <HomePageComponentWrapper
        bgColor={"#FFFFFF"}
        mainImage="/convert megaphone.png"
        heading="Get updates in your inbox"
        description="Lorem ipsum dolor sit amet consectetur. Diam sed mattis facilisis eget tellus dui augue sagittis ultricies. Scelerisque elit duis in tortor. Volutpat elit neque in sem nulla quam imperdiet. Mi nisl sem amet odio."
        altText="kuchh bhi rakhlo"
      >
        <div className="flex h-12 items-center justify-start gap-3">
          <input
            type="email"
            placeholder="Enter your e-mail address"
            className="h-full w-[270px] rounded-lg border border-basic bg-white px-4 py-3"
          />

          <button className="flex h-full w-12 items-center justify-center text-yellow-orange bg-black rounded-lg">
            <Image
              src="EnvelopeOpen.svg"
              alt="Email button"
              width={16}
              height={16}
            />
          </button>
        </div>
      </HomePageComponentWrapper>
    </div>
  );
};

export default HomePage;
