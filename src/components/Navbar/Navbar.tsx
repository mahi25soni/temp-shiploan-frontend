"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavbarItems: { [key: string]: string }[] = [
  { tab: "Home", link: "/" },
  { tab: "Debt Consolidation", link: "/debt-consolidation" },
  { tab: "Home Loan", link: "/home-loan" },
  { tab: "Credit Card Debt", link: "/creditcard-loan" },
  { tab: "Student Loan", link: "/student-loan" },
  // { tab: "Blogs", link: "/blogs" }
];

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Home");

  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <div className="fixed left-0 top-0 z-50 flex h-[125px] w-full items-center justify-between bg-white/25 p-8 text-black backdrop-blur-[64px]">
      <div className="flex items-center justify-start gap-[30px] lg:gap-[58px]">
        <div className="relative">
          <Image
            src="/theLogo.png"
            height={22.76}
            width={150}
            objectFit="contain"
            alt="logo"
          />
        </div>
        {NavbarItems?.map((item, index) => {
          return (
            <Link key={index} href={item?.link} passHref>
              <div
                key={index}
                onClick={() => handleSelectTab(item?.tab)}
                className={`hidden cursor-pointer text-base lg:block ${selectedTab === item?.tab ? "font-bold" : "font-normal"}`}
              >
                {item?.tab}
              </div>
            </Link>
          );
        })}
        <div></div>
      </div>
      <div className="relative h-8 w-8">
        <Image src="/List.svg" fill alt="search" className="object-fill" />
      </div>
    </div>
  );
};

export default Navbar;
