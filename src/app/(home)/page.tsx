import BlogListing from "@/components/BlogListing/BlogListing";
import CarouselWrapper from "@/components/CarouselWrapper/CarouselWrapper";
import HomePageComponentWrapper from "@/components/wrappers/HomePageComponentWrapper";
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
    </div>
  );
};

export default HomePage;
