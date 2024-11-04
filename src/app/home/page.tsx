"use client"
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const CarouselWrapper = dynamic(() => import("@/components/CarouselWrapper/CarouselWrapper"));
const BlogListing = dynamic(() => import("@/components/BlogListing/BlogListing"));
const HomePageComponentWrapper = dynamic(() => import("@/components/wrappers/HomePageComponentWrapper"));


const LoanOptions: { [key: string]: string }[] = [
  { tab: "Home Loan", link: "/home-loan" },
  { tab: "Credit Card Debt", link: "/creditcard-loan" },
  { tab: "Student Loan", link: "/student-loan" },
];
const HomePage = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState<string>("Home Loan");
  const [selectedTabLink, setSelectedTabLink] = useState<string>("/home-loan");

  useEffect(() => {
    const theLink = LoanOptions.find((item) => item.tab === selectedTab)?.link || "/home-loan";
    setSelectedTabLink(theLink);
  }, [selectedTab]);

  return (
    <div>
      <CarouselWrapper />
      <HomePageComponentWrapper
        bgColor={"#FFFFFF"}
        mainImage="/looking through resumes.png"
        heading="Compare lenders to find the right one"
        description="Lorem ipsum dolor sit amet consectetur. Diam sed mattis facilisis eget tellus dui augue sagittis ultricies. Scelerisque elit duis in tortor. Volutpat elit neque in sem nulla quam imperdiet. Mi nisl sem amet odio."
        altText="kuchh bhi rakhlo"
      >
        <div className="flex max-w-[423px] py-2 border-y border-light-gray gap-[30px] overflow-hidden lg:max-w-full">
          {LoanOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedTab(item?.tab)}
              className={`text-2xl leading-9 whitespace-nowrap cursor-pointer ${selectedTab !== item.tab ? "opacity-20" : ""
                }`}
            >
              {item.tab}
            </div>
          ))}
        </div>


        <Link href={selectedTabLink} passHref>
          <button className="w-[270px] rounded-32 bg-light-gray p-4 text-[18px] font-bold text-yellow-orange">
            Start Saving
          </button>
        </Link>
      </HomePageComponentWrapper>
      <BlogListing />
      <HomePageComponentWrapper
        bgColor={"#D1E6DF"}
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
