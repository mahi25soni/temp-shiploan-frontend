"use client"
import { useNavbar } from "@/context/contextApi";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const CarouselWrapper = dynamic(() => import("@/components/CarouselWrapper/CarouselWrapper"));
const BlogListing = dynamic(() => import("@/components/BlogListing/BlogListing"));
const HomePageComponentWrapper = dynamic(() => import("@/components/wrappers/HomePageComponentWrapper"));
import Faq from "@/components/Faq/Faq";


const LoanOptions: { [key: string]: string }[] = [
  { tab: "Debt Consolidation", link: "/debt-consolidation" },
  { tab: "Home Loan", link: "/home-loan" },
  { tab: "Credit Card Debt", link: "/creditcard-loan" },
  { tab: "Student Loan", link: "/student-loan" },
];
const HomePage = (props: Props) => {
  const { setSelectedTab } = useNavbar();

  const [tempSelectedTab, setTempSelectedTab] = useState<string>("Home Loan");
  const [selectedTabLink, setSelectedTabLink] = useState<string>("/home-loan");

  useEffect(() => {
    const theLink = LoanOptions.find((item) => item.tab === tempSelectedTab)?.link || "/home-loan";
    setSelectedTabLink(theLink);

  }, [tempSelectedTab]);

  return (
    <div>
      <CarouselWrapper />
      <HomePageComponentWrapper
        bgColor={"#FFFFFF"}
        mainImage="/looking through resumes.svg"
        heading="Compare lenders to find the right one"
        description="Lorem ipsum dolor sit amet consectetur. Diam sed mattis facilisis eget tellus dui augue sagittis ultricies. Scelerisque elit duis in tortor. Volutpat elit neque in sem nulla quam imperdiet. Mi nisl sem amet odio."
        altText="kuchh bhi rakhlo"
      >
        <div className="flex flex-col gap-4 items-start">
          {LoanOptions.map((item, index) => (
            <Link key={index} href={item.link} passHref>
              <button
                onClick={() => setTempSelectedTab(item?.tab)}
                className="  rounded-32 bg-light-gray py-2 px-4 text-[16px] font-bold text-yellow-orange"
              >
                {item.tab}
              </button>
            </Link>
          ))}
        </div>

      </HomePageComponentWrapper>
      <BlogListing />
      <HomePageComponentWrapper
        bgColor={"#D1E6DF"}
        mainImage="/convert megaphone.svg"
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
      <Faq />
    </div>
  );
};

export default HomePage;
