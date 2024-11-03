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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab);
    setIsMobileMenuOpen(false); // Close the menu after selecting a tab
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between ${
        isMobileMenuOpen ? "h-screen" : "h-[125px]"
      } bg-white/25 p-8 text-black backdrop-blur-lg transition-all duration-300`}
    >
      {/* Logo and List Icon (hidden when menu is open) */}
      {!isMobileMenuOpen && (
        <div className="flex items-center gap-[30px] lg:gap-[58px]">
          <div className="relative">
            <Image
              src="/theLogo.png"
              height={22.76}
              width={150}
              objectFit="contain"
              alt="logo"
            />
          </div>
          {/* Desktop Navigation Links */}
          {NavbarItems.map((item, index) => (
            <Link key={index} href={item.link} passHref>
              <div
                onClick={() => handleSelectTab(item.tab)}
                className={`hidden cursor-pointer text-base lg:block ${
                  selectedTab === item.tab ? "font-bold" : "font-normal"
                }`}
              >
                {item.tab}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Menu Icon (only shows when menu is closed) */}
      {!isMobileMenuOpen && (
        <div className="relative h-8 w-8 lg:hidden" onClick={toggleMobileMenu}>
          <Image src="/List.svg" fill alt="menu" className="object-fill cursor-pointer" />
        </div>
      )}

      {/* Mobile Sidebar Menu (only shows when menu is open) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/25  p-8 text-black flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end">
            <div className="relative h-6 w-6 cursor-pointer" onClick={toggleMobileMenu}>
              <Image src="/List.svg" fill alt="close menu" className="object-fill" />
            </div>
          </div>
          
          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center gap-6 mt-12">
            {NavbarItems.map((item, index) => (
              <Link key={index} href={item.link} passHref>
                <div
                  onClick={() => handleSelectTab(item.tab)}
                  className={`text-xl ${
                    selectedTab === item.tab ? "font-bold" : "font-normal"
                  }`}
                >
                  {item.tab}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
